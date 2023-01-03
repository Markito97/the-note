import {
  AppBar,
  useTheme,
  IconButton,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, ColorTokens } from "../../assets/themes/theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { AccountCircle } from "@mui/icons-material";

const navBarStyle = {
  navBar: {
    position: "static",
    p: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: 1,
  },
};

export const NavBar = () => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  navBarStyle.navBar.bgcolor = `${colors.primary[400]}`;
  navBarStyle.navBar.color = `${colors.grey[100]}`;

  return (
    <AppBar sx={navBarStyle.navBar}>
      <Typography>React Todo List</Typography>
      <Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
    </AppBar>
  );
};
