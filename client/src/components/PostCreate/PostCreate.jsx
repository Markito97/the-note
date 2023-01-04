import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { ColorTokens } from "../../assets/themes/theme";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { ContextApp } from "../../store/store";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { createPost } from "../../store/action";

const postCreateStyle = {
  textTransform: "none",
  paddingLeft: 0,
  paddingRight: 0,
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  fontSize: 16,
  text: {
    paddingLeft: 1,
    fontSize: "inherit",
  },
};

export const PostCreate = () => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const [state, dispatch] = useContext(ContextApp);

  postCreateStyle.color = `${colors.grey[100]}`;

  return (
    <Button
      sx={postCreateStyle}
      onClick={() =>
        createPost(
          { id: uuidv4(), title: "Title", payload: "Description" },
          dispatch
        )
      }
      variant="text"
    >
      <AddIcon />
      <Typography sx={postCreateStyle.text}>New Post</Typography>
    </Button>
  );
};
