import { useState } from "react";
import { Box } from "@mui/system";
import { CellColResize } from "./CellColResize";
import { Dropdown } from "./Dropdown/Dropdown";
import { useContext } from "react";
import { TableContextValue } from "../tableContext";

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
    console.log(foundElement);
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
      <Dropdown
        active={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
        currentColumn={currentColumn}
      />
    </>
  );
};
