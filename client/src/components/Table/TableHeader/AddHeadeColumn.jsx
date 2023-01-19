import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { TableRightBar } from "./TableRightBar";
import { Box } from "@mui/material";

export const AddHeaderColumn = () => {
  const [isShowRightBar, setIsShowRightBar] = useState(false);

  const handleClose = () => {
    setIsShowRightBar(false);
  };

  return (
    <Box>
      <AddIcon
        onClick={() => {
          setIsShowRightBar((prev) => (prev = true));
        }}
        sx={{ width: 16, color: "#fff" }}
      />
      <TableRightBar active={isShowRightBar} handleClose={handleClose} />
    </Box>
  );
};
