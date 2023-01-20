import { Box } from "@mui/material";
import { useContext } from "react";
import { createRef } from "react";
import { TableContextDispatch, TableContextValue } from "../tableContext";
import { useEffect } from "react";

export const CellForm = ({ active, value, id, hanldeClose }) => {
  const [tableState] = useContext(TableContextValue);
  const [dispatchTable] = useContext(TableContextDispatch);

  const cellRef = createRef();
  const hanldeValue = () => {
    hanldeClose(false);
    handleUpdateCellValue(cellRef.current.textContent);
  };

  const handleUpdateCellValue = (value) => {
    const newCellValue = tableState.content.map((contentRow) => {
      return contentRow.cells.map((cell) => {
        if (cell.id === id) {
          return {
            ...cell,
            text: value,
          };
        } else {
          return {
            ...cell,
          };
        }
      });
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
        sx={{ outline: "none" }}
        ref={cellRef}
        onBlur={hanldeValue}
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        {value}
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          whiteSpace: "normal",
          wordBreak: "break-word",
          pointerEvents: "none",
        }}
      >
        {value}
      </Box>
    );
  }
};
