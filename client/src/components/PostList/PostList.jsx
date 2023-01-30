import { List } from "@mui/material";
import { useContext } from "react";
import { ContextApp } from "../../store/store";
import { NoteItem } from "./PostItem";

export const PostList = ({
  handleCurrentPost,
  removePost,
  setFavortitePost,
}) => {
  const [state] = useContext(ContextApp);

  return (
    <List>
      {state.posts.map((post, index) => (
        <NoteItem
          setFavortitePost={setFavortitePost}
          removePost={removePost}
          handleCurrentPost={handleCurrentPost}
          note={post}
          key={index + 1}
        />
      ))}
    </List>
  );
};
