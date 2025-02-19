
import { Routes, Route } from 'react-router-dom';
//import { MyOServicosProvider } from './components/contexts/MyOServicosContext';

import CadOServicos from './components/pages/CadOServicos';
import CadOServicosInc from './components/pages/CadOServicosInc';
import CadOServicosAlt from './components/pages/CadOServicosAlt';
import CadOServicosExc from './components/pages/CadOServicosExc';
import CadOServicosList from './components/pages/CadOServicosList';
import CadOServicosPesq from './components/pages/CadOServicosPesq';


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
