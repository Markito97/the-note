import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Box } from "@mui/system";

export const FavoritesListPopupMenu = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <Box>
      <MoreHorizIcon
        sx={{ width: 24, height: 24 }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {["Remove from Favorites", "Some handler", "Some handler"].map(
          (link, index) => (
            <MenuItem
              key={index + 1}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: 1,
                paddingRight: 1,
              }}
            >
              <StarBorderOutlinedIcon sx={{ width: 22, height: 22 }} />
              <Typography sx={{ fontSize: 10, paddingLeft: 2 }}>
                {link}
              </Typography>
            </MenuItem>
          )
        )}
      </Menu>
    </Box>
  );
};
