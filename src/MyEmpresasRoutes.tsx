

import { Routes, Route } from 'react-router-dom';
//import { MyEmpresasProvider } from './components/contexts/MyEmpresasContext';

import CadEmpresas from './components/pages/cadempresa/CadEmpresas';
import CadEmpresasInc from './components/pages/cadempresa/CadEmpresasInc';
import CadEmpresasAlt from './components/pages/cadempresa/CadEmpresasAlt';
import CadEmpresasExc from './components/pages/cadempresa/CadEmpresasExc';
import CadEmpresasList from './components/pages/cadempresa/CadEmpresasList';
import CadEmpresasPesq from './components/pages/cadempresa/CadEmpresasPesq';

const MyEmpresasRoutes = () => {
  return (

    // <MyEmpresasProvider>
      
      <Routes>
        <Route path="/cadempresas" element={ <CadEmpresas />} />
        <Route path="/cadempresasinc" element={ <CadEmpresasInc />} />
        <Route path="/cadempresasalt" element={ <CadEmpresasAlt />} />
        <Route path="/cadempresasexc" element={ <CadEmpresasExc />} />
        <Route path="/cadempresaslist" element={ <CadEmpresasList />} />
        <Route path="/cadempresaslist" element={ <CadEmpresasPesq />} />
      </Routes>

    // </MyEmpresasProvider>

  );
};
export default MyEmpresasRoutes;

