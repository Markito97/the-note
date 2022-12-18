import { List } from "@mui/material";
import { PostListItem } from "./PostListItem";

export const PostList = ({
  posts,
  handleCurrentPost,
  removePost,
  setFavortitePost,
}) => {
  return (
    <List>
      {posts.map((post, index) => (
        <PostListItem
          setFavortitePost={setFavortitePost}
          removePost={removePost}
          handleCurrentPost={handleCurrentPost}
          key={index + 1}
          post={post}
        />
      ))}
    </List>
  );
};
