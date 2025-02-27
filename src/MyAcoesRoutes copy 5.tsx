
import { Routes, Route } from 'react-router-dom';
//import { MyAcoesProvider } from './components/contexts/MyAcoesContext';

import CadAcoes from './components/pages/cadacao/CadAcoes';
import CadAcoesInc from './components/pages/cadacao/CadAcoesInc';
import CadAcoesAlt from './components/pages/cadacao/CadAcoesAlt';
import CadAcoesExc from './components/pages/cadacao/CadAcoesExc';
import CadAcoesList from './components/pages/cadacao/CadAcoesList';
import CadAcoesPesq from './components/pages/cadacao/CadAcoesPesq';


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
