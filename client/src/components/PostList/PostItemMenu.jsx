import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useContext } from "react";
import { ContextApp } from "../../store/store";
import { deletePost } from "../../store/action";
import { useTheme } from "@emotion/react";
import { ColorTokens } from "../../assets/themes/theme";
import { useEffect } from "react";

const postItemMenuStyle = {
  icon: {
    "&:hover": {
      bgcolor: "#858585",
      borderRadius: "3px",
    },
  },
};

export const PostItemMenu = ({ id, active }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, dispatch] = useContext(ContextApp);
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);
  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleDeletePost = () => {
    deletePost(id, dispatch);
  };

  postItemMenuStyle.icon.color = active
    ? `${colors.grey[100]}`
    : `${colors.primary[400]}`;

  return (
    <>
      <MoreHorizIcon
        sx={postItemMenuStyle.icon}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          sx={{
            width: 220,
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: 1,
            paddingRight: 1,
          }}
        >
          <DeleteOutlineOutlinedIcon onClick={handleDeletePost} />
          <Typography>Delete</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
