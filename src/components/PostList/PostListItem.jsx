import { ListItem, Box } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { PostListPopupMenu } from "./PostListPopupMenu";
import { Description } from "@mui/icons-material";

const itemStyle = {
  display: "flex",
  alignItems: "center",
  marginTop: 1,
  "&:hover": {
    bgcolor: "#858585",
  },
};

export const PostListItem = ({
  post,
  handleCurrentPost,
  removePost,
  setFavortitePost,
}) => {
  return (
    <Box sx={itemStyle} onClick={() => handleCurrentPost(post.id)}>
      <ArticleOutlinedIcon sx={{ width: 24, height: 24 }} />
      <ListItem>
        <div style={{ width: 194, whiteSpace: "nowrap" }}>
          <Box
            component="div"
            sx={{
              fontSize: 14,
              textOverflow: "ellipsis",
              overflow: "hidden",
              textAlign: "bo",
            }}
          >
            {post.title}
            {post.description}
          </Box>
        </div>
      </ListItem>
      <PostListPopupMenu
        removePost={removePost}
        setFavortitePost={setFavortitePost}
      />
    </Box>
  );
};
