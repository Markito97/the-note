import { Box } from "@mui/system";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableContent } from "./TableContent/TableContent";
import { TableFooter } from "./TableFooter/TableFooter";

const tableStyle = {
  container: {
    display: "flex",
    width: "100%",
  },
  tableContainer: {
    width: "100%",
    paddingLeft: "96px",
    paddingRight: "96px",
    paddingBottom: "180px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
};

export const Table = () => {
  return (
    <Box sx={tableStyle.container}>
      <Box sx={tableStyle.tableContainer}>
        <TableHeader />
        <TableContent />
        <TableFooter />
      </Box>
    </Box>
  );
};
