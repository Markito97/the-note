import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { useHover } from "../../../../hooks/useHover";
import { ColorTokens } from "../../../../assets/themes/theme";
import { HeaderSettingsSidebar } from "../HeaderSettingsSidebar/HeaderSettingsSidebar";

const headerView = {
  wrapper: {
    width: "32px",
    userSelect: "none",
    cursor: "pointer",
    display: "flex",
    justifyContetn: "flex-start",
  },
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
  const [hoverRef, isHover] = useHover();
  const [isActive, setIsActive] = useState(false);

  const handleClose = () => {
    setIsActive(false);
  };

  return (
    <>
      <Box
        sx={headerView.wrapper}
        ref={hoverRef}
        style={{
          background: isHover
            ? `${colors.grey[300]}`
            : `${colors.primary[500]}`,
        }}
      >
        <Box sx={headerView.container}>
          <AddIcon
            onClick={() => {
              setIsActive((prev) => (prev = true));
            }}
            sx={headerView.icon}
          />
        </Box>
      </Box>
      <HeaderSettingsSidebar active={isActive} handleClose={handleClose} />
    </>
  );
};
