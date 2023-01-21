import { Box, Tab } from "@mui/material";
import { useContext } from "react";
import { TableContextValue } from "../tableContext";
import { TableContentCell } from "./TableContentCell";
import { useEffect } from "react";

const tableContentStyle = {};

const getCells = (state) => {
  return state.map((column) => column.cells);
};
const convertToRow = (array) => {
  return array.map((column) => column);
};

const rotateTableRows = (rows) => {
  return rows[0].map((el, index) => rows.map((row) => row[index]));
};

export const TableContent = () => {
  const [tableState] = useContext(TableContextValue);

  const cells = getCells(tableState.content);
  const rows = convertToRow(cells);
  const tableRows = rotateTableRows(rows);
  return (
    <Box>
      {tableRows.map((row, index) => (
        <Box
          key={index + 1}
          sx={{ display: "flex", borderTop: 1, borderColor: "#fff" }}
        >
          {row.map((cell) => (
            <TableContentCell key={cell.id} cell={cell} />
          ))}
        </Box>
      ))}
    </Box>
  );
};
