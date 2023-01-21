import { Box, useTheme } from "@mui/material";
import { ColorTokens } from "../../../../assets/themes/theme";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { TableContextDispatch, TableContextValue } from "../../tableContext";
import { useOutside } from "../../../../hooks/useOutside";
import { RightBarHeader } from "./RightBarHeader";
import { RightBarClose } from "./RightBarClose";
import { MenuOptions, RightBarMenuList } from "./MenuOptions";

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
    return headerCell;
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

  const addContentCell = (headerId) => {
    const [currentLength] = tableState.content.map(
      (column) => column.cells.length
    );
    const column = fillNewColumn(currentLength);

    tableDispatch({
      type: "addColumn",
      payload: {
        id: headerId,
        type: "text",
        cells: column,
      },
    });
  };

  const addColumn = (type) => {
    const property = validtateTypeColumn(type);
    const headerCell = addHeaderCell(property);
    console.log(headerCell);
    addContentCell(headerCell.id);
  };

  if (!active) return null;
  return (
    <Box ref={tableBarRef} sx={tableRightBarStyle.container}>
      <Box sx={tableRightBarStyle.header}>
        <RightBarHeader />
        <RightBarClose close={handleClose} />
      </Box>
      <Box
        sx={{
          marginTop: "6px",
          paddingLeft: "14px",
        }}
      >
        <Box component="span">Type</Box>
      </Box>
      <MenuOptions addColumn={addColumn} />
    </Box>
  );
};
