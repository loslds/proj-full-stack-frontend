
import { Routes, Route } from 'react-router-dom';
//import { MyOServicosProvider } from './components/contexts/MyOServicosContext';

import CadOServicos from './components/pages/cadoservico/CadOServicos';
import CadOServicosInc from './components/pages/cadoservico/CadOServicosInc';
import CadOServicosAlt from './components/pages/cadoservico/CadOServicosAlt';
import CadOServicosExc from './components/pages/cadoservico/CadOServicosExc';
import CadOServicosList from './components/pages/cadoservico/CadOServicosList';
import CadOServicosPesq from './components/pages/cadoservico/CadOServicosPesq';


// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyOServicosRoutes = () => {
  return (

    // <MyOServicosProvider>
      
      <Routes>
        <Route path="./components/pages/cadoservico/cadoservicos" element={ <CadOServicos />} />
        <Route path="./components/pages/cadoservico/cadoservicosinc" element={ <CadOServicosInc />} />
        <Route path="./components/pages/cadoservico/cadoservicosalt" element={ <CadOServicosAlt />} />
        <Route path="./components/pages/cadoservico/cadoservicosexc" element={ <CadOServicosExc />} />
        <Route path="./components/pages/cadoservico/cadoservicoslist" element={ <CadOServicosList />} />
        <Route path="./components/pages/cadoservico/cadoservicosPesq" element={ <CadOServicosPesq />} />
      </Routes>

    // </MyOServicosProvider>

  );
};
export default MyOServicosRoutes;
