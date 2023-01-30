import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import { ColorTokens } from "../../assets/themes/theme";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { ContextApp } from "../../store/store";
import { createPost } from "../../store/action";
import { useNavigate } from "react-router-dom";

const noteCreateStyles = {
  container: { p: 0, display: "flex", justifyContent: "flex-end" },
};

export const NoteCreate = () => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const [state, dispatch] = useContext(ContextApp);
  const navigate = useNavigate();

  const handleCreatePost = () => {
    const post = {
      title: "Untitle",
      table: false,
      checkList: false,
      list: false,
      empty: false,
      hide: true,
      fetch: false,
    };
    createPost(post, dispatch).then((data) => {
      navigate(`/posts/${data._id}`);
      dispatch({ type: "addPost", payload: data });
    });
  };

  return (
    <Button
      sx={noteCreateStyles.container}
      onClick={handleCreatePost}
      variant="text"
    >
      <AddIcon sx={{ color: `${colors.grey[100]}` }} />
    </Button>
  );
};
