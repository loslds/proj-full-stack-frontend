
import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Resgatar from './components/pages/Resgatar';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resgatar" element={<Resgatar />} />
      {/* Adicione mais rotas aqui conforme necessário */}
    </Routes>
  );
};

export default AppRoutes;

