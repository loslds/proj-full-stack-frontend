
import { Routes, Route } from 'react-router-dom';
//import { MyTabelasProvider } from './components/contexts/MyTabelasContext';

import Visitante from './components/modulos/Visitante';
import Recepcao from './components/modulos/Recepcao';
import Design from './components/modulos/Design';
import Acabamento from './components/modulos/Acabamento';
import Producao from './components/modulos/Producao';
import Administracao from './components/modulos/Administracao';
import Config from './components/modulos/Config';


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
        <Route path="/modulos/visitante" element={ <Visitante />} />
        <Route path="/modulos/recepcao" element={ <Recepcao />} />
        <Route path="/modulos/design" element={ <Design />} />
        <Route path="/modulos/acabamento" element={ <Acabamento />} />
        <Route path="/modulos/administracao" element={ <Administracao />} />
        <Route path="/modulos/config" element={ <Config />} />
      </Routes>

    // </MyTabCoresProvider>

  );
};
export default MyModulosRoutes;
