import React, { createContext } from "react";

export const TableContextValue = createContext();
export const TableContextDispatch = createContext();

export const TableProvider = ({ tableState, tableDispatch, children }) => (
  <TableContextValue.Provider value={[tableState]}>
    <TableContextDispatch.Provider value={[tableDispatch]}>
      {children}
    </TableContextDispatch.Provider>
  </TableContextValue.Provider>
);
