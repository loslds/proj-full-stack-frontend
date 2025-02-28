import { Routes, Route } from 'react-router-dom';
import CadEmails from './components/pages/cademail/CadEmails';
import CadEmailsInc from './components/pages/cademail/CadEmailsInc';
import CadEmailsAlt from './components/pages/cademail/CadEmailsAlt';
import CadEmailsExc from './components/pages/cademail/CadEmailsExc';
import CadEmailsList from './components/pages/cademail/CadEmailsList';
import CadEmailsPesq from './components/pages/cademail/CadEmailsPesq';
//import { MyEmailsProvider } from './components/contexts/MyEmailsContext';

// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyEmailsRoutes = () => {
  return (

    // <MyEmailsProvider>
      
      <Routes>
        <Route path="./components/pages/cademail/cademails" element={ <CadEmails />} />
        <Route path="./components/pages/cademail/cademailsinc" element={ <CadEmailsInc />} />
        <Route path="./components/pages/cademail/cademailsalt" element={ <CadEmailsAlt />} />
        <Route path="./components/pages/cademail/cademailsexc" element={ <CadEmailsExc />} />
        <Route path="./components/pages/cademail/cademailslist" element={ <CadEmailsList />} />
        <Route path="./components/pages/cademail/cademailspesq" element={ <CadEmailsPesq />} />
      </Routes>

    // </MyEmailsProvider>

  );
};
export default MyEmailsRoutes;
