
//import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Resgate from './components/pages/Resgate';
import Config from './components/pages/Config';

//import Resgatar from './components/pages/Resgatar';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resgate" element={<Resgate />} />
      <Route path="/config" element={<Config />} />
      {/* Adicione mais rotas aqui conforme necessário */}
    </Routes>
  );
};

export default AppRoutes;

