import { Search } from "@mui/icons-material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { FavoritesList } from "../FavoritesList.jsx/FavoritesList";
import { PostList } from "../PostList/PostList";
import { tokens } from "../../assets/themes/theme";
import { PostCreate } from "../PostCreate/PostCreate";
import { useState } from "react";

export const SideBar = ({
  posts,
  addPost,
  handleCurrentPost,
  removePost,
  favoritePosts,
  setFavortitePost,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        p: 2,
        bgcolor: `${colors.primary[400]}`,
        color: `${colors.grey[100]}`,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <PostCreate addPost={addPost} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          sx={{
            color: `${colors.grey[100]}`,
            textTransform: "none",
            paddingLeft: 0,
            paddingRight: 0,
            marginBottom: 2,
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            fontSize: 16,
          }}
          variant="text"
        >
          <Search />
          <Typography sx={{ paddingLeft: 1, fontSize: "inherit" }}>
            Search
          </Typography>
        </Button>
      </Box>
      <Typography sx={{ fontSize: 14 }}>Favorites</Typography>
      <FavoritesList favoritePosts={favoritePosts} />
      <Typography sx={{ fontSize: 14 }}>Post List</Typography>
      <PostList
        posts={posts}
        removePost={removePost}
        setFavortitePost={setFavortitePost}
        handleCurrentPost={handleCurrentPost}
      />
    </Box>
  );
};
