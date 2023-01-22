import { useRef, useState } from "react";
import { Box } from "@mui/system";
import { HeaderColResize } from "./HeaderColResize/HeaderColResize";
import { HeaderContextMenu } from "./HeaderContextMenu/HeaderContextMenu";
import { useContext } from "react";
import { TableContextValue } from "../tableContext";
import { useHover } from "../../../hooks/useHover";
import { useTheme } from "@mui/material";
import { ColorTokens } from "../../../assets/themes/theme";

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
  alignItems: "center",
  "&:hover": {
    bgcolor: `#fff`,
  },
};

const handleFindElementById = (content, id) => {
  return content.find((cell) => cell.id == id);
};

export const TableHeaderCell = ({ headerCell, index }) => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [tableState] = useContext(TableContextValue);
  const [currentColumn, setCurrentColumn] = useState();

  const handleOpen = (event) => {
    setOpen((prev) => (prev = true));
    setAnchorEl(event.currentTarget);
    handleSetCurrentColumn(headerCell.id);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleSetCurrentColumn = (id) => {
    setCurrentColumn(
      (column) => (column = handleFindElementById(tableState.content, id))
    );
  };

  return (
    <>
      <Box sx={tableHeadersCellStyle}>
        <Box onClick={(event) => handleOpen(event)}>
          <Box style={{ width: headerCell.width }}>
            <Box>{headerCell.type}</Box>
          </Box>
        </Box>
        <HeaderColResize index={index} />
      </Box>
      <HeaderContextMenu
        active={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
        currentColumn={currentColumn}
      />
    </>
  );
};
