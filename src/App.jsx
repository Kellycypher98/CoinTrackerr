/* eslint-disable no-unused-vars */
import React from "react";
import { AppContextProvider } from "./contexts/AppContext";
import Sidebar from "./components/routes/sidebar";
import MainContent from "./components/MainContent";
import Login from "./components/Auth/Login";
import "./index.css";

function App() {
 const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return (
    <AppContextProvider>
      
      <div className="flex  lg:flex-row md:flex-col flex-col w-full">
        
         {!isAuthenticated ? (
          <Login setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <>
            <Sidebar />
            <MainContent />
          </>
        )}
      
      </div>
      
    </AppContextProvider>
  );
}

export default App;
