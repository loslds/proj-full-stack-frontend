
import { Routes, Route } from 'react-router-dom';
//import { MyAcoesProvider } from './components/contexts/MyAcoesContext';

import CadAcoes from './components/pages/acaoes/CadAcoes';
import CadAcoesInc from './components/pages/acaoes/CadAcoesInc';
import CadAcoesAlt from './components/pages/acaoes/CadAcoesAlt';
import CadAcoesExc from './components/pages/acaoes/CadAcoesExc';
import CadAcoesList from './components/pages/acaoes/CadAcoesList';
import CadAcoesPesq from './components/pages/acaoes/CadAcoesPesq';


// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyAcoesRoutes = () => {
  return (

    // <MyAcoesProvider>
      
      <Routes>
        <Route path="./components/pages/cadacao/cadacoes" element={ <CadAcoes />} />
        <Route path="./components/pages/cadacao/cadacoesinc" element={ <CadAcoesInc />} />
        <Route path="./components/pages/cadacao/cadacoesalt" element={ <CadAcoesAlt />} />
        <Route path="./components/pages/cadacao/cadacoesexc" element={ <CadAcoesExc />} />
        <Route path="./components/pages/cadacao/cadacoeslist" element={ <CadAcoesList />} />
        <Route path="./components/pages/cadacao/cadacoespesq" element={ <CadAcoesPesq />} />
      </Routes>

    // </MyAcoesProvider>

  );
};
export default MyAcoesRoutes;
