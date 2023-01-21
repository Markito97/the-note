import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { TableRightBar } from "./RightBar";
import { Box, useTheme } from "@mui/material";
import { useHover } from "../../../../hooks/useHover";
import { ColorTokens } from "../../../../assets/themes/theme";

export const OpenMenu = () => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);

  const [isShowRightBar, setIsShowRightBar] = useState(false);
  const [hoverRef, isHover] = useHover();
  const handleClose = () => {
    setIsShowRightBar(false);
  };

  return (
    <Box
      sx={{
        width: "32px",
        userSelect: "none",
        cursor: "pointer",
        display: "flex",
        justifyContetn: "flex-start",
      }}
      ref={hoverRef}
      style={{
        background: isHover ? `${colors.grey[300]}` : `${colors.primary[500]}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "32px",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AddIcon
          onClick={() => {
            setIsShowRightBar((prev) => (prev = true));
          }}
          sx={{
            width: "16px",
            height: "100%",
            color: "#fff",
            display: "block",
            flexShrink: 0,
          }}
        />
      </Box>

      {/* <TableRightBar active={isShowRightBar} handleClose={handleClose} /> */}
    </Box>
  );
};
