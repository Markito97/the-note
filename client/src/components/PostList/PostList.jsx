import { List } from "@mui/material";
import { PostListItem } from "./PostListItem";
import { useContext } from "react";
import { ContextApp } from "../../store/store";

export const PostList = ({
  handleCurrentPost,
  removePost,
  setFavortitePost,
}) => {
  const [state] = useContext(ContextApp);

  return (
    <List>
      {state.posts.map((post, index) => (
        <PostListItem
          setFavortitePost={setFavortitePost}
          removePost={removePost}
          handleCurrentPost={handleCurrentPost}
          post={post}
          key={index + 1}
        />
      ))}
    </List>
  );
};
