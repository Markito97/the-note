import { Box, Button, Typography, useTheme } from "@mui/material";
import { PostList } from "../PostList/PostList";
import { ColorTokens } from "../../assets/themes/theme";
import { PostCreate } from "../PostCreate/PostCreate";
import { useContext } from "react";
import { ContextApp } from "../../store/store";
import { SeacrhForm } from "../SearchForm/SearchForm";

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
      <PostCreate />
      <SeacrhForm />
      {!state.favoritePosts.length ? null : (
        <Typography sx={{ fontSize: 14 }}>Favorites</Typography>
      )}
      <Typography sx={{ fontSize: 14 }}>Post List</Typography>
      <PostList />
    </Box>
  );
};
