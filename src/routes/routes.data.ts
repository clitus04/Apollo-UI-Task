import Banking from "../module/Banking";
import Dashboard from "../module/Dashboard";
import List from "../module/List";
import Detail from "../module/Detail";
import Edit from "../module/Edit";

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
];
