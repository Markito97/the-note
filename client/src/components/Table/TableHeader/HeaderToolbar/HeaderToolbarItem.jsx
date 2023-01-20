import { MenuItem, Typography } from "@mui/material";

export const HeaderCellMenuItem = ({ prop }) => {
  return (
    <MenuItem>
      <Typography>{prop.prop}</Typography>
    </MenuItem>
  );
};
