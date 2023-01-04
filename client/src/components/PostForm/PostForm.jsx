import { Box, TextField, TextareaAutosize, useTheme } from "@mui/material";
import { FormControl } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { ColorTokens } from "../../assets/themes/theme";
import { useParams, useSearchParams } from "react-router-dom";
import { ContextApp } from "../../store/store";
import { updatePost } from "../../store/action";

const postFormSyle = {
  width: "100%",
  formControl: {
    display: "flex",
    alignItems: "center",
    m: 2,
  },
  textField: {
    width: 570,
    p: 1,
  },
};

export const PostForm = () => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const [post, setPost] = useState({ title: "", description: "" });
  const { id } = useParams();
  const [state, dispatch] = useContext(ContextApp);
  console.log(id);
  postFormSyle.bgcolor = `${colors.primary[500]}`;

  useEffect(() => {
    console.log("Effect");
    const currentPost = state.posts.find((post) => post.id === id);

    console.log(currentPost);
    if (currentPost) {
      setPost({
        ...currentPost,
        title: currentPost.title,
        description: currentPost.description,
      });
    }
  }, [id, state]);

  const updatePost = (e) => {
    setPost({ ...post, title: e.target.value });
    const updatedPosts = state.posts.map((post) => {
      if (post.id === id) {
        return { ...post, title: e.target.value };
      } else {
        return { ...post };
      }
    });
    dispatch({ type: "updatePost", payload: updatedPosts });
  };

  return (
    <Box sx={postFormSyle}>
      <FormControl sx={postFormSyle.formControl}>
        <TextField
          value={post.title}
          onChange={updatePost}
          variant="standard"
          placeholder="Untitled"
          sx={postFormSyle.textField}
        />
        <TextField
          value={post.description}
          onChange={(e) => {
            setPost({ ...post, description: e.target.value });
          }}
          sx={postFormSyle.textField}
          multiline
          variant="standard"
          placeholder="Enter text"
          InputProps={{
            disableUnderline: true,
          }}
        ></TextField>
      </FormControl>
    </Box>
  );
};
