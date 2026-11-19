
//
import React from "react";

import Home from "./components/pages/Home";
import HomeNova from "./components/pages/HomeNova";
//import Login from "./components/pages/Login";
//import Resgate from "./components/pages/Resgate";
import { ThemeProvider } from "styled-components";
import light from "@/themes/light";
import { CardDesenvolver } from "./cards/CardDesenvolver";

import Visitante from "./components/pages/modulos/Visitante";
//import Recepcao from "./components/pages/modulos/Recepcao";
//import Design from "./components/pages/modulos/Design";
//import Producao from "./components/pages/modulos/Producao";
//import Acabamento from "./components/pages/modulos/Acabamento";
//import Administracao from "./components/pages/modulos/Administracao";
//import { Expedicao } from "./components/pages/modulos";
import Config from "./components/pages/modulos/Config";

export interface IRoute {
  path: string;
  element: React.ReactElement;
}

export const RouteList: IRoute[] = [
  { path: "/", element: <Home /> },
  // Home piloto da nova cara (branch nova-ui); a Home antiga segue em "/".
  { path: "/nova-home", element: <HomeNova /> },
  //{ path: "/login", element: <Login /> },
  //{ path: "/resgate", element: <Resgate /> },
  // O card usa theme.colors.*; aberto direto pela rota precisa do ThemeProvider.
  { path: "/cards/desenvolver", element: <ThemeProvider theme={light}><CardDesenvolver /></ThemeProvider> },

  // compat opcional:
  // { path: "/config", element: <Navigate to="/modulos/config" replace /> },

  // módulos (caminho A)
  { path: "/modulos/visitante", element: <Visitante /> },
  //{ path: "/modulos/recepcao", element: <Recepcao /> },
  //{ path: "/modulos/design", element: <Design /> },
  //{ path: "/modulos/producao", element: <Producao /> },
  //{ path: "/modulos/acabamento", element: <Acabamento /> },
  //{ path: "/modulos/expedicao", element: <Expedicao /> },
  //{ path: "/modulos/administracao", element: <Administracao /> },

  { path: "/modulos/config", element: <Config /> },
];
