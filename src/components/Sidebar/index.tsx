import "./index.scss";
import ApolloLogo from "../../assets/icons/Apollologo";
import { sidebarlinks } from "./Sidebar.data";
import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getNameFromPath } from "../../utility/getNameFromPath";
interface MenuProp {
  key: number;
  menu: any;
}

const Menu = ({ key, menu }: MenuProp) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = useCallback(
    (name: string) => {
      return name === getNameFromPath(location.pathname, sidebarlinks);
    },
    [location.pathname]
  );

  return (
    <div key={key} className="mb-3">
      <div className="flex cursor-pointer" onClick={() => navigate(menu?.path)}>
        <div className={`menu__link ${isActive(menu?.name) ? "active" : ""}`}>
          <i className={`pi ${menu?.icon}`}></i>
          <span className="menu__name">{menu?.name}</span>
        </div>
      </div>
    </div>
  );
};

const SubMenu = ({ key, menu }: MenuProp) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <div key={key} className="flex flex-column">
      <div
        className="w-full mb-3 flex justify-content-between align-items-center cursor-pointer"
        onClick={() => setIsOpened(!isOpened)}
      >
        <div>
          <i className={`pi ${menu?.icon}`}></i>
          <span className="menu__name">{menu?.name}</span>
        </div>
        <i className={`pi pi-angle-${isOpened ? "up" : "down"}`}></i>
      </div>
      <div
        className={`pl-2 sublinks overflow-hidden ${
          isOpened ? "expanded" : ""
        }`}
      >
        {menu.links.map((item: any, index: number) => {
          return item.links && Array.isArray(item.links) ? (
            <SubMenu key={index} menu={item} />
          ) : (
            <Menu key={index} menu={item} />
          );
        })}
      </div>
    </div>
  );
};

interface Props {
  setSidebarVisible: any;
}

function Sidebar(props: Props) {
  const { setSidebarVisible } = props;

  return (
    <div className="flex flex-column">
      <div className="h-6rem flex justify-content-center align-items-center relative">
        <ApolloLogo color={"#6366F1"} />
        <span className="close__icon" onClick={() => setSidebarVisible(false)}>
          <i className="pi pi-times"></i>
        </span>
      </div>
      <div className="menu__links__container">
        {sidebarlinks &&
          Array.isArray(sidebarlinks) &&
          sidebarlinks.map((item: any, index: number) => {
            return (
              <div key={index}>
                <div className="menu__title">{item?.title}</div>
                <div className="flex flex-column">
                  {item.links &&
                    Array.isArray(item.links) &&
                    item.links.map((item1: any, index1: number) => {
                      return item1.links && Array.isArray(item1.links) ? (
                        <SubMenu key={index1} menu={item1} />
                      ) : (
                        <Menu key={index1} menu={item1} />
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Sidebar;
