import { Box, TextField, Typography, useTheme } from "@mui/material";
import { FormControl } from "@mui/material";
import { useState, useEffect, createRef } from "react";
import { ColorTokens } from "../../assets/themes/theme";
import { useParams } from "react-router-dom";
import { EmptyPage } from "./EmptyPage";
import { getPost, updatePost } from "../../store/action";
import { useContext } from "react";
import { ContextApp } from "../../store/store";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { Table } from "../Table/Table";
import { TablePage } from "../Table/TablePage";

const postFormSyle = {
  width: "100%",
  overflowY: "scroll",
  formControl: {
    display: "flex",
    alignItems: "center",
    m: 2,
  },
  textField: {
    width: 570,
    p: 1,
  },
};

export const PostForm = () => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const { id } = useParams();
  const [isEmptyPage, setIsEmptyPage] = useState(false);
  const [isTablePage, setIsTablePage] = useState(false);
  const [isListPage, setIsListPage] = useState(false);
  const [isHide, setIsHide] = useState(true);
  const [state, dispatch] = useContext(ContextApp);
  const [isFetch, setIsFetch] = useState(false);
  const [post, setPost] = useState();
  const inputRef = createRef();
  postFormSyle.bgcolor = `${colors.primary[500]}`;

  useEffect(() => {
    // Есть два варианта как можно сделать
    // Можно получать пост запросом либо доставать его и стейта, когда мы получаем пост из стейта,
    // обновляя его и рефреша страницы получаем рендер со старыми данными
    getPost(id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setPost(data);
          setIsEmptyPage(data.emptyPage);
          setIsHide(data.hide);
          setIsTablePage(data.tablePage);
        }
      });
    // Нужно добавить в массив зависимостей, скорей всего state и при refresh будет ок
  }, [id]);

  const handleUpdatePost = () => {
    const updatedPost = {
      ...post,
      hide: isHide,
      emptyPage: isEmptyPage,
      listPage: isListPage,
      tablePage: isTablePage,
    };
    const updatedPosts = state.posts.map((note) => {
      if (note.id === id) {
        return {
          ...updatedPost,
        };
      } else {
        return { ...note };
      }
    });
    dispatch({ type: "updatePost", payload: updatedPosts });
    updatePost(updatedPost);
  };

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
    }
  });

  // Дополнительное состояние решило проблему постоянных запросов
  useEffect(() => {
    if (isFetch) {
      setIsFetch(false);
      handleUpdatePost();
    }
  }, [isFetch]);

  return (
    <Box sx={postFormSyle}>
      <FormControl sx={postFormSyle.formControl}>
        <TextField
          inputRef={inputRef}
          variant="standard"
          placeholder="Untitled"
          sx={postFormSyle.textField}
        />
      </FormControl>

      {isHide && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: 570, p: 1 }}>
            <Typography
              sx={{
                fontSize: 18,
                color: `${colors.grey[100]}`,
                opacity: "70%",
                paddingBottom: 2,
              }}
            >
              Press Enter to continue with an empty page, or pick a template
            </Typography>
            <Box
              onClick={() => {
                setIsEmptyPage(true);
                setIsHide(false);
                setIsFetch(true);
              }}
              sx={{
                display: "flex",
                color: `${colors.grey[100]}`,
                fontSize: 14,
                alignItems: "center",
                "&:hover": {
                  bgcolor: "#525252",
                  borderRadius: 1.5,
                },
              }}
            >
              <ArticleOutlinedIcon
                sx={{ paddingLeft: 1.5, marginRight: 1.5 }}
              />
              <Typography sx={{ fontSize: "inherit" }}>Empty page</Typography>
            </Box>
            <Box
              onClick={() => {
                setIsTablePage(true);
                setIsHide(false);
                setIsFetch(true);
              }}
              sx={{
                display: "flex",
                color: `${colors.grey[100]}`,
                fontSize: 14,
                alignItems: "center",
                "&:hover": {
                  bgcolor: "#525252",
                  borderRadius: 1.5,
                },
              }}
            >
              <TableChartOutlinedIcon
                sx={{ paddingLeft: 1.5, marginRight: 1.5 }}
              />
              <Typography sx={{ fontSize: "inherit" }}>Table</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                color: `${colors.grey[100]}`,
                fontSize: 14,
                alignItems: "center",
                "&:hover": {
                  bgcolor: "#525252",
                  borderRadius: 1.5,
                },
              }}
            >
              <FormatListBulletedOutlinedIcon
                sx={{ paddingLeft: 1.5, marginRight: 1.5 }}
              />
              <Typography sx={{ fontSize: "inherit" }}>List</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                color: `${colors.grey[100]}`,
                fontSize: 14,
                alignItems: "center",
                "&:hover": {
                  bgcolor: "#525252",
                  borderRadius: 1.5,
                },
              }}
            >
              <FormatListBulletedOutlinedIcon
                sx={{ paddingLeft: 1.5, marginRight: 1.5 }}
              />
              <Typography sx={{ fontSize: "inherit" }}>BoardPage</Typography>
            </Box>
          </Box>
        </Box>
      )}
      {isEmptyPage ? <EmptyPage /> : null}
      {isTablePage ? <TablePage /> : null}
    </Box>
  );
};
