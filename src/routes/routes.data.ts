import Banking from "../module/Banking";
import Dashboard from "../module/Dashboard";
import List from "../module/List";

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
];
