
import { Routes, Route } from 'react-router-dom';
//import { MyTabPrecosProvider } from './components/contexts/MyTabPrecosContext';

import CadTabPrecos from './components/pages/cadprc/CadTabPrecos';
import CadTabPrecosInc from './components/pages/cadprc/CadTabPrecosInc';
import CadTabPrecosAlt from './components/pages/cadprc/CadTabPrecosAlt';
import CadTabPrecosExc from './components/pages/cadprc/CadTabPrecosExc';
import CadTabPrecosList from './components/pages/cadcor/CadTabCoresList';
import CadTabPrecosPesq from './components/pages/cadprc/CadTabPrecosPesq';


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
