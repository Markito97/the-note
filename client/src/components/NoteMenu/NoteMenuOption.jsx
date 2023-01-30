import { Box } from "@mui/material";

const noteMenuOptionStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    color: "#fff",
    paddingBottom: 1,
  },
};

export const NoteMenuOption = ({ option }) => {
  return (
    <Box
      onClick={() => option.handler(option.text)}
      sx={noteMenuOptionStyles.container}
    >
      {option.icon}
      <Box sx={{ paddingLeft: 3 }}>{option.text}</Box>
    </Box>
  );
};
