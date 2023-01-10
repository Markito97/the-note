import { Box } from "@mui/system";

const tableCellStyle = {
  display: "block",
  width: 100,
  borderRight: 1,
  whiteSpace: "normal",
  paddingTop: "5px",
  paddingBottom: "5px",
  paddingLeft: "5px",
  paddingRight: "5px",
  fontSize: 14,
};

export const TableCell = ({ cell }) => {
  return (
    <Box sx={tableCellStyle}>
      <Box component="span">{cell.text}</Box>
    </Box>
  );
};
