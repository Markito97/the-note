import { Box } from "@mui/material";

const rightBarHeaderStyle = {
  fontFamily: "sans-serif",
  fontWeight: 600,
  fontSize: 14,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};

export const RightBarHeader = () => {
  return (
    <Box>
      <Box component="span" sx={rightBarHeaderStyle}>
        New property
      </Box>
    </Box>
  );
};
