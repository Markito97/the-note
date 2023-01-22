import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { ColorTokens } from "../../../../assets/themes/theme";
import { SettingsSidebar } from "../HeaderSettingsSidebar/SettingSidebar";
import { createRef } from "react";

const headerView = {
  container: {
    display: "flex",
    width: "32px",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "16px",
    height: "100%",
    color: "#fff",
    display: "block",
    flexShrink: 0,
  },
};

export const HeaderView = () => {
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const headerViewRef = createRef(null);
  const [isActive, setIsActive] = useState(false);
  const handleOpen = () => {
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          width: "32px",
          userSelect: "none",
          cursor: "pointer",
          display: "flex",
          justifyContetn: "flex-start",
          "&:hover": {
            background: `${colors.grey[300]}`,
          },
        }}
        ref={headerViewRef}
      >
        <Box sx={headerView.container}>
          <AddIcon sx={headerView.icon} />
        </Box>
      </Box>
      {isActive && (
        <SettingsSidebar
          active={isActive}
          handleClose={handleClose}
          containerRef={headerViewRef}
        />
      )}
    </>
  );
};
