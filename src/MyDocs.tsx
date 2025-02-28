import { Routes, Route } from 'react-router-dom';
import CadDocs from './components/pages/caddoc/CadDocs';
import CadDocsInc from './components/pages/caddoc/CadDocsInc';
import CadDocsAlt from './components/pages/caddoc/CadDocsAlt';
import CadDocsExc from './components/pages/caddoc/CadDocsExc';
import CadDocsList from './components/pages/caddoc/CadDocsList';
import CadDocsPesq from './components/pages/caddoc/CadDocsPesq';
//import { MyDocsProvider } from './components/contexts/MyDocsContext';

// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyDocsRoutes = () => {
  return (

    // <MyDocsProvider>
      
      <Routes>
        <Route path="./components/pages/caddocs/caddocs" element={ <CadDocs />} />
        <Route path="./components/pages/caddocs/caddocsinc" element={ <CadDocsInc />} />
        <Route path="./components/pages/caddocs/caddocsalt" element={ <CadDocsAlt />} />
        <Route path="./components/pages/caddocs/caddocsexc" element={ <CadDocsExc />} />
        <Route path="./components/pages/caddocs/caddocslist" element={ <CadDocsList />} />
        <Route path="./components/pages/caddocs/caddocspesq" element={ <CadDocsPesq />} />
      </Routes>

    // </MyDocsProvider>

  );
};
export default MyDocsRoutes;
