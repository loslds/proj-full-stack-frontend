
import { Routes, Route } from 'react-router-dom';
//import { MyTabPrecosProvider } from './components/contexts/MyTabPrecosContext';

import CadTabPrecos from './components/pages/CadTabPrecos';
import CadTabPrecosInc from './components/pages/CadTabPrecosInc';
import CadTabPrecosAlt from './components/pages/CadTabPrecosAlt';
import CadTabPrecosExc from './components/pages/CadTabPrecosExc';
import CadTabPrecosList from './components/pages/CadTabCoresList';
import CadTabPrecosPesq from './components/pages/CadTabPrecosPesq';


// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyTabPrecosRoutes = () => {
  return (

    // <MyTabPrecosProvider>
      
      <Routes>
        <Route path="/cadtabcores" element={ <CadTabPrecos />} />
        <Route path="/cadtabcoresinc" element={ <CadTabPrecosInc />} />
        <Route path="/cadtabcoresalt" element={ <CadTabPrecosAlt />} />
        <Route path="/cadtabcoresexc" element={ <CadTabPrecosExc />} />
        <Route path="/cadtabcoreslist" element={ <CadTabPrecosList />} />
        <Route path="/cadtabcoresPesq" element={ <CadTabPrecosPesq />} />
      </Routes>

    // </MyTabPrecosProvider>

  );
};
export default MyTabPrecosRoutes;
