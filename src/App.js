import "./App.css";
import { Box, Button, TextField, AppBar } from "@mui/material";
import { FormControl } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PostList } from "./PostList";

function App() {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  const [posts, setPosts] = useState([
    { id: 1, title: "Aboba", description: "Ivanovich" },
    { id: 2, title: "Zopa", description: "Abobovich" },
    { id: 3, title: "Maslenok", description: "Gribkovich" },
  ]);
  const addPost = () => {
    const newPost = {
      id: uuidv4(),
      ...post,
    };
    setPosts([...posts, newPost]);
  };

  const postId = (id) => {
    const getPost = posts.find((el) => el.id === id);
    console.log(post);
    setPost({ title: getPost.title, description: getPost.description });
  };

  return (
    <div className="App">
      <Box component="div">
        <AppBar
          sx={{
            height: 50,
            display: "flex",
            justifyContent: "center",
            padding: 1,
          }}
          position="static"
        >
          React Todo List
        </AppBar>
      </Box>
      <div className="container">
        <Box sx={{ p: 2, border: "var(--Grid-borderWidth) solid" }}>
          <Button onClick={addPost} variant="contained">
            Add new post
          </Button>
          <PostList posts={posts} postId={postId} />
        </Box>
        <Box
          component="form"
          sx={{ margin: 2, display: "flex", justifyContent: "center" }}
        >
          <FormControl>
            <TextField
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              sx={{ m: 2 }}
              variant="outlined"
              label="title"
            />
            <TextField
              value={post.description}
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
              sx={{ m: 2 }}
              variant="outlined"
              label="description"
            />
          </FormControl>
        </Box>
      </div>
    </div>
  );
}

export default App;
