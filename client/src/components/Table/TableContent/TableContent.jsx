import { Box } from "@mui/material";
import { TableContentCell } from "./TableContentCell";
import { useContext } from "react";
import { TableContextValue } from "../tableContext";

const tableContentStyle = {
  content: {
    width: "100%",
  },
  contentRow: {
    display: "flex",
    borderTop: 1,
    borderColor: "#fff",
  },
};

export const TableContent = () => {
  const [tableState] = useContext(TableContextValue);

  return (
    <Box sx={tableContentStyle.content}>
      <Box sx={tableContentStyle.contentRow}>
        {tableState.content.map((column, index) => (
          <Box key={index + "Aboba"}>
            {column.map((cell, index) => (
              <TableContentCell key={index + cell.text} cell={cell} />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
