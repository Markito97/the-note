import { Box, TextField, useTheme } from "@mui/material";
import { FormControl } from "@mui/material";
import { useState, useEffect } from "react";
import { ColorTokens } from "../../assets/themes/theme";
import { CustomEditor } from "../CustomEditor/CustomEditor";

export const PostForm = ({ isCurrentPost, changePost, changeDescription }) => {
  const [title, setTitle] = useState("");
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  useEffect(() => {
    if (!isCurrentPost) {
    } else {
      setTitle(isCurrentPost.title);
    }
  }, [isCurrentPost]);

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
        <CustomEditor
          isCurrentPost={isCurrentPost}
          changeDescription={changeDescription}
        />
      </FormControl>
    </Box>
  );
};
