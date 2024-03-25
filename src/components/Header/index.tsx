import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.scss";
import BreadCrumb from "../BreadCrumb";
import { InputText } from "primereact/inputtext";
import Profile from "../../assets/tony.jpg";

type Prop = {
  sidebarVisible: boolean;
  setSidebarVisible: any;
};

function Header({ sidebarVisible, setSidebarVisible }: Prop) {
  const [items, setItems] = useState([
    { label: "E-Commerce Dashboard", url: "/" },
  ]);

  const location = useLocation();

  useEffect(() => {
    const splittedItems = location.pathname.split("/");
    splittedItems.shift();
    if (location.pathname === "/") {
      setItems([{ label: "E-Commerce Dashboard", url: "/" }]);
    } else {
      const items = splittedItems.map((item: any) => ({
        label: item,
        url: `/${item}`,
      }));
      setItems(items);
    }
  }, [location.pathname]);

  return (
    <div className="header h-6rem flex align-items-center justify-content-between sticky top-0">
      <div className="flex align-items-center">
        <span className="sidebar__toggler">
          <i
            className="pi pi-bars"
            onClick={() => setSidebarVisible(!sidebarVisible)}
          ></i>
        </span>
        <BreadCrumb items={items} seperator={"/"} />
      </div>
      <div className="flex align-items-center justify-content-around w-4">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText placeholder="Search" />
        </span>
        <i className="pi pi-cog"></i>
        <img src={Profile} alt="" className="h-2rem w-2rem border-circle" />
      </div>
    </div>
  );
}

export default Header;
