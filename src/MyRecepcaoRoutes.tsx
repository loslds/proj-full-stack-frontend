
import { Routes, Route } from 'react-router-dom';
//import { MyRecepcaoProvider } from './components/contexts/MyRecepcaoContext';


import CadClientesInc from './components/pages/CadClientesInc';
import CadClientesAlt from './components/pages/CadClientesAlt';
import CadClientesExc from './components/pages/CadClientesExc';
import CadClientesList from './components/pages/CadClientesList';
import CadClientesPesq from './components/pages/CadClientesPesq';

import CadConsumidoresInc from './components/pages/CadConsumidoresInc';
import CadConsumidoresAlt from './components/pages/CadConsumidoresAlt';
import CadConsumidoresExc from './components/pages/CadConsumidoresExc';
import CadConsumidoresList from './components/pages/CadConsumidoresList';
import CadConsumidoresPesq from './components/pages/CadConsumidoresPesq';

import CadTabCoresList from './components/pages/CadTabCoresList';
import CadTabCoresPesq from './components/pages/CadTabCoresPesq';

import CadTabPrecosList from './components/pages/CadTabPrecosList';
import CadTabPrecosPesq from './components/pages/CadTabPrecosPesq';




// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyRecepcaoRoutes = () => {
  return (

    // <MyRecepcaoProvider>
      
      <Routes>
        <Route path="/cadclientesinc" element={ <CadClientesInc />} />
        <Route path="/cadclientesalt" element={ <CadClientesAlt />} />
        <Route path="/cadclientesexc" element={ <CadClientesExc />} />
        <Route path="/cadclienteslist" element={ <CadClientesList />} />
        <Route path="/cadclientesPesq" element={ <CadClientesPesq />} />

        <Route path="/cadconsumidoresinc" element={ <CadConsumidoresInc />} />
        <Route path="/cadconsumidoresalt" element={ <CadConsumidoresAlt />} />
        <Route path="/cadconsumidoresexc" element={ <CadConsumidoresExc />} />
        <Route path="/cadconsumidoreslist" element={ <CadConsumidoresList />} />
        <Route path="/cadconsumidoresPesq" element={ <CadConsumidoresPesq />} />

        <Route path="/cadtabcoreslist" element={ <CadTabCoresList />} />
        <Route path="/cadtabcoresPesq" element={ <CadTabCoresPesq />} />

        <Route path="/cadtabprecoslist" element={ <CadTabPrecosList />} />
        <Route path="/cadtabprecosPesq" element={ <CadTabPrecosPesq />} />
        

      </Routes>

    // </MyRecepcaoProvider>

  );
};
export default MyRecepcaoRoutes;
