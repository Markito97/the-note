import { Box, tableBodyClasses, useTheme } from "@mui/material";
import { ColorTokens } from "../../../assets/themes/theme";
import { useRef } from "react";
import NotesIcon from "@mui/icons-material/Notes";
import TagIcon from "@mui/icons-material/Tag";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { useContext } from "react";
import { TableContextDispatch, TableContextValue } from "../tableContext";
import { v4 as uuidv4 } from "uuid";
import { useOutside } from "../../../hooks/useOutside";
import { useState } from "react";

const rightBarProp = [
  {
    icon: <NotesIcon sx={{ width: 16, height: 16 }} />,
    text: "Text",
  },
  {
    icon: <TagIcon sx={{ width: 16, height: 16 }} />,
    text: "Number",
  },
];

const tableRightBarStyle = {
  container: {
    position: "absolute",
    color: "#fff",
    fontSize: 14,
    top: 0,
    height: "100%",
    border: 1,
    borderColor: "#fff",
    minWidth: "290px",
    maxWidth: "290px",
    right: "96px",
    bgcolor: "#141b2d",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 16px 6px",
    height: "42px",
  },
  headerTitle: {
    fontFamily: "sans-serif",
    fontWeight: 600,
    fontSize: 14,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  headerIconClose: {
    display: "flex",
    alignItems: "center",
  },
  headerMenu: {
    paddingLeft: "14px",
    paddingRight: "14px",
    marginTop: "6px",
    marginBottom: "6px",
    fontSize: 12,
  },
  headerMenuItem: {
    display: "flex",
    alignItems: "center",
    // bgcolor: `${colors.grey[500]}`,
  },
};

export const TableRightBar = ({ active, handleClose }) => {
  const tableBarRef = useRef(null);
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  useOutside(tableBarRef, handleClose, active);
  const [tableState] = useContext(TableContextValue);
  const [tableDispatch] = useContext(TableContextDispatch);

  const validtateTypeColumn = (type) => {
    let columnProperty;
    switch (type) {
      case "Text":
        columnProperty = "Text";
        break;
      case "Number":
        columnProperty = "Number";
        break;
      default:
        throw new Error("Не корректные данные");
    }
    return columnProperty;
  };

  const addHeaderCell = (property) => {
    const headerCell = {
      id: uuidv4(),
      text: property,
      width: 200,
    };
    tableDispatch({
      type: "updateHeaders",
      payload: [...tableState.header, headerCell],
    });
  };

  const fillNewColumn = (len) => {
    const newColumn = [];
    let i = 0;
    while (i < len) {
      const contentCell = {
        id: uuidv4(),
        text: "test",
        width: 200,
      };
      newColumn.push(contentCell);
      i++;
    }
    return newColumn;
  };

  const addContentCell = () => {
    const curLength = tableState.content.reduce((acc, cur) => cur.length);
    const column = fillNewColumn(curLength);
    tableDispatch({ type: "addColumn", payload: column });
  };

  const addColumn = (type) => {
    const property = validtateTypeColumn(type);
    addHeaderCell(property);
    addContentCell();
  };

  if (!active) return null;
  return (
    <Box ref={tableBarRef} sx={tableRightBarStyle.container}>
      <Box sx={tableRightBarStyle.header}>
        <Box>
          <Box component="span" sx={tableRightBarStyle.headerTitle}>
            New property
          </Box>
        </Box>

        <Box sx={tableBodyClasses.xheaderIconClose}>
          <HighlightOffOutlinedIcon sx={{ width: 14, height: 14 }} />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "6px",
          paddingLeft: "14px",
        }}
      >
        <Box component="span">Type</Box>
      </Box>
      {rightBarProp.map((item) => (
        <Box sx={tableRightBarStyle.headerMenu} key={uuidv4()}>
          <Box
            sx={tableRightBarStyle.headerMenuItem}
            onClick={() => addColumn(item.text)}
          >
            <Box>{item.icon}</Box>
            <Box>{item.text}</Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
