import { Box } from "@mui/material";
import { createRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const tableContentCellStyle = {
  display: "flex",
  flexDirection: "row",
  position: "relative",
  padding: "5px 8px 6px",
  overflow: "hidden",
  color: "#fff",
  fontSize: 14,
  lineHight: 21,
};

export const TableContentCell = ({ cell }) => {
  const [isFocus, setIsFocus] = useState(false);
  const cellRef = createRef();
  const handleFocus = () => {
    setIsFocus(!isFocus);
  };

  useEffect(() => {
    if (isFocus) {
      cellRef.current.style.border = "1px solid white";
    } else {
      cellRef.current.style.border = "none";
    }
  }, [isFocus]);

  return (
    <Box ref={cellRef} onClick={handleFocus} sx={tableContentCellStyle}>
      <Box style={{ width: cell.width }}>{cell.text}</Box>
    </Box>
  );
};
