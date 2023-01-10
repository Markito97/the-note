import { Box } from "@mui/system";
import { useEffect } from "react";
import { useCallback } from "react";
import { createRef, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const tableStyles = {
  tableField: {},
  tableHeader: {
    width: "100%",
    color: "#fff",
    fontSize: 14,
    headerRow: {
      borderBottom: 1,
      borderTop: 1,
      borderColor: "#fff",
      display: "flex",
      headerCell: {
        position: "relative",
        borderRight: 1,
        borderColor: "#fff",
        padding: "5px",
        selection: {
          position: "absolute",
          right: 0,
          width: 0,
          top: 0,
          flexGrow: 0,
          zIndex: 1,
          colResize: {
            width: 3,
            marginLeft: "-2px",
            marginTop: "-1px",
            height: 27,
            cursor: "col-resize",
            "&:hover": {
              bgcolor: "#fff",
            },
          },
        },
      },
    },
  },
  tableBody: {
    bodyRow: {},
  },
};

const createHeaders = (headers) => {
  return headers.map((item) => ({
    width: 100,
    text: item,
    // ref: useRef(),
  }));
};

export const Table = () => {
  const [tableHeaders, setTableHeaders] = useState([
    { text: "Items", width: 100 },
    { text: "Order", width: 100 },
    { text: "Amount", width: 100 },
    { text: "Status", width: 100 },
    { text: "Status", width: 100 },
    { text: "Delivery Driver", width: 100 },
  ]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const res = tableHeaders.map((item) => ({
      ...item,
      ref: createRef(),
    }));
    setTableHeaders([...res]);
    console.log(res);
  }, []);

  const mouseDown = (index) => {
    setActiveIndex(index);
  };

  const mouseMove = useCallback(
    (event) => {
      const cellWidth = tableHeaders.map((cell, index) => {
        if (index === activeIndex) {
          const curWidth = event.clientX - cell.ref.current.offsetLeft;
          console.log(curWidth);
          return {
            ...cell,
            width: curWidth,
          };
        } else {
          return {
            ...cell,
          };
        }
      });
      setTableHeaders(cellWidth);
    },
    [activeIndex]
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", mouseUp);
  });

  const mouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [setActiveIndex, removeListeners]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseup", mouseUp);
    }
    return () => {
      removeListeners();
    };
  }, [activeIndex, mouseMove, mouseUp, removeListeners]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Box
        sx={{
          // position: "relative",
          // minWidth: "100%",
          paddingLeft: "96px",
          paddingRight: "96px",
        }}
      >
        <Box sx={tableStyles.tableWrapper}>
          <Box sx={tableStyles.tableField}>
            <Box sx={tableStyles.tableHeader}>
              <Box sx={tableStyles.tableHeader.headerRow}>
                {tableHeaders.map((item, index) => (
                  <Box
                    ref={item.ref}
                    sx={{
                      width: item.width,
                      height: 28,
                      position: "relative",
                      borderRight: 1,
                      borderColor: "#fff",
                      padding: "5px",
                    }}
                    key={uuidv4()}
                  >
                    <Box>{item.text}</Box>
                    <Box
                      sx={
                        tableStyles.tableHeader.headerRow.headerCell.selection
                      }
                    >
                      <Box
                        onMouseDown={() => mouseDown(index)}
                        sx={
                          tableStyles.tableHeader.headerRow.headerCell.selection
                            .colResize
                        }
                      ></Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={tableStyles.tableBody}>
              <Box sx={tableStyles.tableBody.bodyRow}></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
