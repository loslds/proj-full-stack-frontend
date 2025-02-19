
import { Routes, Route } from 'react-router-dom';
//import { MyTabCoresProvider } from './components/contexts/MyTabCoresContext';

import CadTabCores from './components/pages/CadTabCores';
import CadTabCoresInc from './components/pages/CadTabCoresInc';
import CadTabCoresAlt from './components/pages/CadTabCoresAlt';
import CadTabCoresExc from './components/pages/CadTabCoresExc';
import CadTabCoresList from './components/pages/CadTabCoresList';
import CadTabCoresPesq from './components/pages/CadTabCoresPesq';


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
