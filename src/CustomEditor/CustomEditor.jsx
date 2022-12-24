import { Button, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { createRef, useEffect, useState } from "react";
import { tokens } from "../assets/themes/theme";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import { BoldText } from "./BoldText";

export const CustomEditor = ({ currentDescription, changeDescription }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState("");
  const [field, setField] = useState("");
  const [isBold, setIsBold] = useState(false);
  const descRef = createRef();

  console.log(description);

  useEffect(() => {
    console.log("Effect");
    if (currentDescription !== undefined) {
      const span = document.createElement("span");
      span.className = "normal-text";
      span.innerText = currentDescription.description;
      descRef.current.append(span);
      setDescription(currentDescription.description);
    }
  }, [currentDescription]);

  const test = (e) => {
    changeDescription(e.target.innerText);
    setDescription(e.target.innerText);
  };

  // Через рендер реакт почему-то не получается добавлять элемент в текстовое поле с атрибутом contentEditable, через js норм
  function setBold() {
    const strong = document.createElement("strong");
    const span = document.querySelector(".normal-text");
    strong.style.fontWeight = "bold";
    strong.innerText = description;
    descRef.current.append(strong);
    span.remove();
    // } else {
    //   descRef.current.append(span);
    // }
    // console.log(isBold);
    // const fristString = description;
    // const secondString = selected;
    // const subString = "!123!";
    // const start = fristString.indexOf(secondString);
    // const end = fristString.slice(start + secondString.length);
    // setField(fristString.slice(0, start) + subString + end);
    // setDescription(fristString.slice(0, start) + subString + end);
    // changeDescription(fristString.slice(0, start) + subString + end);
  }

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

  console.log(description);

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
        contentEditable={true}
        suppressContentEditableWarning={true}
      ></Box>
    </Box>
  );
};
