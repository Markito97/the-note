import {
  Button,
  Typography,
  useTheme,
  Box,
  Modal,
  TextField,
} from "@mui/material";
import { ColorTokens } from "../../assets/themes/theme";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";

const seacrhFormStyle = {
  textTransform: "none",
  paddingLeft: 0,
  paddingRight: 0,
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  fontSize: 16,
  marginBottom: 1,
  text: {
    paddingLeft: 1,
    fontSize: "inherit",
  },
  modal: {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchTextField: {
    width: "100%",
    paddingLeft: 1,
  },
};

export const SeacrhForm = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const colors = ColorTokens(theme.palette.mode);

  seacrhFormStyle.color = `${colors.grey[100]}`;
  seacrhFormStyle.modal.bgcolor = `${colors.primary[400]}`;
  seacrhFormStyle.modal.color = `${colors.grey[100]}`;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen} sx={seacrhFormStyle} variant="text">
        <SearchOutlinedIcon />
        <Typography sx={seacrhFormStyle.text}>Search</Typography>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={seacrhFormStyle.modal}>
          <SearchOutlinedIcon />
          <TextField
            sx={seacrhFormStyle.searchTextField}
            placeholder="Search Mark..."
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};
