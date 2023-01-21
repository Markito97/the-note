import { Box } from "@mui/material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

const rightBarCloseStyle = {
  display: "flex",
  alignItems: "center",
  icon: {
    width: 14,
    height: 14,
  },
};

export const RightBarClose = ({ close }) => {
  return (
    <Box onClick={() => close(false)} sx={rightBarCloseStyle}>
      <HighlightOffOutlinedIcon sx={rightBarCloseStyle.icon} />
    </Box>
  );
};
