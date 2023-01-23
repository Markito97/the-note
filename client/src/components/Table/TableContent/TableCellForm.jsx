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

const handleSetRange = (element) => {
  const range = document.createRange();
  range.selectNodeContents(element);
  range.collapse(false);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
};

const handleUpdateCellContent = (contentCells, id, value) => {
  return contentCells.map((contentRow) => {
    const updateCellsValue = contentRow.cells.map((cell) =>
      cell.id === id ? { ...cell, value: value } : { ...cell }
    );
    return {
      ...contentRow,
      cells: updateCellsValue,
    };
  });
};

export const TableCellForm = ({ active, value, id, hanldeClose }) => {
  const [tableState] = useContext(TableContextValue);
  const [dispatchTable] = useContext(TableContextDispatch);
  const cellRef = createRef();

  const hanldeValue = () => {
    hanldeClose(false);
    handleSetContent(cellRef.current.textContent);
  };

  const handleSetContent = (value) => {
    const newCellContent = handleUpdateCellContent(
      tableState.content,
      id,
      value
    );
    dispatchTable({ type: "updateContent", payload: newCellContent });
  };

  useEffect(() => {
    if (!active) return;
    handleSetRange(cellRef.current);
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
