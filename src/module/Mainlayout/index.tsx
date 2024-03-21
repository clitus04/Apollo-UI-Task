import { Outlet } from "react-router-dom";
import "./index.scss";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useState } from "react";

function Mainlayout() {
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
  return (
    <div className="app__layout grid">
      <div
        className={`col-4 md:col-3 lg:col-2 sidebar__${
          sidebarVisible ? "expanded" : "closed"
        }`}
      >
        <Sidebar />
      </div>
      <div
        className={`layout__container ${
          sidebarVisible ? "col-8 md:col-9 lg:col-10" : "col-12"
        }`}
      >
        <Header
          sidebarVisible={sidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />
        <Outlet />
      </div>
    </div>
  );
}

export default Mainlayout;
