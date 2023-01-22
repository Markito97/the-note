import { useContext } from "react";
import { TableContextValue } from "../tableContext";
import { Box, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ColorTokens } from "../../../assets/themes/theme";
import { useHover } from "../../../hooks/useHover";

const tableFooterStyles = {};

export const TableFooter = () => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);

  return (
    <Box
      sx={{
        paddingLeft: "5px",
        fontSize: "14px",
        userSelect: "none",
        borderTop: 1,
        borderBottom: 1,
        borderColor: `${colors.grey[100]}`,
        display: "flex",
        alignItems: "center",
        color: `${colors.grey[100]}`,
        "&:hover": {
          bgcolor: `${colors.grey[400]}`,
        },
      }}
    >
      <AddIcon sx={{ width: "18px" }} />
      <Box sx={{ marginLeft: "5px" }}>New</Box>
    </Box>
  );
};
