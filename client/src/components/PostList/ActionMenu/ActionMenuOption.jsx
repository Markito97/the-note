import { MenuItem, Typography, Box } from "@mui/material";

export const ActionMenuOption = ({ option, id }) => {
  return (
    <MenuItem
      sx={{
        paddingLeft: 2,
        paddingRight: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
      onClick={() => option.handler(id)}
    >
      <Box>{option.icon}</Box>
      <Typography sx={{ fontSize: "12px" }}>{option.text}</Typography>
    </MenuItem>
  );
};
