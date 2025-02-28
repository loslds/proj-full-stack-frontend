import { Routes, Route } from 'react-router-dom';
import CadRespostas from './components/pages/cadresposta/CadRespostas';
import CadRespostasInc from './components/pages/cadresposta/CadRespostasInc';
import CadRespostasAlt from './components/pages/cadresposta/CadRespostasAlt';
import CadRespostasExc from './components/pages/cadresposta/CadRespostasExc';
import CadRespostasList from './components/pages/cadresposta/CadRespostasList';
import CadRespostasPesq from './components/pages/cadresposta/CadRespostasPesq';

//import { MyRespostasProvider } from './components/contexts/MyRespostasContext';

// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyRespostasRoutes = () => {
  return (

    // <MyRespostasProvider>
      
      <Routes>
        <Route path="./components/pages/cadresposta/cadrespostas" element={ <CadRespostas />} />
        <Route path="./components/pages/cadresposta/cadrespostasinc" element={ <CadRespostasInc />} />
        <Route path="./components/pages/cadresposta/cadrespostasalt" element={ <CadRespostasAlt />} />
        <Route path="./components/pages/cadresposta/cadrespostasexc" element={ <CadRespostasExc />} />
        <Route path="./components/pages/cadresposta/cadrespostaslist" element={ <CadRespostasList />} />
        <Route path="./components/pages/cadresposta/cadrespostaspesq" element={ <CadRespostasPesq />} />
      </Routes>

    // </MyRespostasProvider>

  );
};
export default MyRespostasRoutes;
