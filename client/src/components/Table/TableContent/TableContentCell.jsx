import { Box } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { TableCellForm } from "./TableCellForm";
import { createRef } from "react";

const tableContentCellStyle = {
  display: "flex",
  flexDirection: "row",
  position: "relative",
  padding: "5px 8px 6px",
  overflow: "hidden",
  color: "#fff",
  borderRight: 1,
  borderColor: "#fff",
  fontSize: 14,
  lineHight: 1.5,
  alignItems: "center",
  fontWeight: 500,
};

export const TableContentCell = ({ cell }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cellRef = createRef();
  const handleOpen = () => {
    setIsOpen(true);
  };

  const hanldeClose = (close) => {
    setIsOpen(close);
  };

  useEffect(() => {
    if (isOpen) {
      cellRef.current.style.outline = "2px solid #fff";
      cellRef.current.style.borderRadius = "1px";
    } else {
      cellRef.current.style.outline = "none";
    }
  }, [isOpen, cellRef]);

  return (
    <Box ref={cellRef} onClick={handleOpen} sx={tableContentCellStyle}>
      <Box style={{ width: cell.width }}>
        <TableCellForm
          active={isOpen}
          value={cell.value}
          id={cell.id}
          hanldeClose={hanldeClose}
        />
      </Box>
    </Box>
  );
};
