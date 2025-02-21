
import { Routes, Route } from 'react-router-dom';
//import { MyConsumidoresProvider } from './components/contexts/MyConsumidoresContext';

import CadConsumidores from './components/pages/cadconsumidor/CadConsumidores';
import CadConsumidoresInc from './components/pages/cadconsumidor/CadConsumidoresInc';
import CadConsumidoresAlt from './components/pages/cadconsumidor/CadConsumidoresAlt';
import CadConsumidoresExc from './components/pages/cadconsumidor/CadConsumidoresExc';
import CadConsumidoresList from './components/pages/cadconsumidor/CadConsumidoresList';
import CadConsumidoresPesq from './components/pages/cadconsumidor/CadConsumidoresPesq';


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
