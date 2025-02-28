import { Routes, Route } from 'react-router-dom';
//import { MyCadastrosProvider } from './components/contexts/MyCadastrosContext';
import CadCadastros from './components/pages/cadcadastro/CadCadastros';
import CadCadastrosInc from './components/pages/cadcadastro/CadCadastrosInc';
import CadCadastrosAlt from './components/pages/cadcadastro/CadCadastrosAlt';
import CadCadastrosExc from './components/pages/cadcadastro/CadCadastrosExc';
import CadCadastrosList from './components/pages/cadcadastro/CadCadastrosList';
import CadCadastrosPesq from './components/pages/cadcadastro/CadCadastrosPesq';

// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyCadastrosRoutes = () => {
  return (

    // <MyCadastrosProvider>
      
      <Routes>
        <Route path="./components/pages/cadCadastro/cadcadastros" element={ <CadCadastros />} />
        <Route path="./components/pages/cadCadastro/cadcastrosinc" element={ <CadCadastrosInc />} />
        <Route path="./components/pages/cadCadastro/cadcadastrosalt" element={ <CadCadastrosAlt />} />
        <Route path="./components/pages/cadCadastro/cadcadastrosexc" element={ <CadCadastrosExc />} />
        <Route path="./components/pages/cadCadastro/cadcadastroslist" element={ <CadCadastrosList />} />
        <Route path="./components/pages/cadCadastro/cadcadastrospesq" element={ <CadCadastrosPesq />} />
      </Routes>

    // </MyCadastrosProvider>

  );
};
export default MyCadastrosRoutes;
