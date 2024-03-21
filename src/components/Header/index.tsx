import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.scss";
import { BreadCrumb } from "primereact/breadcrumb";
import { InputText } from "primereact/inputtext";
import ProfileImg from "../../assets/profile.jpg";

type Prop = {
  sidebarVisible: boolean;
  setSidebarVisible: any;
};

function Header({ sidebarVisible, setSidebarVisible }: Prop) {
  const [items, setItems] = useState([
    { label: "E-Commerce Dashboard", url: "/", seperator: null },
  ]);

  const location = useLocation();

  useEffect(() => {
    const splittedItems = location.pathname.split("/");
  }, [location.pathname]);

  return (
    <div className="header h-6rem flex align-items-center justify-content-between">
      <div className="flex align-items-center">
        <span className="sidebar__toggler">
          <i
            className="pi pi-bars"
            onClick={() => setSidebarVisible(!sidebarVisible)}
          ></i>
        </span>
        <BreadCrumb
          model={items}
          separatorIcon={<span className="mx-2 text-xs">/</span>}
        />
      </div>
      <div className="flex align-items-center justify-content-around w-4">
        <span className="search">
          <i className="pi pi-search" />
          <InputText placeholder="Search" />
        </span>
        <i className="pi pi-cog"></i>
        <img src={ProfileImg} alt="" className="h-2rem w-2rem border-circle" />
      </div>
    </div>
  );
}

export default Header;
