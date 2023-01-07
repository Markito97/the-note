import { Box, Typography, useTheme } from "@mui/material";
import { ColorTokens } from "../../assets/themes/theme";
import { PostCreate } from "../PostCreate/PostCreate";
import { useContext } from "react";
import { ContextApp } from "../../store/store";
import { SeacrhForm } from "../SearchForm/SearchForm";
import { PostList } from "../PostList/PostList";

const newPostBtnStyle = {
  sidebar: {
    p: 1,
    borderRight: 1,
    seacrhBtn: {
      textTransform: "none",
      paddingLeft: 0,
      paddingRight: 0,
      marginBottom: 2,
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      fontSize: 16,
    },
  },
  fontSize: 14,
};

export const SideBar = () => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const [state] = useContext(ContextApp);

  newPostBtnStyle.sidebar.bgcolor = `${colors.primary[400]}`;
  newPostBtnStyle.sidebar.color = `${colors.grey[100]}`;
  newPostBtnStyle.sidebar.seacrhBtn.color = `${colors.grey[100]}`;

  return (
    <Box sx={newPostBtnStyle.sidebar}>
      <SeacrhForm />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Pages</Typography>
        <PostCreate />
      </Box>
      <PostList />
    </Box>
  );
};
