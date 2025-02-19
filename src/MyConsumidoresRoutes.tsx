
import { Routes, Route } from 'react-router-dom';
//import { MyConsumidoresProvider } from './components/contexts/MyConsumidoresContext';

import CadConsumidores from './components/pages/CadConsumidores';
import CadConsumidoresInc from './components/pages/CadConsumidoresInc';
import CadConsumidoresAlt from './components/pages/CadConsumidoresAlt';
import CadConsumidoresExc from './components/pages/CadConsumidoresExc';
import CadConsumidoresList from './components/pages/CadConsumidoresList';
import CadConsumidoresPesq from './components/pages/CadConsumidoresPesq';


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
