
import { Routes, Route } from 'react-router-dom';
//import { MyAvatarusersProvider } from './components/contexts/MyAvatarusersContext';
import CadAvatarUsers from './components/pages/cadavartaruser/CadAvatarUsers';
import CadAvatarUsersInc from './components/pages/cadavartaruser/CadAvatarUsersInc';
import CadAvatarUsersAlt from './components/pages/cadavartaruser/CadAvatarUsersAlt';
import CadAvatarUsersExc from './components/pages/cadavartaruser/CadAvatarUsersExc';
import CadAvatarUsersList from './components/pages/cadavartaruser/CadAvatarUsersList';
import CadAvatarUsersPesq from './components/pages/cadavartaruser/CadAvatarUsersPesq';

// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyAvatarusersRoutes = () => {
  return (

    // <MyAvatarusersProvider>
      
      <Routes>
        <Route path="./components/pages/cadavataruser/cadavatarusers" element={ <CadAvatarUsers />} />
        <Route path="./components/pages/cadavataruser/cadavatarusersinc" element={ <CadAvatarUsersInc />} />
        <Route path="./components/pages/cadavataruser/cadavatarusersalt" element={ <CadAvatarUsersAlt />} />
        <Route path="./components/pages/cadavataruser/cadavatarusersexc" element={ <CadAvatarUsersExc />} />
        <Route path="./components/pages/cadavataruser/cadavataruserslist" element={ <CadAvatarUsersList />} />
        <Route path="./components/pages/cadavataruser/cadavataruserspesq" element={ <CadAvatarUsersPesq />} />
      </Routes>

    // </MyAvatarusersProvider>

  );
};
export default MyAvatarusersRoutes;
