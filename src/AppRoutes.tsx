
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

import { CardDesenvolver } from './cards/CardDesenvolver';
//import Resgate from './components/pages/Resgate';
//import MySQLRoutes from './MySQLRoutes';                 // Importando as rotas do MySQL
import MyModulosRoutes from './MyModulosRoutes';           // Importando as rotas do MyModulos


import MyEmpresasRoutes from './MyEmpresasRoutes';         // Importando as rotas do MyClientes

//import MyClientesRoutes from './MyClientesRoutes';         // Importando as rotas do MyClientes
//import MyConsumidoresRoutes from './MyConsumidoresRoutes'; // Importando as rotas do MyConsumidores
//import MyOSevicosRoutes from './MyOServicosRoutes';        // Importando as rotas do MyOSevicos
//import MyTabCoresRoutes from './MyTabCoresRoutes';         // Importando as rotas do MyTabCores
//import MyTabPrecosRoutes from './MyTabPrecosRoutes';       // Importando as rotas do MyTabPrecos
//import MyRecepcaoRoutes from './MyRecepcaoRoutes';         // Importando as rotas do MyRecepcao

const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='./cards/CardDesenvolver' element={<CardDesenvolver/>} />
      {/* <Route path="/resgate" element={<Resgate />} /> */}
      {/* Rotas de Empresas envolvidas pelo MyEmpresasProvider */}
      <Route path="/*" element={<MyModulosRoutes />} />

      {/* Rotas de Empresas envolvidas pelo MyEmpresasProvider */}
      <Route path="/*" element={<MyEmpresasRoutes />} />

      {/* Rotas do Clientes envolvidas pelo MyClientesProvider */}
      {/* <Route path="/*" element={<MyClientesRoutes />} /> */}
      {/* Rotas do Consumidores envolvidas pelo MyConsumidoresProvider */}
      {/* <Route path="/*" element={<MyConsumidoresRoutes />} /> */}
      {/* Rotas do OServicos envolvidas pelo MyOServicosProvider */}
      {/* <Route path="/*" element={<MyOSevicosRoutes />} /> */}
      {/* Rotas do TabCores envolvidas pelo MyTabCoresProvider */}
      {/* <Route path="/*" element={<MyTabCoresRoutes />} /> */}
      {/* Rotas do TabPrecos envolvidas pelo MyPrecosProvider */}
      {/* <Route path="/*" element={<MyTabPrecosRoutes />} /> */}


      {/* rotas por setores */}
      {/* <Route path="/*" element={<MyRecepcaoRoutes />} /> */}

      {/* 🚨 Adicionando a rota do login MySQL separada 
      <Route path="/mysqlconfig" element={<MysqlConfig />} /> */}


      {/* Rotas do MySQL envolvidas pelo MySQLProvider */}
      {/* <Route path="/*" element={<MySQLRoutes />} /> */}

    </Routes>
  );
};

export default AppRoutes;

