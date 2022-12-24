import "./App.css";
import "./components/Editor/EditorStyle.css";
import { ThemeProvider, Box } from "@mui/material";
import { NavBar } from "./components/NavBar/NavBar";
import { ColorModeContext, useMode } from "./assets/themes/theme";
import { PostForm } from "./components/PostForm/PostForm";
import { useState } from "react";
import { SideBar } from "./components/SideBar/SideBar";
import { useEffect } from "react";
import { CustomEditor } from "./CustomEditor/CustomEditor";

function App() {
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "Aboba",
      description: "Mixailovich",
      favorite: false,
    },
    {
      id: "2",
      title: "General Aboba",
      description: "Petrovich",
      favorite: false,
    },
    {
      id: "3",
      title: "Mega Aboba",
      description: null,
      favorite: false,
    },
  ]);
  const [favoritePosts, setFavoritePosts] = useState([]);
  const [postId, setPostId] = useState("");
  const [theme, colorMode] = useMode();
  const [currentTitle, setCurrentTitle] = useState();
  const [currentDescription, setCurrentDescription] = useState();

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const handleCurrentPost = (id) => {
    const foundPost = posts.find((el) => el.id === id);
    setPostId((prev) => (prev = id));
    setCurrentTitle((prev) => (prev = foundPost));
    setCurrentDescription((prev) => (prev = foundPost));
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
        return {
          ...item,
          title: post,
        };
      } else {
        return { ...item };
      }
    });
    setPosts([...postForChange]);
  };

  const changeDescription = (description) => {
    const changeDescription = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          description: description,
        };
      } else {
        return { ...post };
      }
    });

    setPosts([...changeDescription]);
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
          <PostForm
            currentTitle={currentTitle}
            currentDescription={currentDescription}
            changePost={changePost}
            changeDescription={changeDescription}
          />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
