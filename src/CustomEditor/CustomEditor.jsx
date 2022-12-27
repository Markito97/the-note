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
  const map = new Map();
  map.set("bold", [
    { start: 0, end: 3 },
    { start: 5, end: 8 },
    { start: 10, end: 13 },
  ]);
  map.set("normal", [
    [
      { start: 3, end: 5 },
      { start: 8, end: 10 },
      { start: 13, end: 14 },
    ],
  ]);
  const descRef = createRef();
  const [selected, setSelected] = useState("");
  const [currentFieldId, setCurrentFieldId] = useState("");
  const [count, setCount] = useState(1);
  const [editor, setEditor] = useState([
    {
      id: 1,
      type: "Paragraph",
      content: "this is a text",
      style: [
        {
          bold: [
            { start: 0, end: 3 },
            { start: 5, end: 8 },
            { start: 10, end: 13 },
          ],
        },
        {
          normal: [
            { start: 3, end: 5 },
            { start: 8, end: 10 },
            { start: 13, end: 14 },
          ],
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

  const increment = () => {
    setCount((prev) => (prev = count + 1));
  };

  const handleSelectionInEditorField = () => {
    const selection = document.getSelection();
    // const updateState = editor.map((item) => {
    //   if (item.id === 1) {
    //     return {
    //       ...item,
    //       style: [
    //         {
    //           range: [
    //             ...item.style[0].range,
    //             { start: selection.anchorOffset, end: selection.focusOffset },
    //           ],
    //           format: "bold",
    //         },
    //       ],
    //     };
    //   }
    // });
    // setEditor(updateState);
  };

  return (
    <Box>
      <Box>
        <Button>
          <FormatBoldIcon sx={{ color: `${colors.grey[100]}` }} />
        </Button>
      </Box>

      <div
        sx={{ color: `${colors.grey[100]}` }}
        ref={descRef}
        onInput={test}
        style={{ width: "570px" }}
        contentEditable="true"
        suppressContentEditableWarning={true}
        onSelect={handleSelectionInEditorField}
      >
        <Field editor={editor} currentField={currentField} />
        {/* <Count count={count} /> */}
      </div>
    </Box>
  );
};
