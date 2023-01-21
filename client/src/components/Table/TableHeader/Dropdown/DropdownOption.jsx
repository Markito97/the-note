import { Box } from "@mui/material";
import { useContext } from "react";
import { TableContextDispatch, TableContextValue } from "../../tableContext";

const dropdownOptionStyle = {
  margin: 1,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    bgcolor: "#fff",
  },
  text: {
    marginLeft: "6px",
    marginRight: "12px",
    fontSize: 12,
  },
};

export const DropdownOption = ({ option, currentColumn }) => {
  const [tableState] = useContext(TableContextValue);
  const [tableDispatch] = useContext(TableContextDispatch);
  const handleClick = () => {
    const result = option.func(currentColumn.cells);
    updateCol(result);
  };

  const updateCol = (sorted) => {
    const updated = tableState.content.map((column) => {
      if (column.id === currentColumn.id) {
        return {
          id: column.id,
          cells: sorted,
        };
      } else {
        return {
          ...column,
        };
      }
    });
    tableDispatch({ type: "updateContent", payload: updated });
  };

  return (
    <Box sx={dropdownOptionStyle} onClick={handleClick}>
      {option.icon}
      <Box sx={dropdownOptionStyle.text}>{option.prop}</Box>
    </Box>
  );
};
