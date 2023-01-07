import { ListItem, Box, Typography, useTheme } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { Link } from "react-router-dom";
import { ColorTokens } from "../../assets/themes/theme";
import { PostItemMenu } from "./PostItemMenu";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { createRef } from "react";

const PostListItemStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  marginTop: 1,
  "&:hover": {
    bgcolor: "#525252",
  },
};

export const PostItem = ({ post }) => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const [postId, setPostId] = useState();
  const handlePostId = () => {
    setPostId(post.id);
  };

  const [isActive, setIsActive] = useState(false);

  const addIconRef = createRef();
  const handleActive = () => {
    setIsActive(true);
  };

  const handleInactive = () => {
    setIsActive(false);
  };

  return (
    <Box
      onClick={handlePostId}
      onMouseOver={handleActive}
      onMouseLeave={handleInactive}
      sx={PostListItemStyle}
    >
      <Link
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          listStyle: "none",
          textDecoration: "none",
          color: `${colors.grey[100]}`,
        }}
        to={`/posts/${post.id}`}
      >
        <ArticleOutlinedIcon />
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
                }}
              >
                {post.title}
              </Typography>
            </Box>
          </Box>
        </ListItem>
        <PostItemMenu
          sx={{ visibility: "hidden" }}
          id={postId}
          active={isActive}
        />
        <AddIcon
          sx={{
            color: isActive ? `${colors.grey[100]}` : `${colors.primary[400]}`,
            "&:hover": {
              bgcolor: `${colors.grey[400]}`,
              borderRadius: "3px",
            },
          }}
        />
      </Link>
    </Box>
  );
};
