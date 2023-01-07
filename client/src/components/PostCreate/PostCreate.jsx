import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { ColorTokens } from "../../assets/themes/theme";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
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
      emptyPage: false,
      listPage: false,
      tablePage: false,
      hide: true,
    };

    createPost(post, dispatch);
    navigate(`/posts/${post.id}`);
  };

  return (
    <Button
      sx={{ p: 0, display: "flex", justifyContent: "flex-end" }}
      onClick={handleCreatePost}
      variant="text"
    >
      <AddIcon sx={{ color: `${colors.grey[100]}` }} />
    </Button>
  );
};
