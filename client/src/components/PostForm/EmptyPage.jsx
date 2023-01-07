import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { ColorTokens } from "../../assets/themes/theme";

export const EmptyPage = () => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        cursor: "text",
        color: `${colors.grey[100]}`,
      }}
    >
      <Box
        contentEditable="true"
        placeholder="Type text..."
        sx={{
          width: 570,
          border: "none",
          outline: "none",
          p: 1,
        }}
      ></Box>
    </Box>
  );
};
