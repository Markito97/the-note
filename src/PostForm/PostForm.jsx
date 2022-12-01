import { Box, TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { useEffect, useState } from "react";

export const PostForm = ({ forChange, changePost }) => {
  const [post, setPost] = useState({
    title: "title",
    description: "description",
  });

  useEffect(() => {
    if (!forChange) {
      console.log("Udefined");
    } else {
      setPost({ ...forChange });
    }
  }, [forChange]);

  useEffect(() => {
    changePost(post);
  });

  const setValue = (e) => {
    setPost((prev) => (prev = { ...post, title: e.target.value }));
  };

  return (
    <Box
      component="form"
      sx={{ margin: 2, display: "flex", justifyContent: "center" }}
    >
      <FormControl>
        <TextField
          value={post.title}
          sx={{ m: 2 }}
          variant="outlined"
          label="title"
          onChange={setValue}
        />
        {/* <TextField
          value={post.description}
          sx={{ m: 2 }}
          variant="outlined"
          label="description"
        /> */}
      </FormControl>
    </Box>
  );
};
