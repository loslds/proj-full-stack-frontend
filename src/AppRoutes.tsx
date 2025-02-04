
//import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Resgate from './components/pages/Resgate';
import Config from './components/pages/Config';
import MysqlConfig from './components/pages/MysqlConfig';
//import CheckDB from './components/pages/CheckDB';
import BackupDB from './components/pages/BackupDB';
import RestoreDB from './components/pages/RestoreDB';
import ExplorerDB from './components/pages/ExplorerDB';

import Recepcao from './components/pages/Recepcao';

//import Resgatar from './components/pages/Resgatar';


const defaultConfig = {
  host: '',
  user: '',
  password: '',
  database: ''
};
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resgate" element={<Resgate />} />
      <Route path="/config" element={<Config />} />
      <Route path="/config/by-mysql" element={<MysqlConfig />} />
      {/* <Route path="/checkdb"  element={<CheckDB  config={defaultConfig} />} /> */}
      <Route path="/backupdb" element={<BackupDB />} />  
      <Route path="/restoredb" element={<RestoreDB />} />  
      <Route path="/explorerdb" element={<ExplorerDB />} />  
      <Route path="/recepcao" element={<Recepcao />} />
      {/* Adicione mais rotas aqui conforme necessário */}
    </Routes>
  );
};

export default AppRoutes;

