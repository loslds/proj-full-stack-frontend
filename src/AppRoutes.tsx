
//import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Resgate from './components/pages/Resgate';
import Config from './components/pages/Config';
import Recepcao from './components/pages/Recepcao';

//import Resgatar from './components/pages/Resgatar';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resgate" element={<Resgate />} />
      <Route path="/config" element={<Config />} />
      <Route path="/recepcao" element={<Recepcao />} />
      {/* Adicione mais rotas aqui conforme necessário */}
    </Routes>
  );
};

export default AppRoutes;

