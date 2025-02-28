import { Routes, Route } from 'react-router-dom';
import CadFuncionarios from './components/pages/cadfuncionario/CadFuncionarios';
import CadFuncionariosInc from './components/pages/cadfuncionario/CadFuncionariosInc';
import CadFuncionariosAlt from './components/pages/cadfuncionario/CadFuncionariosAlt';
import CadFuncionariosExc from './components/pages/cadfuncionario/CadFuncionariosExc';
import CadFuncionariosList from './components/pages/cadfuncionario/CadFuncionariosList';
import CadFuncionariosPesq from './components/pages/cadfuncionario/CadFuncionariosPesq';
//import { MyFuncionariosProvider } from './components/contexts/MyFuncionariosContext';

// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyFuncionariosRoutes = () => {
  return (

    // <MyFuncionariosProvider>
      
      <Routes>
        <Route path="./components/pages/cadFuncionarios/cadFuncionarios" element={ <CadFuncionarios />} />
        <Route path="./components/pages/cadFuncionarios/cadFuncionariosinc" element={ <CadFuncionariosInc />} />
        <Route path="./components/pages/cadFuncionarios/cadFuncionariosalt" element={ <CadFuncionariosAlt />} />
        <Route path="./components/pages/cadFuncionarios/cadFuncionariosexc" element={ <CadFuncionariosExc />} />
        <Route path="./components/pages/cadFuncionarios/cadFuncionarioslist" element={ <CadFuncionariosList />} />
        <Route path="./components/pages/cadFuncionarios/cadFuncionariospesq" element={ <CadFuncionariosPesq />} />
      </Routes>

    // </MyFuncionariosProvider>

  );
};
export default MyFuncionariosRoutes;
