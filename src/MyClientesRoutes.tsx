
import { Routes, Route } from 'react-router-dom';
//import { MyClientesProvider } from './components/contexts/MyClientesContext';

import CadClientes from './components/pages/cadcliente/CadClientes';
import CadClientesInc from './components/pages/cadcliente/CadClientesInc';
import CadClientesAlt from './components/pages/cadcliente/CadClientesAlt';
import CadClientesExc from './components/pages/cadcliente/CadClientesExc';
import CadClientesList from './components/pages/cadcliente/CadClientesList';
import CadClientesPesq from './components/pages/cadcliente/CadClientesPesq';


// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyClientesRoutes = () => {
  return (

    // <MyClientesProvider>
      
      <Routes>
        <Route path="/cadclientes" element={ <CadClientes />} />
        <Route path="/cadclientesinc" element={ <CadClientesInc />} />
        <Route path="/cadclientesalt" element={ <CadClientesAlt />} />
        <Route path="/cadclientesexc" element={ <CadClientesExc />} />
        <Route path="/cadclienteslist" element={ <CadClientesList />} />
        <Route path="/cadclienteslist" element={ <CadClientesPesq />} />
      </Routes>

    // </MyClientesProvider>

  );
};
export default MyClientesRoutes;
