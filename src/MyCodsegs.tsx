import { Routes, Route } from 'react-router-dom';
import CadCodsegs from './components/pages/cadcodeseg/CadCodsegs';
import CadCodsegsInc from './components/pages/cadcodeseg/CadCodsegsInc';
import CadCodsegsAlt from './components/pages/cadcodeseg/CadCodsegsAlt';
import CadCodsegsExc from './components/pages/cadcodeseg/CadCodsegsExc';
import CadCodsegsList from './components/pages/cadcodeseg/CadCodsegsList';
import CadCodsegsPesq from './components/pages/cadcodeseg/CadCodsegsPesq';
//import { MyCodsegsProvider } from './components/contexts/MyCodsegsContext';


// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyCodsegsRoutes = () => {
  return (

    // <MyCodsegsProvider>
      
      <Routes>
        <Route path="./components/pages/cadcodseg/cadcodsegs" element={ <CadCodsegs />} />
        <Route path="./components/pages/cadcodseg/cadcodsegsinc" element={ <CadCodsegsInc />} />
        <Route path="./components/pages/cadcodseg/cadcodsegsalt" element={ <CadCodsegsAlt />} />
        <Route path="./components/pages/cadcodseg/cadcodsegsexc" element={ <CadCodsegsExc />} />
        <Route path="./components/pages/cadcodseg/cadcodsegslist" element={ <CadCodsegsList />} />
        <Route path="./components/pages/cadcodseg/cadcodsegspesq" element={ <CadCodsegsPesq />} />
      </Routes>

    // </MyCodsegsProvider>

  );
};
export default MyCodsegsRoutes;
