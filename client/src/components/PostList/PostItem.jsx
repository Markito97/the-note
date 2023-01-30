import { Box, Typography } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ActionMenu } from "./ActionMenu/ActionMenu";

const listItemStyle = {
  container: {
    paddingBottom: 1,
  },
  link: {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    width: "100%",
    listStyle: "none",
    textDecoration: "none",
    color: "#fff",
  },
  linkText: {
    fontSize: 14,
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  content: {
    paddingLeft: "5px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export const NoteItem = ({ note }) => {
  const [postId, setPostId] = useState();
  const [isActive, setIsActive] = useState(false);
  console.log(note);
  return (
    <Box
      sx={listItemStyle.container}
      onClick={() => setPostId(note.id)}
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <Link style={{ textDecoration: "none" }} to={`/posts/${note._id}`}>
        <Box sx={listItemStyle.link}>
          <ArticleOutlinedIcon />
          <Box sx={listItemStyle.content}>
            <Typography sx={listItemStyle.linkText}>{note.title}</Typography>
            <ActionMenu id={postId} active={isActive} />
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
