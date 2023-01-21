import { useRef, useState } from "react";
import { Box } from "@mui/system";
import { CellColResize } from "./CellColResize";
import { Dropdown } from "./Dropdown/Dropdown";
import { useContext } from "react";
import { TableContextValue } from "../tableContext";
import { useHover } from "../../../hooks/useHover";
import { useTheme } from "@mui/material";
import { ColorTokens } from "../../../assets/themes/theme";
import { useEffect } from "react";

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

export const TableHeaderCell = ({ headerCell, index, startResize }) => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);

  const [hoverRef, isHover] = useHover();

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [tableState] = useContext(TableContextValue);
  const [currentColumn, setCurrentColumn] = useState();

  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
    handleId(headerCell.id);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleId = (id) => {
    const currentId = id;
    const foundElement = tableState.content.find((el) => el.id == currentId);
    setCurrentColumn(foundElement);
  };

  return (
    <>
      <Box
        sx={tableHeadersCellStyle}
        ref={hoverRef}
        style={{
          background: isHover
            ? `${colors.grey[300]}`
            : `${colors.primary[500]}`,
        }}
      >
        <Box
          onClick={(event) => {
            handleClick(event);
          }}
        >
          <Box style={{ width: headerCell.width }}>
            <Box>{headerCell.text}</Box>
          </Box>
        </Box>
        <CellColResize startResize={startResize} index={index} />
      </Box>
      <Dropdown
        active={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
        currentColumn={currentColumn}
      />
    </>
  );
};
