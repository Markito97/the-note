import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { tokens } from "../../assets/themes/theme";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@mui/icons-material/Add";

export const PostCreate = ({ addPost }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const createNewPost = () => {
    const newPost = {
      id: uuidv4(),
      title: "Title",
      descritpion: "Description",
    };
    addPost(newPost);
  };
  return (
    <Button
      sx={{
        color: `${colors.grey[100]}`,
        textTransform: "none",
        paddingLeft: 0,
        paddingRight: 0,
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        fontSize: 16,
      }}
      onClick={createNewPost}
      variant="text"
    >
      <AddIcon />
      <Typography sx={{ paddingLeft: 1, fontSize: "inherit" }}>
        {" "}
        New Post
      </Typography>
    </Button>
  );
};
