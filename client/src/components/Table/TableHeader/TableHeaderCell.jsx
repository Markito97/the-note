import { useState } from "react";
import { Box } from "@mui/system";
import { CellColResize } from "./CellColResize";
import { HeaderCellMenu } from "./HeaderCellMenu/HeaderCellMenu";

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
  // "&:hover": {
  //   bgcolor: `${colors.grey[100]}`,
  // },
};

export const TableHeaderCell = ({ headerCell, index, startResize }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={tableHeadersCellStyle} onClick={handleClick}>
        <Box>
          <Box style={{ width: headerCell.width }}>
            <Box>{headerCell.text}</Box>
          </Box>
        </Box>
        <CellColResize startResize={startResize} index={index} />
      </Box>
      <HeaderCellMenu
        active={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
      />
    </>
  );
};
