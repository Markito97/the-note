import { Box } from "@mui/material";

const menuItemStyle = {
  display: "flex",
  marginLeft: "14px",
};

export const MenuItem = ({ addColumn, item }) => {
  return (
    <Box sx={menuItemStyle} onClick={() => addColumn(item.text)}>
      <Box>{item.icon}</Box>
      <Box>{item.text}</Box>
    </Box>
  );
};
