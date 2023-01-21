import { Menu, Box } from "@mui/material";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { DropdownOption } from "./DropdownOption";
import FilterListIcon from "@mui/icons-material/FilterList";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const handleSort = (array) => {
  return array.sort((a, b) => b.text - a.text);
};

const menuItemProperty = [
  {
    prop: "Sort ascending",
    icon: <ArrowUpwardOutlinedIcon sx={{ width: 14 }} />,
    func: handleSort,
  },
  {
    prop: "Sort descending",
    icon: <ArrowDownwardOutlinedIcon sx={{ width: 14 }} />,
    func: null,
  },
  { prop: "Filter", icon: <FilterListIcon sx={{ width: 14 }} />, func: null },

  {
    prop: "Hide in view",
    icon: <VisibilityOffOutlinedIcon sx={{ width: 14 }} />,
    func: null,
  },
  {
    prop: "Delete property",
    icon: <DeleteOutlineOutlinedIcon sx={{ width: 14 }} />,
    func: null,
  },
];

export const Dropdown = ({ active, handleClose, anchorEl, currentColumn }) => {
  return (
    <Menu anchorEl={anchorEl} open={active} onClose={handleClose}>
      <Box sx={{ width: "220px", fontSize: 12 }}>
        {currentColumn && (
          <Box
            sx={{
              margin: 1,
            }}
          >
            Type: {currentColumn.type}
          </Box>
        )}
        <Box>
          {menuItemProperty.map((option) => (
            <DropdownOption
              key={option.prop}
              option={option}
              currentColumn={currentColumn}
            />
          ))}
        </Box>
      </Box>
    </Menu>
  );
};
