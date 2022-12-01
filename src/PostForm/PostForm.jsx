import { Box, TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { useEffect, useState } from "react";

export const PostForm = ({ forChange }) => {
  const [post, setPost] = useState({
    title: "title",
    description: "description",
  });

  useEffect(() => {
    setPost({
      ...forChange,
    });
  }, [post, forChange]);

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
        />
        <TextField sx={{ m: 2 }} variant="outlined" label="description" />
      </FormControl>
    </Box>
  );
};
