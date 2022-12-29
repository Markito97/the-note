import { Button, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { createRef, useEffect, useState } from "react";
import { tokens } from "../assets/themes/theme";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import { Field } from "./Field";
import { v4 as uuidv4 } from "uuid";

export const CustomEditor = ({ isCurrentPost, changeDescription }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const descRef = createRef();
  const [editor, setEditor] = useState([
    {
      id: 1,
      type: "Paragraph",
      content: "this is a text",
      ranges: [],
    },
  ]);
  const [textFieldKey, setTextFieldKey] = useState("");

  useEffect(() => {
    if (!isCurrentPost) {
    } else {
    }
  }, [isCurrentPost]);

  const handleTextFieldId = (key) => {
    setTextFieldKey(key);
  };

  const parseStirng = (selection) => {
    const start = selection.commonAncestorContainer.nodeValue.slice(
      0,
      selection.startOffset
    );
    const selected = selection.commonAncestorContainer.nodeValue.slice(
      selection.startOffset,
      selection.endOffset
    );
    const end = selection.commonAncestorContainer.nodeValue.slice(
      selection.endOffset,
      selection.commonAncestorContainer.nodeValue.length
    );
    console.log(`Начало ${start} Выбранный текст ${selected} Конец ${end}`);
    console.log(selection.commonAncestorContainer.nodeValue);
    return [
      { key: uuidv4(), text: start, format: "normal" },
      { key: uuidv4(), text: selected, format: "bold" },
      { key: uuidv4(), text: end, format: "text" },
    ];
  };

  const handleSelectetion = () => {
    const selection = window.getSelection().getRangeAt(0);
    return selection;
  };

  const updateRanges = (ranges) => {
    setEditor(
      editor.map((field) => {
        if (field.id === 1) {
          return {
            ...field,
            ranges: [...ranges],
          };
        }
      })
    );
  };

  const findCurrentTextField = () => {
    return editor.map((textField) => {
      return textField.ranges.filter(
        (currentText) => currentText.key === textFieldKey
      );
    });
  };

  const setBold = () => {
    const selection = handleSelectetion();
    const parsedString = parseStirng(selection);
    const [currentData] = findCurrentTextField();
    if (currentData.length === 0) {
      updateRanges(parsedString);
    } else {
      const parsedString = parseStirng(selection);
      // надо вытыкать по старому индексу тогда будет ок - думаю
      const filtered = editor[0].ranges.filter(
        (el) => el.key !== currentData[0].key
      );

      const newArr = [...filtered, ...parsedString];
      console.log(newArr);
      updateRanges(newArr);
      // console.log(editor[0].ranges);
      // console.log(currentData);
      // console.log(parsedString);
    }
  };

  // this is a text

  // thisa text is

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
      >
        <Field editor={editor} handleTextFieldId={handleTextFieldId} />
      </Box>
    </Box>
  );
};
