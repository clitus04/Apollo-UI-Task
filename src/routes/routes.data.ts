import Banking from "../module/Banking";
import Dashboard from "../module/Dashboard";
import List from "../module/List";
import Detail from "../module/Detail";
import Edit from "../module/Edit";
import Calendar from "../module/Calendar";
import Chat from "../module/Chat";
import LandingScreen from "../module/Files/LandingScreen";

export const routes = [
  {
    path: "/",
    name: "E-Commerce Dashboard",
    Component: Dashboard,
  },
  {
    path: "/dashboard/banking",
    name: "banking",
    Component: Banking,
  },
  {
    path: "/apps/blog/list",
    name: "list",
    Component: List,
  },
  {
    path: "/apps/blog/detail",
    name: "detail",
    Component: Detail,
  },
  {
    path: "/apps/blog/edit",
    name: "edit",
    Component: Edit,
  },
  {
    path: "/apps/calendar",
    name: "calendar",
    Component: Calendar,
  },
  {
    path: "/apps/chat",
    name: "chat",
    Component: Chat,
  },
  {
    path: "/apps/files",
    name: "files",
    Component: LandingScreen,
  },
];
