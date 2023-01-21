import { Box } from "@mui/system";
import React, { useContext } from "react";
import { TableContextValue } from "../tableContext";
import { AddColumn, OpenMenu } from "./HeaderMenuBar/OpenMenu";
import { TableHeaderCell } from "./TableHeaderCell";

const tableHeaderStyles = {
  wrapper: {
    width: "100%",
    height: 32,
  },
  headersRows: {
    display: "flex",
    borderTop: 1,
    borderColor: "#fff",
  },
};

export const TableHeader = ({ startResize }) => {
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
        <Box>
          <OpenMenu />
        </Box>
      </Box>
    </Box>
  );
};
