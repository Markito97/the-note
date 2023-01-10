import { Box, useTheme } from "@mui/system";
import { ColorTokens } from "../../../assets/themes/theme";
import { TableHeaderCell } from "./TableHeaderCell";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@mui/icons-material/Add";

const tableHeaderStyle = {
  display: "flex",
  position: "absolute",
  height: 32,
  borderTop: 1,
  borderBottom: 1,
  left: 0,
  right: 0,
  rowCell: {
    display: "inline-flex",
    margin: 0,
  },
  addIconContainer: {
    display: "flex",
    width: 32,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "green",
    },
    addIcon: { width: 12 },
  },
};

export const TableHeader = ({ headerCells, handleCurrentWidth }) => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);

  tableHeaderStyle.borderColor = `${colors.grey[100]}`;
  tableHeaderStyle.addIconContainer.addIcon.color = `${colors.grey[100]}`;

  return (
    <Box sx={tableHeaderStyle}>
      <Box sx={tableHeaderStyle.rowCell}>
        {headerCells.map((cell) => (
          <TableHeaderCell
            key={uuidv4()}
            cell={cell}
            handleCurrentWidth={handleCurrentWidth}
          />
        ))}
        <Box sx={tableHeaderStyle.addIconContainer}>
          <AddIcon sx={tableHeaderStyle.addIconContainer.addIcon} />
        </Box>
      </Box>
    </Box>
  );
};
