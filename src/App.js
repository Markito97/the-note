import "./App.css";
import "./Editor/EditorStyle.css";
import { ThemeProvider, Box } from "@mui/material";
import { NavBar } from "./NavBar/NavBar";
import { ColorModeContext, useMode } from "./theme";
import { PostForm } from "./PostForm/PostForm";
import { useState } from "react";
import { SideBar } from "./SideBar/SideBar";

function App() {
  const [posts, setPosts] = useState([
    { id: "1", title: "Aboba", description: "description", favorite: false },
    {
      id: "2",
      title: "General Aboba",
      description: "description",
      favorite: false,
    },
    {
      id: "3",
      title: "Mega Aboba",
      description: "description",
      favorite: false,
    },
  ]);
  const [favoritePosts, setFavoritePosts] = useState([]);
  const [postId, setPostId] = useState("");
  const [theme, colorMode] = useMode();
  const [currentPost, setCurrentPost] = useState("");
  const addPost = (post) => {
    setPosts([...posts, post]);
  };
  const handleCurrentPost = (id) => {
    const foundPost = posts.find((el) => el.id === id);
    setPostId((prev) => (prev = id));
    setCurrentPost((prev) => (prev = foundPost));
  };

  const removePost = () => {
    const withoutRemovedPost = posts.filter((el) => el.id !== postId);
    setPosts([...withoutRemovedPost]);
  };

  const setFavortitePost = () => {
    const favoritePost = posts.find((post) => post.id === postId);
    setFavoritePosts([...favoritePosts, { ...favoritePost, favorite: true }]);
  };

  const changePost = (post) => {
    const postForChange = posts.map((item) => {
      if (item.id === postId) {
        const newValue = {
          ...item,
          title: post,
        };
        if (newValue.title === "") {
          newValue.title = "Untitled";
        }
        return newValue;
      } else {
        return { ...item };
      }
    });
    setPosts([...postForChange]);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Box className="container">
          <SideBar
            posts={posts}
            favoritePosts={favoritePosts}
            setFavortitePost={setFavortitePost}
            addPost={addPost}
            removePost={removePost}
            handleCurrentPost={handleCurrentPost}
          />
          <PostForm currentPost={currentPost} changePost={changePost} />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
