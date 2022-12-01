import { Button } from "@mui/material";
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
    <Button onClick={createPost} variant="contained">
      Add new post
    </Button>
  );
};
