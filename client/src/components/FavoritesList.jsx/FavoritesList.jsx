import { List } from "@mui/material";
import { FavoritesListItem } from "./FavoritesListItem";
export const FavoritesList = ({ favoritePosts }) => {
  return (
    <List>
      {favoritePosts.map((post, index) => (
        <FavoritesListItem key={index + 1} post={post} />
      ))}
    </List>
  );
};
