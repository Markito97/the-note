import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";
import { Menu, MenuItem, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { useContext } from "react";
import { ContextApp } from "../../store/store";
export const PostListPopupMenu = ({ removePost, setFavortitePost }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, dispatch] = useContext(ContextApp);

  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setOpen(false);
    setAnchorEl(null);
  };

  const links = [
    {
      link: "Delete",
      icon: (
        <DeleteOutlineOutlinedIcon
          onClick={() => dispatch({ type: "removePost" })}
          sx={{ width: 22, height: 22 }}
        />
      ),
    },
    {
      link: "Add to Faworites",
      icon: (
        <StarBorderOutlinedIcon
          onClick={() => dispatch({ type: "setFavoritePost" })}
          sx={{ width: 22, height: 22 }}
        />
      ),
    },
    {
      link: "Duplicate",
      icon: <ContentCopyOutlinedIcon sx={{ width: 22, height: 22 }} />,
    },
  ];

  return (
    <>
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
        {links.map((link, index) => (
          <MenuItem
            key={index + 1}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: 1,
              paddingRight: 1,
            }}
          >
            {link.icon}
            <Typography sx={{ fontSize: 10, paddingLeft: 2 }}>
              {link.link}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
