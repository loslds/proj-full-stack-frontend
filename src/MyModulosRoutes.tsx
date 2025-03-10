
import { Routes, Route } from 'react-router-dom';
//import { MyTabelasProvider } from './components/contexts/MyTabelasContext';

import Visitante from './components/pages/modulos/Visitante';
import Recepcao from './components/pages/modulos/Recepcao';
import Design from './components/pages/modulos/Design';
import Acabamento from './components/pages/modulos/Acabamento';
import Producao from './components/pages/modulos/Producao';
import Administracao from './components/pages/modulos/Administracao';
import Config from './components/pages/modulos/Config';


// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyModulosRoutes = () => {
  return (

    // <MyTabCoresProvider>
      
      <Routes>
        <Route path="./components/modulos/visitante" element={ <Visitante />} />
        <Route path="./components/modulos/recepcao" element={ <Recepcao />} />
        <Route path="./components/modulos/design" element={ <Design />} />
        <Route path="./components/modulos/producao" element={ <Producao />} />
        <Route path="./components/modulos/acabamento" element={ <Acabamento />} />
        <Route path="./components/modulos/administracao" element={ <Administracao />} />
        <Route path="./components/modulos/config" element={ <Config />} />
      </Routes>

    // </MyTabCoresProvider>

  );
};
export default MyModulosRoutes;
