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

export const NavBar = () => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar
      position="static"
      sx={{
        p: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: `${colors.primary[400]}`,
        color: "text.primary",
      }}
    >
      <Typography display="flex" color={colors.grey[100]}>
        React Todo List
      </Typography>
      <Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        <Button>Sing in</Button>
        <IconButton>
          <AccountCircle />
        </IconButton>
      </Box>
    </AppBar>
  );
};
