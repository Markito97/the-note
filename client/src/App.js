import "./App.css";
import { ThemeProvider, Box } from "@mui/material";
import { NavBar } from "./components/NavBar/NavBar";
import { ColorModeContext, useMode } from "./assets/themes/theme";
import { PostForm } from "./components/PostForm/PostForm";
import { SideBar } from "./components/SideBar/SideBar";
import { useReducer } from "react";
import { postsReducer, initialState, ContextApp } from "./store/store";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./pages/Welcome";

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const [theme, colorMode] = useMode();

  const updateState = async () => {
    try {
      const posts = await fetch("http://localhost:3001/post/getAll", {
        method: "GET",
      }).then((response) => response.json());
      return posts;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    updateState().then((data) =>
      dispatch({ type: "updateState", payload: data })
    );
  }, []);

  return (
    <ContextApp.Provider value={[state, dispatch]}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <NavBar />
          <Box className="container">
            <SideBar />
            <Routes>
              <Route path="welcome" element={<Welcome />} />
              <Route path="posts/:id" element={<PostForm />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ContextApp.Provider>
  );
}

export default App;
