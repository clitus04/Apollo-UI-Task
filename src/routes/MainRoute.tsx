import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainlayout from "../module/Mainlayout";
import { routes } from "./routes.data";

function MainRoute() {
  interface Item {
    path: string;
    name: string;
    Component: React.FC;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          {routes &&
            Array.isArray(routes) &&
            routes.map((item: Item, index: number) => {
              const { path, Component } = item;
              return <Route key={index} path={path} element={<Component />} />;
            })}
        </Route>
      </Routes>
    </Router>
  );
}

export default MainRoute;
