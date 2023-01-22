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

  const cellRef = createRef();
  const hanldeValue = () => {
    hanldeClose(false);
    handleUpdateCellValue(cellRef.current.textContent);
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
