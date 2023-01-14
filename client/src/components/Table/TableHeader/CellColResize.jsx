import { Box } from "@mui/material";

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

export const CellColResize = ({ startResize, index }) => {
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
