import { TableCell } from "./TableCell";
import { Box } from "@mui/material";

export const TableRow = ({ row }) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {row.map((cell, index) => (
        <TableCell key={index + 3} cell={cell} />
      ))}
    </Box>
  );
};
