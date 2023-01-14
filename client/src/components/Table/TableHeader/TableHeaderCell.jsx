import { Box } from "@mui/system";
import { CellColResize } from "./CellColResize";

const tableHeadersCellStyle = {
  display: "flex",
  flexDirection: "row",
  position: "relative",
  color: "#fff",
  borderRight: 1,
  borderColor: "#fff",
  padding: "5px 8px 6px",
  fontSize: 14,
  cursor: "pointer",
  userSelect: "none",
  // "&:hover": {
  //   bgcolor: `${colors.grey[100]}`,
  // },
};

export const TableHeaderCell = ({ headerCell, index, startResize }) => {
  return (
    <Box sx={tableHeadersCellStyle}>
      <Box>
        <Box style={{ width: headerCell.width }}>
          <Box>{headerCell.text}</Box>
        </Box>
      </Box>
      <CellColResize startResize={startResize} index={index} />
    </Box>
  );
};
