import { useState } from "react";
import { Menu, Box } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import { ActionMenuOption } from "./ActionMenuOption";

const postItemMenuStyle = {
  icon: {
    "&:hover": {
      bgcolor: "#858585",
      borderRadius: "3px",
    },
  },
};

const handleAddToFavorite = (id) => {};
const handleDuplicate = (id) => {};
const handleDeletePost = (id) => {
  console.log(id);
};

export const actionMenuOptions = [
  {
    icon: <StarBorderOutlinedIcon />,
    handler: handleAddToFavorite,
    text: "Add to Favorite",
  },
  {
    icon: <ContentCopyOutlinedIcon />,
    handler: handleDuplicate,
    text: "Duplicate",
  },
  {
    icon: <DeleteOutlineOutlinedIcon />,
    handler: handleDeletePost,
    text: "Delete",
  },
];

export const ActionMenu = ({ id, active }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <Box>
      <MoreHorizIcon
        sx={postItemMenuStyle.icon}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {actionMenuOptions.map((option, index) => (
          <ActionMenuOption id={id} key={option.text + index} option={option} />
        ))}
      </Menu>
    </Box>
  );
};
