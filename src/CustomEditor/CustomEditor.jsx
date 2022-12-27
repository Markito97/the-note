import { Button, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { createRef, useEffect, useState } from "react";
import { tokens } from "../assets/themes/theme";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import { EightK } from "@mui/icons-material";
import { Field } from "./Field";
import { Count } from "./Count";

export const CustomEditor = ({ isCurrentPost, changeDescription }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const descRef = createRef();
  const [currentFieldId, setCurrentFieldId] = useState("");
  const [count, setCount] = useState(1);
  const [editor, setEditor] = useState([
    {
      id: 1,
      type: "Paragraph",
      content: "this is a text",
      style: [
        {
          bold: [],
        },
        {
          normal: [],
        },
      ],
    },
  ]);

  useEffect(() => {
    if (!isCurrentPost) {
    } else {
    }
  }, [isCurrentPost]);

  const test = (e) => {
    changeDescription(e.target.innerText);
  };

  const currentField = (id) => {
    setCurrentFieldId(id);
  };

  const handleSelectionInEditorField = () => {
    const selection = document.getSelection().toString();
    const selection1 = document.getSelection();
    console.log(selection1);
    const start = editor[0].content.indexOf(selection);
    const end = start + selection.length;
    return {
      startBold: start,
      endBold: end,
      startNormal: end,
      endNormal: editor[0].content.length,
    };
  };

  const setBold = () => {
    const ranges = handleSelectionInEditorField();
    console.log(ranges);
    // if (ranges.start === 0 && ranges.end === 0) return;
    const updateState = editor.map((item) => {
      if (item.id === 1) {
        return {
          ...item,
          style: [
            {
              bold: [...item.style[0].bold],
            },
            {
              normal: [
                ...item.style[1].normal,
                { start: ranges.end, end: ranges.length },
              ],
            },
          ],
        };
      }
    });
    setEditor(updateState);
  };

  return (
    <Box>
      <Box>
        <Button onClick={setBold}>
          <FormatBoldIcon sx={{ color: `${colors.grey[100]}` }} />
        </Button>
      </Box>

      <Box
        sx={{ bgcolor: `${colors.grey[100]}` }}
        ref={descRef}
        style={{ width: "570px" }}
        contentEditable="true"
        suppressContentEditableWarning={true}
        onSelect={handleSelectionInEditorField}
      >
        <Field editor={editor} currentField={currentField} />
      </Box>
    </Box>
  );
};
