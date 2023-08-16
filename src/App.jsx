/* eslint-disable no-unused-vars */
import React from "react";

import Sidebar from "./components/routes/sidebar";
import MainContent from "./components/MainContent";
import "./index.css";

function App() {
  return (
    <div className="flex lg:flex-row md:flex-col flex-col w-full">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
