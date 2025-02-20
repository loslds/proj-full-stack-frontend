
import { Routes, Route } from 'react-router-dom';
//import { MyRecepcaoProvider } from './components/contexts/MyRecepcaoContext';


import CadClientesInc from './components/pages/cadcli/CadClientesInc';
import CadClientesAlt from './components/pages/cadcli/CadClientesAlt';
import CadClientesExc from './components/pages/cadcli/CadClientesExc';
import CadClientesList from './components/pages/cadcli/CadClientesList';
import CadClientesPesq from './components/pages/cadcli/CadClientesPesq';

import CadConsumidoresInc from './components/pages/cadcon/CadConsumidoresInc';
import CadConsumidoresAlt from './components/pages/cadcon/CadConsumidoresAlt';
import CadConsumidoresExc from './components/pages/cadcon/CadConsumidoresExc';
import CadConsumidoresList from './components/pages/cadcon/CadConsumidoresList';
import CadConsumidoresPesq from './components/pages/cadcon/CadConsumidoresPesq';

import CadTabCoresList from './components/pages/cadcor/CadTabCoresList';
import CadTabCoresPesq from './components/pages/cadcor/CadTabCoresPesq';

import CadTabPrecosList from './components/pages/cadprc/CadTabPrecosList';
import CadTabPrecosPesq from './components/pages/cadprc/CadTabPrecosPesq';




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
