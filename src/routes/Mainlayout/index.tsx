import { Outlet } from "react-router-dom";
import "./index.scss";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useState } from "react";

function Mainlayout() {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
  return (
    <div className="app__layout">
      <div className={` sidebar ${!sidebarVisible && "closed"}`}>
        <Sidebar setSidebarVisible={setSidebarVisible} />
      </div>
      <div className="main__layout">
        <Header
          sidebarVisible={sidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />
        <div className="layout__container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Mainlayout;
