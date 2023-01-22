import { Box } from "@mui/material";

const headerSettingsSidebarTypeStyles = {
  marginTop: "6px",
  paddingLeft: "14px",
};

export const HeaderSettingsSidebarType = () => {
  return (
    <Box sx={headerSettingsSidebarTypeStyles}>
      <Box component="span">Type</Box>
    </Box>
  );
};
