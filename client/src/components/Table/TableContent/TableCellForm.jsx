import { Box } from "@mui/material";
import { useContext } from "react";
import { createRef } from "react";
import { TableContextDispatch, TableContextValue } from "../tableContext";
import { useEffect } from "react";

const cellFormStyle = {
  active: {
    outline: "none",
  },
  inactive: {
    whiteSpace: "normal",
    wordBreak: "break-word",
    pointerEvents: "none",
  },
};

export const TableCellForm = ({ active, value, id, hanldeClose }) => {
  const [tableState] = useContext(TableContextValue);
  const [dispatchTable] = useContext(TableContextDispatch);

  const validateNumber = (value) => {
    return Number(value) ? value : "";
  };

  const cellRef = createRef();
  const hanldeValue = () => {
    hanldeClose(false);
    const validateCell = validateNumber(cellRef.current.textContent);
    console.log(validateCell);
    handleUpdateCellValue(validateCell);
  };

  const handleUpdateCellValue = (value) => {
    const newCellValue = tableState.content.map((contentRow) => {
      const updateCellsValue = contentRow.cells.map((cell) =>
        cell.id === id ? { ...cell, value: value } : { ...cell }
      );
      return {
        ...contentRow,
        cells: updateCellsValue,
      };
    });
    console.log(newCellValue);
    dispatchTable({ type: "updateContent", payload: newCellValue });
  };

  useEffect(() => {
    if (active) {
      const range = document.createRange();
      range.selectNodeContents(cellRef.current);
      range.collapse(false);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, [active, cellRef]);

  if (active) {
    return (
      <Box
        sx={cellFormStyle.active}
        ref={cellRef}
        onBlur={hanldeValue}
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        {value}
      </Box>
    );
  } else {
    return <Box sx={cellFormStyle.inactive}>{value}</Box>;
  }
};
