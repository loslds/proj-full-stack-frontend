
import { Routes, Route } from 'react-router-dom';
//import { MyTabCoresProvider } from './components/contexts/MyTabCoresContext';

import CadTabCores from './components/pages/cadcor/CadTabCores';
import CadTabCoresInc from './components/pages/cadcor/CadTabCoresInc';
import CadTabCoresAlt from './components/pages/cadcor/CadTabCoresAlt';
import CadTabCoresExc from './components/pages/cadcor/CadTabCoresExc';
import CadTabCoresList from './components/pages/cadcor/CadTabCoresList';
import CadTabCoresPesq from './components/pages/cadcor/CadTabCoresPesq';


// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyTabCoresRoutes = () => {
  return (

    // <MyTabCoresProvider>
      
      <Routes>
        <Route path="/cadtabcores" element={ <CadTabCores />} />
        <Route path="/cadtabcoresinc" element={ <CadTabCoresInc />} />
        <Route path="/cadtabcoresalt" element={ <CadTabCoresAlt />} />
        <Route path="/cadtabcoresexc" element={ <CadTabCoresExc />} />
        <Route path="/cadtabcoreslist" element={ <CadTabCoresList />} />
        <Route path="/cadtabcoresPesq" element={ <CadTabCoresPesq />} />
      </Routes>

    // </MyTabCoresProvider>

  );
};
export default MyTabCoresRoutes;
