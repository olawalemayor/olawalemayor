import React, { useState } from "react";
import "./App.css";
import Sidebar from "./UI/sidebar";
import Routing from "./UI/routing";
import AppContext from "./context/appContext";

function App() {
  const [showSideBar, setShowSideBar] = useState(true);

  const toggleMenu = () => {
    setShowSideBar(!showSideBar);
  };

  const handleSidebarClass = (): string => {
    const defultClass = "sidebar";
    let dynamicClass = showSideBar ? "" : "show-mobile-nav";
    return `${defultClass} ${dynamicClass}`;
  };

  return (
    <AppContext.Provider value={toggleMenu}>
      <div className="App">
        <div className={handleSidebarClass()}>
          <Sidebar />
        </div>

        <div className="main">
          <main>
            <Routing />
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
