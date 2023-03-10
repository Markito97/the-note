import { Box } from "@mui/material";
import { memo, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { TableContextDispatch, TableContextValue } from "../../tableContext";
import { useOutside } from "../../../../hooks/useOutside";
import { HeaderSettingsSidebarTitle } from "./HeaderSettingsSidebarTitle";
import { HeaderSettingsSidebarClose } from "./HeaderSettingsSidebarClose";
import { HeaderSettingsSidebarType } from "./HeaderSettingsSidebarType";
import { HeaderSettingsSidebarOptions } from "./HeaderSettingsSidebarOptions";

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
  },
};

const handleColumnType = (type) => {
  let columnPropertyType;
  switch (type) {
    case "Text":
      columnPropertyType = "Text";
      break;
    case "Number":
      columnPropertyType = "Number";
      break;
    default:
      throw new Error("Не корректные данные");
  }
  return columnPropertyType;
};

const handleFillNewColumn = (length, type) => {
  const column = new Array(length).fill({
    value: "",
    width: 200,
    type: type,
  });
  return column.map((cell) => ({ ...cell, id: uuidv4() }));
};

const handleCurrentLength = (content) => {
  return content.map((column) => column.cells.length);
};

const SettingsSidebarInner = ({ active, handleClose, containerRef }) => {
  const tableBarRef = useRef(null);
  useOutside(tableBarRef, handleClose, active, containerRef);
  const [tableState] = useContext(TableContextValue);
  const [tableDispatch] = useContext(TableContextDispatch);

  const handleAddHeaderCell = (type) => {
    const headerCell = {
      id: uuidv4(),
      type: type,
      width: 200,
    };
    tableDispatch({
      type: "updateHeaders",
      payload: [...tableState.header, headerCell],
    });
    return headerCell;
  };

  const handleAddContentCell = (headerCell) => {
    const [currentLength] = handleCurrentLength(tableState.content);
    const column = handleFillNewColumn(currentLength, headerCell.type);
    return tableDispatch({
      type: "addColumn",
      payload: {
        id: headerCell.id,
        type: headerCell.type,
        cells: column,
      },
    });
  };

  const handleAddColumn = (columnType) => {
    const type = handleColumnType(columnType);
    const headerCell = handleAddHeaderCell(type);
    handleAddContentCell(headerCell);
  };

  if (!active) return null;
  return (
    <Box ref={tableBarRef} sx={tableRightBarStyle.container}>
      <Box sx={tableRightBarStyle.header}>
        <HeaderSettingsSidebarTitle />
        <HeaderSettingsSidebarClose close={handleClose} />
      </Box>
      <HeaderSettingsSidebarType />
      <HeaderSettingsSidebarOptions addColumn={handleAddColumn} />
    </Box>
  );
};

export const SettingsSidebar = memo(SettingsSidebarInner);
