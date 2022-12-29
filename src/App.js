import "./App.css";
import { ThemeProvider, Box } from "@mui/material";
import { NavBar } from "./components/NavBar/NavBar";
import { ColorModeContext, useMode } from "./assets/themes/theme";
import { PostForm } from "./components/PostForm/PostForm";
import { useState } from "react";
import { SideBar } from "./components/SideBar/SideBar";
import { useReducer } from "react";
import { postsReducer, initialState, ContextApp } from "./store/store";

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  const [favoritePosts, setFavoritePosts] = useState([]);
  const [postId, setPostId] = useState("");
  const [theme, colorMode] = useMode();
  const [isCurrentPost, setIsCurrentPost] = useState();

  // const handleCurrentPost = (id) => {
  //   const currentPost = posts.find((el) => el.id === id);
  //   setPostId((prev) => (prev = id));
  //   setIsCurrentPost((post) => (post = currentPost));
  // };

  // const removePost = () => {
  //   const withoutRemovedPost = posts.filter((el) => el.id !== postId);
  //   setPosts([...withoutRemovedPost]);
  // };

  // const setFavortitePost = () => {
  //   const favoritePost = posts.find((post) => post.id === postId);
  //   setFavoritePosts([...favoritePosts, { ...favoritePost, favorite: true }]);
  // };

  // const changePost = (post) => {
  //   const postForChange = posts.map((item) => {
  //     if (item.id === postId) {
  //       return {
  //         ...item,
  //         title: post,
  //       };
  //     } else {
  //       return { ...item };
  //     }
  //   });
  //   setPosts([...postForChange]);
  // };

  // const changeDescription = (description) => {
  //   const changeDescription = posts.map((post) => {
  //     if (post.id === postId) {
  //       return {
  //         ...post,
  //         description: description,
  //       };
  //     } else {
  //       return { ...post };
  //     }
  //   });

  //   setPosts([...changeDescription]);
  // };

  return (
    <ContextApp.Provider value={[state, dispatch]}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <NavBar />
          <Box className="container">
            <SideBar />
            <PostForm />
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ContextApp.Provider>
  );
}

export default App;
