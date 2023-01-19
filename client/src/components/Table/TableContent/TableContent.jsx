import { Box } from "@mui/material";
import { useContext } from "react";
import { TableContextValue } from "../tableContext";
import { TableContentCell } from "./TableContentCell";

const tableContentStyle = {
  wrapper: {
    display: "flex",
  },
  content: {
    display: "flex",
  },
};

export const TableContent = () => {
  const [tableState] = useContext(TableContextValue);

  return (
    <Box sx={tableContentStyle.wrapper}>
      <Box sx={tableContentStyle.content}>
        {tableState.content.map((column, index) => (
          <Box
            key={index + 1}
            sx={{
              display: "flex",
              flexDirection: "column",
              borderTop: 1,
              borderColor: "#fff",
            }}
          >
            {column.map((cell) => (
              <TableContentCell key={cell.id} cell={cell} />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
