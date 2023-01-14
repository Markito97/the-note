import { Box } from "@mui/system";
import { TableHeaderCell } from "./TableHeaderCell";
import React, { useContext } from "react";
import { TableContextValue } from "../tableContext";

const tableHeaderStyles = {
  wrapper: {
    width: "100%",
  },
  headersRows: {
    display: "flex",
    borderTop: 1,
    borderColor: "#fff",
  },
};

export const TableHeader = ({ headers, startResize }) => {
  const [tableState] = useContext(TableContextValue);
  return (
    <Box sx={tableHeaderStyles.wrapper}>
      <Box sx={tableHeaderStyles.headersRows}>
        {tableState.header.map((cell, index) => (
          <TableHeaderCell
            key={cell + index}
            headerCell={cell}
            index={index}
            startResize={startResize}
          />
        ))}
      </Box>
    </Box>
  );
};
