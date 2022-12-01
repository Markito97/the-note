import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const PostList = ({ posts, getPost }) => {
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
          <ListItem key={index + 1}>
            <ListItemButton>
              <ListItemIcon>
                <ArticleOutlinedIcon />
              </ListItemIcon>
              <ListItemText>{post.title}</ListItemText>
              <ListItemIcon
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <MoreHorizIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
