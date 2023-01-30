import { Box, TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ContextApp } from "../../store/store";

const postFormSyle = {
  width: "100%",
  overflowY: "scroll",
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

const handleChangeTitle = (notes, noteId, value) => {
  return notes.map((note) =>
    note._id === noteId ? { ...note, title: value } : { ...note }
  );
};

export const NoteTitleForm = ({ note }) => {
  const [state, dispatch] = useContext(ContextApp);
  const [noteTitle, setNoteTitle] = useState({ title: "" });

  useEffect(() => {
    if (!note) return;
    setNoteTitle({ ...note });
  }, [note]);

  const handleTitle = (value) => {
    setNoteTitle({ ...noteTitle, title: value });
    dispatch({
      type: "updateNoteTitle",
      payload: handleChangeTitle(state.posts, noteTitle._id, value),
    });
  };

  const handleSendData = () => {};

  return (
    <Box sx={postFormSyle}>
      <FormControl sx={postFormSyle.formControl}>
        <TextField
          value={noteTitle.title}
          variant="standard"
          placeholder="Untitled"
          onChange={(event) => handleTitle(event.target.value)}
          onBlur={handleSendData}
          sx={postFormSyle.textField}
        />
      </FormControl>
    </Box>
  );
};
