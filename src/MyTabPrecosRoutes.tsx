
import { Routes, Route } from 'react-router-dom';
//import { MyTabPrecosProvider } from './components/contexts/MyTabPrecosContext';

import CadTabPrecos from './components/pages/cadtabprc/CadTabPrecos';
import CadTabPrecosInc from './components/pages/cadtabprc/CadTabPrecosInc';
import CadTabPrecosAlt from './components/pages/cadtabprc/CadTabPrecosAlt';
import CadTabPrecosExc from './components/pages/cadtabprc/CadTabPrecosExc';
import CadTabPrecosList from './components/pages/cadcor/CadTabCoresList';
import CadTabPrecosPesq from './components/pages/cadtabprc/CadTabPrecosPesq';


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
