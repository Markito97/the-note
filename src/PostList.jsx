import { List, ListItem, ListItemText } from "@mui/material";

export const PostList = ({ posts, postId }) => {
  return (
    <List>
      {posts.map((post, index) => (
        <ListItem
          onClick={() => postId(post.id)}
          id={post.id}
          key={index + 1}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <ListItemText>{post.title}</ListItemText>
          <ListItemText>{post.description}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
