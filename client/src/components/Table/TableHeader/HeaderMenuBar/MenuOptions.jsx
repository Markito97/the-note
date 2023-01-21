import { Box } from "@mui/material";
import { MenuItem } from "./MenuItem";
import NotesIcon from "@mui/icons-material/Notes";
import TagIcon from "@mui/icons-material/Tag";

const rightBarProp = [
  {
    icon: <NotesIcon sx={{ width: 16, height: 16 }} />,
    text: "Text",
  },
  {
    icon: <TagIcon sx={{ width: 16, height: 16 }} />,
    text: "Number",
  },
];

export const MenuOptions = ({ addColumn }) => {
  return (
    <Box>
      {rightBarProp.map((item, index) => (
        <MenuItem addColumn={addColumn} key={index + 1} item={item} />
      ))}
    </Box>
  );
};
