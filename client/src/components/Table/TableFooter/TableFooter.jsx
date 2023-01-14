import { useContext } from "react";
import { TableContextValue } from "../tableContext";

export const TableFooter = () => {
  const [tableState] = useContext(TableContextValue);
  return <Box>Footer</Box>;
};
