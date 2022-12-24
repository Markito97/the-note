import { Button, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { createRef, useEffect, useState } from "react";
import { tokens } from "../assets/themes/theme";
import FormatBoldIcon from "@mui/icons-material/FormatBold";

export const CustomEditor = ({ currentDescription, changeDescription }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState("");
  const [field, setField] = useState("");
  const descRef = createRef();

  console.log(description);

  useEffect(() => {
    console.log("Effect");
    if (currentDescription !== undefined) {
      descRef.current.innerText = currentDescription.description;
      setDescription(currentDescription.description);
    }
  }, [currentDescription]);

  const test = (e) => {
    changeDescription(e.target.innerText);
  };

  const setBold = () => {
    descRef.current.style.fontWeight = "bold";
    // console.log(descRef.current.innerText)
    // const fristString = description;
    // const secondString = selected;
    // const subString = "!123!";
    // const start = fristString.indexOf(secondString);
    // const end = fristString.slice(start + secondString.length);
    // setField(fristString.slice(0, start) + subString + end);
    // setDescription(fristString.slice(0, start) + subString + end);
    // changeDescription(fristString.slice(0, start) + subString + end);
  };

  const handleTextFromField = (e) => {
    let selection = document.getSelection();
    let selectedLeftToRight = e.target.innerText.slice(
      selection.anchorOffset,
      selection.focusOffset
    );
    setSelected(selectedLeftToRight);
    let selectedRightToLeft = e.target.innerText.slice(
      selection.focusOffset,
      selection.anchorOffset
    );
  };

  return (
    <Box>
      <Box>
        <Button onClick={setBold}>
          <FormatBoldIcon sx={{ color: `${colors.grey[100]}` }} />
        </Button>
      </Box>
      <Box
        sx={{ color: `${colors.grey[100]}` }}
        ref={descRef}
        onInput={test}
        onSelect={handleTextFromField}
        style={{ width: "570px" }}
        contentEditable
      >
        {field}
      </Box>
    </Box>
  );
};
