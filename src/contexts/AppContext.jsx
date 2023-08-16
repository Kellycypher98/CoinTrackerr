import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [currentBalance, setCurrentBalance] = useState(4000);
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  const contextValue = {
    transactions,
    addTransaction,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
