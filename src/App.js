import "./App.css";
import { Box } from "@mui/material";
import { useState } from "react";
import { PostList } from "./PostList/PostList";
import { NavBar } from "./NavBar/NavBar";
import { PostCreate } from "./PostCreate/PostCreate";
import { PostForm } from "./PostForm/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Aboba", description: "Ivanovich" },
    { id: 2, title: "Zopa", description: "Abobovich" },
    { id: 3, title: "Maslenok", description: "Gribkovich" },
  ]);
  const [forChange, setForChange] = useState();

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const getPostById = (id) => {
    const getPost = posts.find((el) => el.id === id);
    console.log(getPost);
    setForChange(getPost);
    // setPost({ title: getPost.title, description: getPost.description });
  };

  // const changePost = (e) => {
  //   setPost({ ...post, title: e.target.value });
  //   const changedPost = {
  //     ...forChange,
  //     title: e.target.value,
  //   };
  //   const mappedPosts = posts.map((el) => {
  //     if (el.id === changedPost.id) {
  //       return { ...changedPost };
  //     } else {
  //       return { ...el };
  //     }
  //   });
  //   setPosts([...mappedPosts]);
  // };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <PostCreate addPost={addPost} />
          <PostList posts={posts} getPostById={getPostById} />
        </Box>
        <PostForm forChange={forChange} />
      </div>
    </div>
  );
}

export default App;
