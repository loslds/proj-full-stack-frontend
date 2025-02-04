
import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import MysqlConfig from './components/pages/MysqlConfig';

import Login from './components/pages/Login';
import Resgate from './components/pages/Resgate';


import Recepcao from './components/pages/Recepcao';

import MySQLRoutes from './MySQLRoutes'; // Importando as rotas do MySQL

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resgate" element={<Resgate />} />
      
      {/* 🚨 Adicionando a rota do login MySQL separada */}
      <Route path="/mysqlconfig" element={<MysqlConfig />} /> 

      <Route path="/recepcao" element={<Recepcao />} />

      {/* Rotas do MySQL envolvidas pelo MySQLProvider */}
      <Route path="/*" element={<MySQLRoutes />} />
    </Routes>
  );
};

export default AppRoutes;
