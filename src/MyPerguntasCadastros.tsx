import { Routes, Route } from 'react-router-dom';
import CadPerguntas from './components/pages/cadpergunta/CadPerguntas';
import CadPerguntasInc from './components/pages/cadpergunta/CadPerguntasInc';
import CadPerguntasAlt from './components/pages/cadpergunta/CadPerguntasAlt';
import CadPerguntasExc from './components/pages/cadpergunta/CadPerguntasExc';
import CadPerguntasList from './components/pages/cadpergunta/CadPerguntasList';
import CadPerguntasPesq from './components/pages/cadpergunta/CadPerguntasPesq';
//import { MyPerguntasProvider } from './components/contexts/MyPerguntasContext';

// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyPerguntasRoutes = () => {
  return (

    // <MyPerguntasProvider>
      
      <Routes>
        <Route path="./components/pages/cadpergunta/cadperguntas" element={ <CadPerguntas />} />
        <Route path="./components/pages/cadpergunta/cadperguntasinc" element={ <CadPerguntasInc />} />
        <Route path="./components/pages/cadpergunta/cadperguntasalt" element={ <CadPerguntasAlt />} />
        <Route path="./components/pages/cadpergunta/cadperguntasexc" element={ <CadPerguntasExc />} />
        <Route path="./components/pages/cadpergunta/cadperguntaslist" element={ <CadPerguntasList />} />
        <Route path="./components/pages/cadpergunta/cadperguntaspesq" element={ <CadPerguntasPesq />} />
      </Routes>

    // </MyPerguntasProvider>

  );
};
export default MyPerguntasRoutes;
