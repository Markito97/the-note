import { Box } from "@mui/material";
import { NoteMenuList } from "./NoteMenuList";
import { TablePage } from "../../pages/TablePage";
import { useReducer } from "react";
import { initialNoteMenuState, noteMenuReducer } from "./noteMenuReducer";
import { EmptyPage } from "../../pages/EmptyPage";
import { CheckListPage } from "../../pages/CheckListPage";
import { useEffect } from "react";
import { createTable, updatePost } from "../../store/action";
import { useState } from "react";
import { initialTable } from "../Table/tableReducer";

const noteMenuStyles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
};

export const NoteMenu = ({ note }) => {
  const [pageType, pageTypeDispatch] = useReducer(
    noteMenuReducer,
    initialNoteMenuState
  );
  const [isFetch, setIsFetch] = useState(false);
  useEffect(() => {
    if (!note) return;
    pageTypeDispatch({
      type: "setUpdate",
      payload: {
        isEmpty: note.empty,
        isTable: note.table,
        isHide: note.hide,
        isCheckList: note.checkList,
        isList: note.list,
      },
    });
  }, [note]);

  const handleValidateType = (value) => {
    switch (value) {
      case "Table":
        pageTypeDispatch({ type: "setTable" });
        createTable({ id: note._id, table: initialTable });
        setIsFetch(true);
        break;
      case "Empty":
        pageTypeDispatch({ type: "setEmpty" });
        setIsFetch(true);
        break;
    }
  };

  const handleType = (type) => {
    return handleValidateType(type);
  };

  const handleUpdatePost = () => {
    const newPost = {
      ...note,
      table: pageType.isTable,
      hide: pageType.isHide,
      empty: pageType.isEmpty,
      list: pageType.isList,
    };
    updatePost(newPost);
  };

  useEffect(() => {
    if (isFetch) {
      handleUpdatePost();
    }
  }, [isFetch]);

  return (
    <Box sx={noteMenuStyles.container}>
      {pageType.isHide && <NoteMenuList handleType={handleType} />}
      {pageType.isTable ? (
        <TablePage isTable={pageType.isTable} id={note._id} />
      ) : null}
      {pageType.isEmpty ? <EmptyPage /> : null}
      {pageType.isCheckList ? <CheckListPage /> : null}
    </Box>
  );
};
