import { AppBar, useTheme, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../assets/themes/theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export const NavBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <AppBar
      position="static"
      sx={{
        p: 2,
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
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </AppBar>
  );
};
