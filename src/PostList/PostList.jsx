import { List, Box } from "@mui/material";
import { PostListItem } from "./PostListItem";

export const PostList = ({ posts, getPostById }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        bgcolor: "background.paper",
      }}
    >
      <List>
        {posts.map((post, index) => (
          <PostListItem key={index + 1} post={post} getPostById={getPostById} />
        ))}
      </List>
    </Box>
  );
};
