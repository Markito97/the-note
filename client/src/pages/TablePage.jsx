import { useEffect, useReducer } from "react";
import { Table } from "../components/Table/Table";
import { TableProvider } from "../components/Table/tableContext";
import { initialTable, tableReducer } from "../components/Table/tableReducer";
import { getTable } from "../store/action";

export const TablePage = ({ isTable, id }) => {
  const [tableState, tableDispatch] = useReducer(tableReducer, initialTable);

  useEffect(() => {
    if (isTable) {
      getTable(id)
        .then((response) => response.json())
        .then((table) =>
          tableDispatch({ type: "createTable", payload: table })
        );
    }
  }, [isTable, id]);

  return (
    <TableProvider tableState={tableState} tableDispatch={tableDispatch}>
      <Table />
    </TableProvider>
  );
};
