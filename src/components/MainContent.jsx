import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./../Pages/Dashboard";
import Transaction from "./../pages/Transaction";
import Account from "./../pages/Account";
import Report from "./../pages/Report";
import Budget from "./../pages/Budget";
import "./../index.css";

const MainContent = () => {
  return (
    <div className=" w-full">
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} index />{" "}
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Budget" element={<Budget />} />
      </Routes>
    </div>
  );
};

export default MainContent;
