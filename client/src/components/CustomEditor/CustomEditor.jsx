import { Button, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { ColorTokens } from "../../assets/themes/theme";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import { Field } from "./Field";
import { v4 as uuidv4 } from "uuid";

export const CustomEditor = () => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const [editor, setEditor] = useState([
    {
      id: 1,
      type: "Paragraph",
      content: "this is a text",
      ranges: [],
    },
  ]);

  const [textFieldKey, setTextFieldKey] = useState("");

  const handleTextFieldKey = (key) => {
    console.log(key);
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
    if (start === "" && end === "") {
      return [{ key: uuidv4(), text: selected, format: "bold" }];
    }
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

  const handleUpdateRanges = (ranges) => {
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

  const [isBold, setIsBold] = useState(false);

  const handleCurrentTextField = () => {
    return editor.map((textField) => {
      return textField.ranges.filter(
        (currentText) => currentText.key === textFieldKey
      );
    });
  };

  const handleSelect = () => {
    const selection = handleSelectetion();
    const parsedString = parseStirng(selection);
    const [currentData] = handleCurrentTextField();
    if (currentData.length === 0) {
      handleUpdateRanges(parsedString);
    } else {
      const parsedString = parseStirng(selection);
      const filtered = editor[0].ranges.map((range) => {
        if (range.key === currentData[0].key) {
          return (range = parsedString);
        } else {
          return range;
        }
      });
      handleUpdateRanges(filtered.flat());
    }
  };

  const handleRemoveSelect = () => {
    const removeSelection = editor[0].ranges.map((field) => {
      if (field.key === textFieldKey) {
        return { ...field, format: "normal" };
      } else {
        return { ...field };
      }
    });
    handleUpdateRanges(removeSelection);
  };

  const hanldeBold = () => {
    if (isBold) {
      handleRemoveSelect();
      setIsBold(false);
    } else {
      handleSelect();
      setIsBold(true);
    }
  };

  const handleCaretPosition = () => {
    const selection = document.getSelection();
    console.log(selection.focusOffset);
  };

  return (
    <Box>
      <Box>
        <Button onClick={hanldeBold}>
          <FormatBoldIcon sx={{ color: `${colors.grey[100]}` }} />
        </Button>
      </Box>

      <Box
        onClick={handleCaretPosition}
        sx={{
          bgcolor: `${colors.grey[100]}`,
          width: 570,
          height: 55,
          fontSize: 36,
        }}
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        <Field editor={editor} handleTextFieldKey={handleTextFieldKey} />
      </Box>
    </Box>
  );
};
