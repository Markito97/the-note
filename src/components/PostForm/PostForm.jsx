import { Box, TextField, useTheme } from "@mui/material";
import { FormControl } from "@mui/material";
import { useState, useEffect } from "react";
import { tokens } from "../../assets/themes/theme";
import { Editor } from "../Editor/Editor";

export const PostForm = ({
  currentTitle,
  currentDescription,
  changePost,
  posts,
}) => {
  const [title, setTitle] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  useEffect(() => {
    if (!currentTitle) {
      console.log(undefined);
    } else {
      setTitle(currentTitle.title);
    }
  }, [currentTitle]);

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
        <Editor posts={posts} currentDescription={currentDescription} />
      </FormControl>
    </Box>
  );
};
