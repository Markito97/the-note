import { useContext } from "react";
import { TableContextValue } from "../tableContext";
import { Box } from "@mui/material";

export const TableFooter = () => {
  const [tableState] = useContext(TableContextValue);
  return <Box>Footer</Box>;
};
