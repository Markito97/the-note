import { useReducer } from "react";
import { Table } from "./Table";
import { TableProvider } from "./tableContext";
import { initialTable, tableReducer } from "./tableReducer";

export const TablePage = () => {
  const [tableState, tableDispatch] = useReducer(tableReducer, initialTable);
  return (
    <TableProvider tableState={tableState} tableDispatch={tableDispatch}>
      <Table />
    </TableProvider>
  );
};
