import { Button, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { createRef, useEffect, useState } from "react";
import { tokens } from "../assets/themes/theme";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import { Field } from "./Field";

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
      style: [],
    },
  ]);
  const [ranges, setRanges] = useState([]);
  const [curRange, setCurRange] = useState(null);

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

  // const rangeHighlight = (text) => {
  //   const root = descRef.current.firstChild;
  //   const content = root.nodeValue;
  //   console.log(content);
  //   if (~content.indexOf(text)) {
  //     if (document.createRange) {
  //       const range = new Range();
  //       range.setStart(root, content.indexOf(text));
  //       range.setEnd(root, content.indexOf(text) + text.length);

  //       const strongBold = document.createElement("strong");
  //       range.surroundContents(strongBold);
  //     }
  //   } else {
  //     console.log("Совпадений не найдено");
  //   }
  // };

  const handleSelectionInEditorField = () => {
    const selection = document.getSelection();
    const anchor = selection.anchorOffset;
    const focus = selection.focusOffset;
    const value = selection.anchorNode.nodeValue;
    return { anchor, focus, value };
  };

  useEffect(() => {
    if (ranges.length === 0 && !curRange) {
      console.log("aboba");
    } else {
      const find = ranges.includes(curRange.value);
      if (find) {
        setRanges([...ranges.filter((el) => el !== curRange.value)]);
      }
      const updateRanges = editor.map((field) => {
        if (field.id === 1) {
          return {
            ...field,
            style: [...ranges],
          };
        }
      });
      console.log(updateRanges);
      setEditor(updateRanges);
    }
  }, [ranges, curRange]);

  const setBold = () => {
    const range = handleSelectionInEditorField();
    const start = range.value.slice(0, range.anchor);
    const boldText = range.value.slice(range.anchor, range.focus);
    const end = range.value.slice(range.focus, range.value.length);
    const arr = [start, { text: boldText, format: "bold" }, end];

    console.log(range);
    setCurRange(range);
    setRanges([...ranges, ...arr]);
  };

  return (
    <Box>
      <Box>
        <Button onClick={setBold}>
          <FormatBoldIcon sx={{ color: `${colors.grey[100]}` }} />
        </Button>
      </Box>

      <Box
        className="text-field"
        sx={{ bgcolor: `${colors.grey[100]}` }}
        ref={descRef}
        style={{ width: "570px" }}
        contentEditable="true"
        suppressContentEditableWarning={true}
        onSelect={handleSelectionInEditorField}
      >
        <Field editor={editor} />
      </Box>
    </Box>
  );
};
