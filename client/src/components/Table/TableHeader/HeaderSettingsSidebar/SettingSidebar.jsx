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

const SettingsSidebarInner = ({ active, handleClose, containerRef }) => {
  const tableBarRef = useRef(null);
  useOutside(tableBarRef, handleClose, active, containerRef);
  const [tableState] = useContext(TableContextValue);
  const [tableDispatch] = useContext(TableContextDispatch);

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

  const handleAddHeaderCell = (property) => {
    const headerCell = {
      id: uuidv4(),
      type: property,
      width: 200,
    };
    tableDispatch({
      type: "updateHeaders",
      payload: [...tableState.header, headerCell],
    });
    return headerCell;
  };

  const handleFillNewColumn = (columnLength) => {
    const newColumn = [];
    let i = 0;
    while (i < columnLength) {
      const contentCell = {
        id: uuidv4(),
        value: "",
        width: 200,
      };
      newColumn.push(contentCell);
      i++;
    }
    return newColumn;
  };

  const handleAddContentCell = (headerCell) => {
    const [currentLength] = tableState.content.map(
      (column) => column.cells.length
    );
    const column = handleFillNewColumn(currentLength);

    tableDispatch({
      type: "addColumn",
      payload: {
        id: headerCell.id,
        type: headerCell.type,
        cells: column,
      },
    });
  };

  const handleAddColumn = (columnType) => {
    const property = handleColumnType(columnType);
    const headerCell = handleAddHeaderCell(property);
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
