import { Box, TextField, TextareaAutosize, useTheme } from "@mui/material";
import { FormControl } from "@mui/material";
import { useState, useEffect } from "react";
import { ColorTokens } from "../../assets/themes/theme";

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

export const PostForm = ({ isCurrentPost }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  useEffect(() => {
    if (!isCurrentPost) {
    } else {
      setTitle(isCurrentPost.title);
    }
  }, [isCurrentPost]);

  postFormSyle.bgcolor = `${colors.primary[500]}`;

  return (
    <Box sx={postFormSyle}>
      <FormControl sx={postFormSyle.formControl}>
        <TextField
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          variant="standard"
          placeholder="Untitled"
          sx={postFormSyle.textField}
        />
        <TextField
          value={postText}
          onChange={(e) => {
            setPostText(e.target.value);
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
