import { Routes, Route } from 'react-router-dom';
import CadNiveis from './components/pages/cadnivel/CadNiveis';
import CadNiveisInc from './components/pages/cadnivel/CadNiveisInc';
import CadNiveisAlt from './components/pages/cadnivel/CadNiveisAlt';
import CadNiveisExc from './components/pages/cadnivel/CadNiveisExc';
import CadNiveisList from './components/pages/cadnivel/CadNiveisList';
import CadNiveisPesq from './components/pages/cadnivel/CadNiveisPesq';
//import { MyNiveisProvider } from './components/contexts/MyNiveisContext';

// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyNiveisRoutes = () => {
  return (

    // <MyNiveisProvider>
      
      <Routes>
        <Route path="./components/pages/cadnivel/cadniveis" element={ <CadNiveis />} />
        <Route path="./components/pages/cadnivel/cadniveisinc" element={ <CadNiveisInc />} />
        <Route path="./components/pages/cadnivel/cadniveisalt" element={ <CadNiveisAlt />} />
        <Route path="./components/pages/cadnivel/cadniveisexc" element={ <CadNiveisExc />} />
        <Route path="./components/pages/cadnivel/cadniveislist" element={ <CadNiveisList />} />
        <Route path="./components/pages/cadnivel/cadniveispesq" element={ <CadNiveisPesq />} />
      </Routes>

    // </MyNiveisProvider>

  );
};
export default MyNiveisRoutes;
