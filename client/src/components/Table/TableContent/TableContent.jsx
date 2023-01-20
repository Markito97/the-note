import { Box, Tab } from "@mui/material";
import { useContext } from "react";
import { TableContextValue } from "../tableContext";
import { TableContentCell } from "./TableContentCell";
import { useEffect } from "react";

const tableContentStyle = {};

export const TableContent = () => {
  const [tableState] = useContext(TableContextValue);

  const cells = tableState.content.map((column) => column.cells);
  const rows = cells.map((column) => {
    return column;
  });
  const tableRows = rows[0].map((el, index) => rows.map((row) => row[index]));

  return (
    <Box>
      {tableRows.map((row) => {
        return (
          <Box sx={{ display: "flex", borderTop: 1, borderColor: "#fff" }}>
            {row.map((cell) => {
              return <TableContentCell cell={cell} />;
            })}
          </Box>
        );
      })}
    </Box>
  );
};
