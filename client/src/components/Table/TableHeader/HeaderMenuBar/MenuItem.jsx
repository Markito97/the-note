import { Box } from "@mui/material";

export const MenuItem = ({ item }) => {
  return (
    <Box>
      <Box
      // sx={tableRightBarStyle.headerMenuItem}
      // onClick={() => addColumn(item.text)}
      >
        <Box>{item.icon}</Box>
        <Box>{item.text}</Box>
      </Box>
    </Box>
  );
};
