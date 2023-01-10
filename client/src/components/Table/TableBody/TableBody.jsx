import { Box } from "@mui/system";
import { TableRow } from "./TableRow";

export const TableBody = ({ bodyCells }) => {
  return (
    <Box sx={{ position: "relative", minWidth: `calc((100% - 192px) - 0px)` }}>
      {bodyCells.map((row, index) => (
        <Box
          key={index + 3}
          sx={{
            display: "flex",
            height: "calc(100% + 2px)",
            borderBottom: 1,
          }}
        >
          <TableRow row={row} />
        </Box>
      ))}
    </Box>
  );
};
