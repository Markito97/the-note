import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const PostListItem = ({ post, getPostById }) => {
  return (
    <ListItem onClick={() => getPostById(post.id)}>
      <ListItemButton>
        <ListItemIcon>
          <ArticleOutlinedIcon />
        </ListItemIcon>
        <ListItemText>{post.title}</ListItemText>
        <ListItemIcon sx={{ display: "flex", justifyContent: "flex-end" }}>
          <MoreHorizIcon />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
};
