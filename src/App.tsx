 
//C:\repository\proj-full-stack-frontend\src\App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Global from './styles/Global';
import { AcessoProvider } from './components/contexts/AcessoProvider';
import AppRoutes from './AppRoutes';

// ✅ overlay global da chave-master
import { ChaveMasterOverlay } from './components/ChaveMasterOverlay';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Global />
      <AcessoProvider>
        <AppRoutes />
        {/* ✅ fica fora da Home, mas dentro do provider */}
        <ChaveMasterOverlay />
      </AcessoProvider>
    </BrowserRouter>
  );
};

export default App;


