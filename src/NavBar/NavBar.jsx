import { Box, AppBar } from "@mui/material";

export const NavBar = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          height: 50,
          display: "flex",
          justifyContent: "center",
          padding: 1,
        }}
      >
        React Todo List
      </AppBar>
    </Box>
  );
};
