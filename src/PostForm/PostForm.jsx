import { Box, TextField, useTheme } from "@mui/material";
import { FormControl } from "@mui/material";
import { useState } from "react";
import { tokens } from "../theme";
import { useEffect } from "react";
import { Editor } from "../Editor/Editor";

export const PostForm = ({ currentPost, changePost }) => {
  const [title, setTitle] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  useEffect(() => {
    if (!currentPost) {
      console.log(undefined);
    } else {
      setTitle(currentPost.title);
    }
  }, [currentPost]);

  return (
    <Box sx={{ bgcolor: `${colors.primary[500]}`, width: "100%" }}>
      <FormControl sx={{ display: "flex", alignItems: "center", m: 2 }}>
        <TextField
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            changePost(e.target.value);
          }}
          variant="standard"
          placeholder="Untitled"
          sx={{ width: 570, p: 1 }}
        />
        <Editor />
      </FormControl>
    </Box>
  );
};
