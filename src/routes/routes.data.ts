import Banking from "../module/DashboardModule/Banking";
import Dashboard from "../module/DashboardModule/Dashboard";
import List from "../module/AppsModule/BlogModule/List";
import Detail from "../module/AppsModule/BlogModule/Detail";
import Edit from "../module/AppsModule/BlogModule/Edit";
import Calendar from "../module/AppsModule/Calendar";
import Chat from "../module/AppsModule/Chat";
import Files from "../module/AppsModule/Files";
import Tasks from "../module/AppsModule/Tasks";

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
    Component: Files,
  },
  {
    path: "/apps/taskList",
    name: "Task List",
    Component: Tasks,
  },
];
