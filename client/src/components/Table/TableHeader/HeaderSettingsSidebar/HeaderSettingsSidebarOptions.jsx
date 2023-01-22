import { Box } from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";
import TagIcon from "@mui/icons-material/Tag";
import { HeaderSettingSidebarOption } from "./HeaderSettingSidebarOption";

const rightBarProp = [
  {
    icon: <NotesIcon sx={{ width: 16, height: 16 }} />,
    value: "Text",
  },
  {
    icon: <TagIcon sx={{ width: 16, height: 16 }} />,
    value: "Number",
  },
];

export const HeaderSettingsSidebarOptions = ({ addColumn }) => {
  return (
    <Box sx={{ paddingTop: "12px" }}>
      {rightBarProp.map((option, index) => (
        <HeaderSettingSidebarOption key={index + 1} option={option} />
      ))}
    </Box>
  );
};
