import { Box, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

export const PostCreate = ({ addPost }) => {
  const createPost = () => {
    const newPost = {
      id: uuidv4(),
      title: "title",
      description: "description",
    };

    addPost(newPost);
  };
  return (
    <Box sx={{ p: 1 }}>
      <Button sx={{ width: "100%" }} onClick={createPost} variant="contained">
        Add new post
      </Button>
    </Box>
  );
};
