import "./App.css";
import { ThemeProvider, Box } from "@mui/material";
import { NavBar } from "./components/NavBar/NavBar";
import { ColorModeContext, useMode } from "./assets/themes/theme";
import { PostForm } from "./components/PostForm/PostForm";
import { SideBar } from "./components/SideBar/SideBar";
import { useReducer } from "react";
import { postsReducer, initialState, ContextApp } from "./store/store";

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const [theme, colorMode] = useMode();

  return (
    <ContextApp.Provider value={[state, dispatch]}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <NavBar />
          <Box className="container">
            <SideBar />
            <PostForm />
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ContextApp.Provider>
  );
}

export default App;
