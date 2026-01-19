
//
import React from "react";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Resgate from "./components/pages/Resgate";
import { CardDesenvolver } from "./cards/CardDesenvolver";

import Visitante from "./components/pages/modulos/Visitante";
import Recepcao from "./components/pages/modulos/Recepcao";
import Design from "./components/pages/modulos/Design";
import Producao from "./components/pages/modulos/Producao";
import Acabamento from "./components/pages/modulos/Acabamento";
import Administracao from "./components/pages/modulos/Administracao";
import Config from "./components/pages/modulos/Config";

export interface IRoute {
  path: string;
  element: React.ReactElement;
}

export const RouteList: IRoute[] = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/resgate", element: <Resgate /> },
  { path: "/cards/desenvolver", element: <CardDesenvolver /> },

  // compat opcional:
  // { path: "/config", element: <Navigate to="/modulos/config" replace /> },

  // módulos (caminho A)
  { path: "/modulos/visitante", element: <Visitante /> },
  { path: "/modulos/recepcao", element: <Recepcao /> },
  { path: "/modulos/design", element: <Design /> },
  { path: "/modulos/producao", element: <Producao /> },
  { path: "/modulos/acabamento", element: <Acabamento /> },
  { path: "/modulos/administracao", element: <Administracao /> },
  { path: "/modulos/config", element: <Config /> },
];
