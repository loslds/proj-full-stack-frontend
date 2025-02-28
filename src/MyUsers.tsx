import { Routes, Route } from 'react-router-dom';
import CadUsers from './components/pages/caduser/CadUsers';
import CadUsersInc from './components/pages/caduser/CadUsersInc';
import CadUsersAlt from './components/pages/caduser/CadUsersAlt';
import CadUsersExc from './components/pages/caduser/CadUsersExc';
import CadUsersList from './components/pages/caduser/CadUsersList';
import CadUsersPesq from './components/pages/caduser/CadUsersPesq';
//import { MyUsersProvider } from './components/contexts/MyUsersContext';

// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyUsersRoutes = () => {
  return (

    // <MyUsersProvider>
      
      <Routes>
        <Route path="./components/pages/caduser/cadusers" element={ <CadUsers />} />
        <Route path="./components/pages/caduser/cadusersinc" element={ <CadUsersInc />} />
        <Route path="./components/pages/caduser/cadusersalt" element={ <CadUsersAlt />} />
        <Route path="./components/pages/caduser/cadusersexc" element={ <CadUsersExc />} />
        <Route path="./components/pages/caduser/caduserslist" element={ <CadUsersList />} />
        <Route path="./components/pages/caduser/caduserspesq" element={ <CadUsersPesq />} />
      </Routes>

    // </MyUsersProvider>

  );
};
export default MyUsersRoutes;
