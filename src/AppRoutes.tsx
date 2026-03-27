
import React from "react";
import { Routes, Route } from "react-router-dom";
import { RouteList } from "./routeList";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {RouteList.map((r) => (
        <Route key={r.path} path={r.path} element={r.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;


