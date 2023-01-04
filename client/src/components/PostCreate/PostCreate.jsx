import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { ColorTokens } from "../../assets/themes/theme";
import AddIcon from "@mui/icons-material/Add";
import { useContext, useState } from "react";
import { ContextApp } from "../../store/store";
import { v4 as uuidv4 } from "uuid";
import { createPost } from "../../store/action";
import { useNavigate } from "react-router-dom";

export const PostCreate = () => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const [state, dispatch] = useContext(ContextApp);
  const navigate = useNavigate();

  const handleCreatePost = () => {
    const post = {
      id: uuidv4(),
      title: "Title",
      description: "Description",
    };

    createPost(post, dispatch);
    navigate(`/posts/${post.id}`);
  };

  return (
    <Button onClick={handleCreatePost} variant="text">
      <AddIcon sx={{ color: `${colors.grey[100]}` }} />
    </Button>
  );
};
