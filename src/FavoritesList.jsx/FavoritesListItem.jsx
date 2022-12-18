import { ListItem, Box } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { FavoritesListPopupMenu } from "./FavoritesListPopupMenu";

export const FavoritesListItem = ({ post }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: 1,
        "&:hover": {
          bgcolor: "#858585",
        },
      }}
    >
      <ArticleOutlinedIcon sx={{ width: 24, height: 24 }} />
      <ListItem>
        <div style={{ width: 194, whiteSpace: "nowrap" }}>
          <Box
            component="div"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: 14,
            }}
          >
            {post.title}
          </Box>
        </div>
      </ListItem>
      <FavoritesListPopupMenu />
    </Box>
  );
};
