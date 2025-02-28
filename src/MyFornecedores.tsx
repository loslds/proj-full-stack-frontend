import { Routes, Route } from 'react-router-dom';
import CadFornecedores from './components/pages/cadfornecedor/CadFornecedores';
import CadFornecedoresInc from './components/pages/cadfornecedor/CadFornecedoresInc';
import CadFornecedoresAlt from './components/pages/cadfornecedor/CadFornecedoresAlt';
import CadFornecedoresExc from './components/pages/cadfornecedor/CadFornecedoresExc';
import CadFornecedoresList from './components/pages/cadfornecedor/CadFornecedoresList';
import CadFornecedoresPesq from './components/pages/cadfornecedor/CadFornecedoresPesq';
//import { MyFornecedoresProvider } from './components/contexts/MyFornecedoresContext';


// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyFornecedoresRoutes = () => {
  return (

    // <MyFornecedoresProvider>
      
      <Routes>
        <Route path="./components/pages/cadfornecedores/cadfornecedores" element={ <CadFornecedores />} />
        <Route path="./components/pages/cadfornecedores/cadfornecedoresinc" element={ <CadFornecedoresInc />} />
        <Route path="./components/pages/cadfornecedores/cadfornecedoresalt" element={ <CadFornecedoresAlt />} />
        <Route path="./components/pages/cadfornecedores/cadfornecedoresexc" element={ <CadFornecedoresExc />} />
        <Route path="./components/pages/cadfornecedores/cadfornecedoreslist" element={ <CadFornecedoresList />} />
        <Route path="./components/pages/cadfornecedores/cadfornecedorespesq" element={ <CadFornecedoresPesq />} />
      </Routes>

    // </MyFornecedoresProvider>

  );
};
export default MyFornecedoresRoutes;
