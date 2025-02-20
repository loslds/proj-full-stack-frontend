
import { Routes, Route } from 'react-router-dom';
//import { MyOServicosProvider } from './components/contexts/MyOServicosContext';

import CadOServicos from './components/pages/cados/CadOServicos';
import CadOServicosInc from './components/pages/cados/CadOServicosInc';
import CadOServicosAlt from './components/pages/cados/CadOServicosAlt';
import CadOServicosExc from './components/pages/cados/CadOServicosExc';
import CadOServicosList from './components/pages/cados/CadOServicosList';
import CadOServicosPesq from './components/pages/cados/CadOServicosPesq';


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
        <Route path="/cadoservicos" element={ <CadOServicos />} />
        <Route path="/cadoservicosinc" element={ <CadOServicosInc />} />
        <Route path="/cadoservicosalt" element={ <CadOServicosAlt />} />
        <Route path="/cadoservicosexc" element={ <CadOServicosExc />} />
        <Route path="/cadoservicoslist" element={ <CadOServicosList />} />
        <Route path="/cadoservicosPesq" element={ <CadOServicosPesq />} />
      </Routes>

    // </MyOServicosProvider>

  );
};
export default MyOServicosRoutes;
