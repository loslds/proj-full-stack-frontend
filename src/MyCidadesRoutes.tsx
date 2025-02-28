import { Routes, Route } from 'react-router-dom';
import CadCidades from './components/pages/cadcidade/CadCidades';
import CadCidadesInc from './components/pages/cadcidade/CadCidadesInc';
import CadCidadesAlt from './components/pages/cadcidade/CadCidadesAlt';
import CadCidadesExc from './components/pages/cadcidade/CadCidadesExc';
import CadCidadesList from './components/pages/cadcidade/CadCidadesList';
import CadCidadesPesq from './components/pages/cadcidade/CadCidadesPesq';

//import { MyCidadesProvider } from './components/contexts/MyCidadesContext';

// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyCidadesRoutes = () => {
  return (

    // <MyCidadesProvider>
      
      <Routes>
        <Route path="./components/pages/cadcidade/cadcidades" element={ <CadCidades />} />
        <Route path="./components/pages/cadcidade/cadcidadesinc" element={ <CadCidadesInc />} />
        <Route path="./components/pages/cadcidade/cadcidadesalt" element={ <CadCidadesAlt />} />
        <Route path="./components/pages/cadcidade/cadcidadesexc" element={ <CadCidadesExc />} />
        <Route path="./components/pages/cadcidade/cadcidadeslist" element={ <CadCidadesList />} />
        <Route path="./components/pages/cadcidade/cadcidadespesq" element={ <CadCidadesPesq />} />
      </Routes>

    // </MyCidadesProvider>

  );
};
export default MyCidadesRoutes;
