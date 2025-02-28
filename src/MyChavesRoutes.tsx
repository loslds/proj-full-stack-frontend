import { Routes, Route } from 'react-router-dom';
import CadChaves from './components/pages/cadchave/CadChaves';
import CadChavesInc from './components/pages/cadchave/CadChavesInc';
import CadChavesAlt from './components/pages/cadchave/CadChavesAlt';
import CadChavesExc from './components/pages/cadchave/CadChavesExc';
import CadChavesList from './components/pages/cadchave/CadChavesList';
import CadChavesPesq from './components/pages/cadchave/CadChavesPesq';
//import { MyChavesProvider } from './components/contexts/MyChavesContext';

// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyChavesRoutes = () => {
  return (

    // <MyChavesProvider>
      
      <Routes>
        <Route path="./components/pages/cadChave/cadChaves" element={ <CadChaves />} />
        <Route path="./components/pages/cadChave/cadcdastrosinc" element={ <CadChavesInc />} />
        <Route path="./components/pages/cadChave/cadChavesalt" element={ <CadChavesAlt />} />
        <Route path="./components/pages/cadChave/cadChavesexc" element={ <CadChavesExc />} />
        <Route path="./components/pages/cadChave/cadChaveslist" element={ <CadChavesList />} />
        <Route path="./components/pages/cadChave/cadChavespesq" element={ <CadChavesPesq />} />
      </Routes>

    // </MyChavesProvider>

  );
};
export default MyChavesRoutes;
