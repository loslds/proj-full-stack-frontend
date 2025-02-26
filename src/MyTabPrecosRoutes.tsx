
import { Routes, Route } from 'react-router-dom';
//import { MyTabPrecosProvider } from './components/contexts/MyTabPrecosContext';

import CadTabPrecos from './components/pages/tabela/preco/Precos';
import CadTabPrecosInc from './components/pages/tabela/preco/PrecosInc';
import CadTabPrecosAlt from './components/pages/tabela/preco/PrecosAlt';
import CadTabPrecosExc from './components/pages/tabela/preco/PrecosExc';
import CadTabPrecosList from './components/pages/cadcor/CadTabCoresList';
import CadTabPrecosPesq from './components/pages/tabela/preco/PrecosPesq';


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
