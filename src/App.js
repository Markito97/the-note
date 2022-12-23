import "./App.css";
import "./components/Editor/EditorStyle.css";
import { ThemeProvider, Box } from "@mui/material";
import { NavBar } from "./components/NavBar/NavBar";
import { ColorModeContext, useMode } from "./assets/themes/theme";
import { PostForm } from "./components/PostForm/PostForm";
import { useState } from "react";
import { SideBar } from "./components/SideBar/SideBar";

function App() {
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "Aboba",
      description:
        '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"123123123","type":"text","version":1}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',
      favorite: false,
    },
    // {
    //   id: "2",
    //   title: "General Aboba",
    //   description:
    //     '{"editorState":{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"description2","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}}',
    //   favorite: false,
    // },
    // {
    //   id: "3",
    //   title: "Mega Aboba",
    //   description:
    //     '{"editorState":{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"description3","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}}',
    //   favorite: false,
    // },
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
  const changeDescription = (description) => {};

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
            posts={posts}
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
