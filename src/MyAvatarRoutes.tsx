import { Routes, Route } from 'react-router-dom';
//import { MyAvatarProvider } from './components/contexts/MyAvatarContext';
import CadAvatar from './components/pages/cadavatar/CadAvatar';
import CadAvatarInc from './components/pages/cadavatar/CadAvatarInc';
import CadAvatarAlt from './components/pages/cadavatar/CadAvatarAlt';
import CadAvatarExc from './components/pages/cadavatar/CadAvatarExc';
import CadAvatarList from './components/pages/cadavatar/CadAvatarList';
import CadAvatarPesq from './components/pages/cadavatar/CadAvatarPesq';


// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyAvatarRoutes = () => {
  return (

    // <MyAvatarProvider>
      
      <Routes>
        <Route path="./components/pages/cadavatar/cadavatar" element={ <CadAvatar />} />
        <Route path="./components/pages/cadavatar/cadavatarinc" element={ <CadAvatarInc />} />
        <Route path="./components/pages/cadavatar/cadavataralt" element={ <CadAvatarAlt />} />
        <Route path="./components/pages/cadavatar/cadavatarexc" element={ <CadAvatarExc />} />
        <Route path="./components/pages/cadavatar/cadavatarlist" element={ <CadAvatarList />} />
        <Route path="./components/pages/cadavatar/cadavatarpesq" element={ <CadAvatarPesq />} />
      </Routes>

    // </MyAvatarProvider>

  );
};
export default MyAvatarRoutes;
