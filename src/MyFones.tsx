import { Routes, Route } from 'react-router-dom';
import CadFones from './components/pages/cadfone/CadFones';
import CadFonesInc from './components/pages/cadfone/CadFonesInc';
import CadFonesAlt from './components/pages/cadfone/CadFonesAlt';
import CadFonesExc from './components/pages/cadfone/CadFonesExc';
import CadFonesList from './components/pages/cadfone/CadFonesList';
import CadFonesPesq from './components/pages/cadfone/CadFonesPesq';
//import { MyFonesProvider } from './components/contexts/MyFonesContext';


// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyFonesRoutes = () => {
  return (

    // <MyFonesProvider>
      
      <Routes>
        <Route path="./components/pages/cadfone/cadfones" element={ <CadFones />} />
        <Route path="./components/pages/cadfone/cadfonesinc" element={ <CadFonesInc />} />
        <Route path="./components/pages/cadfone/cadfonesalt" element={ <CadFonesAlt />} />
        <Route path="./components/pages/cadfone/cadfonesexc" element={ <CadFonesExc />} />
        <Route path="./components/pages/cadfone/cadfoneslist" element={ <CadFonesList />} />
        <Route path="./components/pages/cadfone/cadfonespesq" element={ <CadFonesPesq />} />
      </Routes>

    // </MyFonesProvider>

  );
};
export default MyFonesRoutes;
