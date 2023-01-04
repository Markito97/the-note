import { ListItem, Box, Typography } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { PostListPopupMenu } from "./PostListPopupMenu";
import { useContext } from "react";
import { ContextApp } from "../../store/store";
import { Routes, Route, Link } from "react-router-dom";

const PostListItemStyle = {
  display: "flex",
  alignItems: "center",
  marginTop: 1,
  "&:hover": {
    bgcolor: "#858585",
  },
};

export const PostListItem = ({ post }) => {
  const [state, dispatch] = useContext(ContextApp);
  return (
    <Box sx={PostListItemStyle}>
      <ArticleOutlinedIcon />
      <Link to={`/posts/${post.id}`}>
        <ListItem>
          <Box
            sx={{
              width: 194,
              whiteSpace: "nowrap",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 14,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  textAlign: "bo",
                }}
              >
                {post.title}
              </Typography>
            </Box>
          </Box>
        </ListItem>
      </Link>

      <PostListPopupMenu />
    </Box>
  );
};
