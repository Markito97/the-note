import { Button, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { createRef, useEffect, useState } from "react";
import { tokens } from "../assets/themes/theme";
import FormatBoldIcon from "@mui/icons-material/FormatBold";

export const CustomEditor = ({ currentDescription, changeDescription }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [description, setDescription] = useState("");
  const descRef = createRef();

  useEffect(() => {
    console.log("Effect");
    if (currentDescription !== undefined) {
      descRef.current.innerText = currentDescription.description;
    }
  }, [currentDescription]);

  const test = (e) => {
    changeDescription(e.target.innerText);
  };

  const setBold = (e) => {
    let selection = document.getSelection();
    let selectedLeftToRight = e.target.innerText.slice(
      selection.anchorOffset,
      selection.focusOffset
    );
    console.log(selectedLeftToRight);
    let selectedRightToLeft = e.target.innerText.slice(
      selection.focusOffset,
      selection.anchorOffset
    );
    console.log(selectedRightToLeft);
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
        onSelect={setBold}
        style={{ width: "570px" }}
        contentEditable
      ></Box>
    </Box>
  );
};
