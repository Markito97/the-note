import { Box } from "@mui/material";

const menuItemStyle = {
  display: "flex",
  alignItems: "center",
  marginLeft: "14px",
  paddingTop: "5px",
};

export const MenuItem = ({ addColumn, item }) => {
  return (
    <Box sx={menuItemStyle} onClick={() => addColumn(item.text)}>
      <Box sx={{ display: "flex" }}>{item.icon}</Box>
      <Box sx={{ marginLeft: "5px" }}>{item.text}</Box>
    </Box>
  );
};
