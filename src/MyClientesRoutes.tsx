
import { Routes, Route } from 'react-router-dom';
//import { MyClientesProvider } from './components/contexts/MyClientesContext';

import CadClientes from './components/pages/CadClientes';
import CadClientesInc from './components/pages/CadClientesInc';
import CadClientesAlt from './components/pages/CadClientesAlt';
import CadClientesExc from './components/pages/CadClientesExc';
import CadClientesList from './components/pages/CadClientesList';
import CadClientesPesq from './components/pages/CadClientesPesq';


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
