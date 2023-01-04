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
      link: "Add to Faworites",
      icon: (
        <StarBorderOutlinedIcon
          onClick={() => dispatch({ type: "setFavoritePost" })}
        />
      ),
    },
    {
      link: "Duplicate",
      icon: <ContentCopyOutlinedIcon />,
    },
    {
      link: "Delete",
      icon: (
        <DeleteOutlineOutlinedIcon
          onClick={() => dispatch({ type: "removePost" })}
        />
      ),
    },
  ];

  return (
    <>
      <MoreHorizIcon
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {links.map((link, index) => (
          <MenuItem
            key={index + 1}
            sx={{
              width: 220,
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: 1,
              paddingRight: 1,
            }}
          >
            {link.icon}
            <Typography>{link.link}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
