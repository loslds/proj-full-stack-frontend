
import { Routes, Route } from 'react-router-dom';
//import { MyAcessosProvider } from './components/contexts/MyAcessosContext';

import CadAcessos from './components/pages/cadacesso/CadAcessos';
import CadAcessosInc from './components/pages/cadacesso/CadAcessosInc';
import CadAcessosAlt from './components/pages/cadacesso/CadAcessosAlt';
import CadAcessosExc from './components/pages/cadacesso/CadAcessosExc';
import CadAcessosList from './components/pages/cadacesso/CadAcessosList';
import CadAcessosPesq from './components/pages/cadacesso/CadAcessosPesq';

// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyAcessosRoutes = () => {
  return (

    // <MyAcessosProvider>
      
      <Routes>
        <Route path="./components/pages/cadacao/cadacessos" element={ <CadAcessos />} />
        <Route path="./components/pages/cadacao/cadacessosinc" element={ <CadAcessosInc />} />
        <Route path="./components/pages/cadacao/cadacessosalt" element={ <CadAcessosAlt />} />
        <Route path="./components/pages/cadacao/cadacessosexc" element={ <CadAcessosExc />} />
        <Route path="./components/pages/cadacao/cadacessoslist" element={ <CadAcessosList />} />
        <Route path="./components/pages/cadacao/cadacessospesq" element={ <CadAcessosPesq />} />
      </Routes>

    // </MyAcessosProvider>

  );
};
export default MyAcessosRoutes;
