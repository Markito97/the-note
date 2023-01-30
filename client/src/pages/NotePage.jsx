import { Box, useTheme } from "@mui/material";
import { NoteMenu } from "../components/NoteMenu/NoteMenu";
import { NoteTitleForm } from "../components/NoteForm/PostForm";
import { ColorTokens } from "../assets/themes/theme";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ContextApp } from "../store/store";

export const NotePage = () => {
  const { id } = useParams();
  const [state] = useContext(ContextApp);
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const note = state.posts.find((note) => note._id === id);
  return (
    <Box sx={{ width: "100%", bgcolor: `${colors.primary[500]}` }}>
      <NoteTitleForm note={note} />
      <NoteMenu note={note} />
    </Box>
  );
};
