import { Box } from "@mui/system";
import { useEffect, useState, useCallback, useContext } from "react";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableContent } from "./TableContent/TableContent";
import { TableContextDispatch, TableContextValue } from "./tableContext";

const tableStyle = {
  container: {
    display: "flex",
  },
  tableContainer: {
    width: "100%",
    paddingLeft: "96px",
    paddingRight: "96px",
    paddingBottom: "180px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
};

export const Table = () => {
  const [tableState] = useContext(TableContextValue);
  const [tableDispatch] = useContext(TableContextDispatch);

  const [currentHeader, setCurrentHeader] = useState();
  const [activeResize, setActiveResize] = useState(false);
  const [startWidth, setStartWidth] = useState();

  const startResize = (event, index) => {
    setStartWidth(event.clientX);
    setActiveResize(true);
    setCurrentHeader(index);
  };

  const handleResizeColumn = useCallback(
    (event) => {
      if (activeResize) {
        tableDispatch({
          type: "updateHeaders",
          payload: handleUpdateWidth(event, tableState.header),
        });
        tableDispatch({
          type: "updateContent",
          payload: handleUpdateContentWidth(event, tableState.content),
        });
      }
    },
    [activeResize]
  );

  const handleUpdateWidth = (event, header) => {
    return header.map((headerCell, index) =>
      index === currentHeader
        ? handleCurrentCellWidth(event, headerCell)
        : { ...headerCell }
    );
  };

  const handleCurrentCellWidth = (event, cell) => {
    const currentWidth = event.clientX - startWidth;
    const newWdith = cell.width + currentWidth;
    return {
      ...cell,
      width: newWdith,
    };
  };

  const handleUpdateContentWidth = (event, content) => {
    return content.map((contentColumn, index) =>
      index === currentHeader
        ? contentColumn.map((cell) => handleCurrentCellWidth(event, cell))
        : [...contentColumn]
    );
  };

  const removeListeners = () => {
    window.removeEventListener("mousemove", handleResizeColumn);
    window.removeEventListener("mouseup", stopResize);
  };

  const stopResize = useCallback(() => {
    setActiveResize(false);
    removeListeners();
  });

  useEffect(() => {
    if (activeResize) {
      window.addEventListener("mousemove", handleResizeColumn);
      window.addEventListener("mouseup", stopResize);
    }
    return () => {
      removeListeners();
    };
  }, [activeResize, handleResizeColumn, stopResize, removeListeners]);

  return (
    <Box sx={tableStyle.container}>
      <Box sx={tableStyle.tableContainer}>
        <TableHeader startResize={startResize} />
        <TableContent />
      </Box>
    </Box>
  );
};
