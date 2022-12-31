import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { ColorTokens } from "../../assets/themes/theme";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import { ContextApp } from "../../store/store";

export const PostCreate = () => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const [state, dispatch] = useContext(ContextApp);

  return (
    <Button
      sx={{
        color: `${colors.grey[100]}`,
        textTransform: "none",
        paddingLeft: 0,
        paddingRight: 0,
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        fontSize: 16,
      }}
      onClick={() =>
        dispatch({
          type: "addPost",
        })
      }
      variant="text"
    >
      <AddIcon />
      <Typography sx={{ paddingLeft: 1, fontSize: "inherit" }}>
        New Post
      </Typography>
    </Button>
  );
};
