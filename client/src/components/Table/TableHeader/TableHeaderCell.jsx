import { Box, useTheme } from "@mui/system";
import { ColorTokens } from "../../../assets/themes/theme";
import { createRef, useState, useEffect } from "react";

export const TableHeaderCell = ({ cell, handleCurrentWidth }) => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const headerCellRef = createRef();
  const [cellWidth, setCellWidth] = useState();

  const hanldeTableCellWidth = (event) => {
    event.preventDefault();
    let currentWidth = headerCellRef.current.offsetWidth;
    let shiftX = event.clientX;
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);

    function move(event) {
      let newWidth = event.clientX - shiftX;
      let forState = newWidth + currentWidth;
      setCellWidth(forState);
    }

    function up() {
      document.removeEventListener("mouseup", up);
      document.removeEventListener("mousemove", move);
    }
  };

  const handleCallback = () => {
    handleCurrentWidth(cellWidth);
  };

  useEffect(() => {
    console.log("Effect");
    if (cellWidth) {
      headerCellRef.current.style.width = `${cellWidth}px`;
    }
  }, [cellWidth, headerCellRef]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ display: "flex", position: "relative" }}>
        <Box
          ref={headerCellRef}
          sx={{
            display: "flex",
            flexShrink: 0,
            width: `${cell.width}px`,
            borderRight: 1,
            borderColor: `${colors.grey[100]}`,
          }}
        >
          <Box
            sx={{
              width: "100%",
              heigth: "100%",
              cursor: "pointer",
              userSelect: "none",
              paddingLeft: 1,
              paddingRight: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                minWidth: 0,
                fontSize: 14,
              }}
            >
              <Box
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  color: `${colors.grey[100]}`,
                }}
              >
                {cell.text}
              </Box>
            </Box>
          </Box>
        </Box>
        {/* col-resize */}
        <Box
          onMouseDown={hanldeTableCellWidth}
          onMouseUp={handleCallback}
          sx={{
            position: "absolute",
            right: 0,
            width: 0,
            flexGrow: 0,
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: 5,
              marginLeft: "-3px",
              marginTop: "-1px",
              height: 34,
              cursor: "col-resize",
              "&:hover": {
                bgcolor: `${colors.grey[100]}`,
              },
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};
