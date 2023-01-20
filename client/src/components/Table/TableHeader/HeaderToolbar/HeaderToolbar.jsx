import { Menu, Box } from "@mui/material";
// import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
// import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { HeaderCellMenuItem } from "./HeaderToolbarItem";

const menuItemProperty = [
  {
    prop: "Type",
    icon: null,
  },
  {
    prop: "Edit property",
    icon: null,
  },
  {
    prop: "Sort ascending",
    icon: null,
  },
  {
    prop: "Sort descending",
    icon: null,
  },
  { prop: "Filter", icon: null },

  {
    prop: "Hide in view",
    icon: null,
  },
  {
    prop: "Delete property",
    icon: null,
  },
];

export const HeaderToolbar = ({ active, handleClose, anchorEl }) => {
  return (
    <Menu
      sx={{
        fontSize: 12,
      }}
      anchorEl={anchorEl}
      open={active}
      onClose={handleClose}
    >
      <Box sx={{ fontSize: 12 }}>
        {menuItemProperty.map((item) => (
          <HeaderCellMenuItem key={item.prop} prop={item} />
        ))}
      </Box>
    </Menu>
  );
};
