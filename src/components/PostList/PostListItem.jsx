import { ListItem, Box } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { PostListPopupMenu } from "./PostListPopupMenu";
import { useContext } from "react";
import { ContextApp } from "../../store/store";

const itemStyle = {
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
    <Box
      onClick={() => dispatch({ type: "setId", payload: post.id })}
      sx={itemStyle}
    >
      <ArticleOutlinedIcon sx={{ width: 24, height: 24 }} />
      <ListItem>
        <div style={{ width: 194, whiteSpace: "nowrap" }}>
          <Box
            component="div"
            sx={{
              fontSize: 14,
              textOverflow: "ellipsis",
              overflow: "hidden",
              textAlign: "bo",
            }}
          >
            <span>{post.title}</span>
            <span>{post.description}</span>
          </Box>
        </div>
      </ListItem>
      <PostListPopupMenu />
    </Box>
  );
};
