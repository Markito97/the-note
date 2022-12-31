import { Search } from "@mui/icons-material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { PostList } from "../PostList/PostList";
import { ColorTokens } from "../../assets/themes/theme";
import { PostCreate } from "../PostCreate/PostCreate";
import { useContext } from "react";
import { ContextApp } from "../../store/store";

export const SideBar = ({}) => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const [state, dispatch] = useContext(ContextApp);
  return (
    <Box
      sx={{
        p: 1,
        bgcolor: `${colors.primary[400]}`,
        color: `${colors.grey[100]}`,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <PostCreate />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          sx={{
            color: `${colors.grey[100]}`,
            textTransform: "none",
            paddingLeft: 0,
            paddingRight: 0,
            marginBottom: 2,
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            fontSize: 16,
          }}
        >
          {/* // Search Form  */}
          <Typography sx={{ paddingLeft: 1, fontSize: "inherit" }}>
            Search
          </Typography>
        </Button>
      </Box>
      {state.favoritePosts.length === 0 ? null : (
        <Typography sx={{ fontSize: 14 }}>Favorites</Typography>
      )}
      <Typography sx={{ fontSize: 14 }}>Post List</Typography>
      <PostList />
    </Box>
  );
};
