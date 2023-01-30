import { Box, Typography, useTheme } from "@mui/material";
import { NoteCreate } from "../NoteCreate/NoteCreate";
import { SeacrhForm } from "../SearchForm/SearchForm";
import { PostList } from "../PostList/PostList";
import { ColorTokens } from "../../assets/themes/theme";

const sidebarStyles = {
  container: {
    fontSize: 14,
    p: 1,
    borderRight: 1,
    minWidth: "250px",
  },
  createBtn: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export const SideBar = () => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  sidebarStyles.container.background = `${colors.primary[400]}`;
  sidebarStyles.container.color = `${colors.grey[100]}`;

  return (
    <Box sx={sidebarStyles.container}>
      <SeacrhForm />
      <Box sx={sidebarStyles.createBtn}>
        <Typography>Pages</Typography>
        <NoteCreate />
      </Box>
      <PostList />
    </Box>
  );
};
