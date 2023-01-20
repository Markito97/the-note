import { Box } from "@mui/material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const rightBarClose = {
  display: "flex",
  alignItems: "center",
};

export const RightBarClose = () => {
  return (
    <Box sx={rightBarClose}>
      <HighlightOffOutlinedIcon sx={{ width: 14, height: 14 }} />
    </Box>
  );
};
