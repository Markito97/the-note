import { Box } from "@mui/material";
import { useEffect, useState, useCallback, useContext } from "react";
import { TableContextValue, TableContextDispatch } from "../../tableContext";

const colResizeStyle = {
  colResizeContainer: {
    position: "absolute",
    right: 0,
    width: 0,
    top: 0,
  },
  colResize: {
    width: "5px",
    marginLeft: "-3px",
    marginTop: "-1px",
    height: "30px",
    cursor: "col-resize",
    "&:hover": {
      bgcolor: "#fff",
    },
  },
};

export const HeaderColResize = ({ index }) => {
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
    return content.map((column, index) => {
      if (index === currentHeader) {
        const updateWidth = column.cells.map((cell) =>
          handleCurrentCellWidth(event, cell)
        );
        return { ...column, cells: updateWidth };
      } else {
        return { ...column };
      }
    });
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
    <Box sx={colResizeStyle.colResizeContainer}>
      <Box
        onMouseDown={(event) => {
          startResize(event, index);
        }}
        sx={colResizeStyle.colResize}
      ></Box>
    </Box>
  );
};
