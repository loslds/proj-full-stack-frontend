
import { Routes, Route } from 'react-router-dom';
//import { MyConsumidoresProvider } from './components/contexts/MyConsumidoresContext';

import CadConsumidores from './components/pages/cadcon/CadConsumidores';
import CadConsumidoresInc from './components/pages/cadcon/CadConsumidoresInc';
import CadConsumidoresAlt from './components/pages/cadcon/CadConsumidoresAlt';
import CadConsumidoresExc from './components/pages/cadcon/CadConsumidoresExc';
import CadConsumidoresList from './components/pages/cadcon/CadConsumidoresList';
import CadConsumidoresPesq from './components/pages/cadcon/CadConsumidoresPesq';


// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyConsumidoresRoutes = () => {
  return (

    // <MyConsumidoresProvider>
      
      <Routes>
        <Route path="/cadconsumidores" element={ <CadConsumidores />} />
        <Route path="/cadconsumidoresinc" element={ <CadConsumidoresInc />} />
        <Route path="/cadconsumidoresalt" element={ <CadConsumidoresAlt />} />
        <Route path="/cadconsumidoresexc" element={ <CadConsumidoresExc />} />
        <Route path="/cadconsumidoreslist" element={ <CadConsumidoresList />} />
        <Route path="/cadconsumidoresPesq" element={ <CadConsumidoresPesq />} />
      </Routes>

    // </MyConsumidoresProvider>

  );
};
export default MyConsumidoresRoutes;
