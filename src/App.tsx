
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Global from './styles/Global';
import { AcessoProvider } from './components/contexts/LoginProvider';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Global />
      <AcessoProvider>
        <AppRoutes />
      </AcessoProvider>
    </BrowserRouter>
  );
};

export default App;
 