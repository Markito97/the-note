import { Search } from "@mui/icons-material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { PostList } from "../PostList/PostList";
import { ColorTokens } from "../../assets/themes/theme";
import { PostCreate } from "../PostCreate/PostCreate";
import { useContext } from "react";
import { ContextApp } from "../../store/store";
import { useEffect } from "react";

const newPostBtnStyle = {
  sidebar: {
    p: 1,
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

export const SideBar = ({}) => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const [state, dispatch] = useContext(ContextApp);

  newPostBtnStyle.sidebar.bgcolor = `${colors.primary[400]}`;
  newPostBtnStyle.sidebar.color = `${colors.grey[100]}`;
  newPostBtnStyle.sidebar.seacrhBtn.color = `${colors.grey[100]}`;

  return (
    <Box sx={newPostBtnStyle.sidebar}>
      <PostCreate />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button sx={newPostBtnStyle.sidebar.seacrhBtn}>
          {/* // Search Form  */}
          <Typography sx={{ paddingLeft: 1, fontSize: "inherit" }}>
            Search
          </Typography>
        </Button>
      </Box>
      {state.favoritePosts.length === 0 ? null : (
        <Typography sx={{ fontSize: 14 }}>Favorites</Typography>
      )}
      <Typography sx={{ fontSize: 14 }}>Post List</Typography>
      <PostList />
    </Box>
  );
};
