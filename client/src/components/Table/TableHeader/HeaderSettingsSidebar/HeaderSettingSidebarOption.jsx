import React, { memo } from "react";
import { Box } from "@mui/material";

const menuItemStyle = {
  display: "flex",
  alignItems: "center",
  marginLeft: "14px",
  paddingTop: "5px",
};

const HeaderSettingsSidebarOptionInner = ({ addColumn, option }) => {
  return (
    <Box sx={menuItemStyle} onClick={() => addColumn(option.value)}>
      <Box sx={{ display: "flex" }}>{option.icon}</Box>
      <Box sx={{ marginLeft: "5px" }}>{option.value}</Box>
    </Box>
  );
};

export const HeaderSettingsSidebarOption = memo(
  HeaderSettingsSidebarOptionInner
);
