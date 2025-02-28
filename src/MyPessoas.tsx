import { Routes, Route } from 'react-router-dom';
import CadPessoas from './components/pages/cadpessoa/CadPessoas';
import CadPessoasInc from './components/pages/cadpessoa/CadPessoasInc';
import CadPessoasAlt from './components/pages/cadpessoa/CadPessoasAlt';
import CadPessoasExc from './components/pages/cadpessoa/CadPessoasExc';
import CadPessoasList from './components/pages/cadpessoa/CadPessoasList';
import CadPessoasPesq from './components/pages/cadpessoa/CadPessoasPesq';
//import { MyPessoasProvider } from './components/contexts/MyPessoasContext';


// const defaultConfig = {
//   host: '',
//   user: '',
//   password: '',
//   database: ''
// };

const MyPessoasRoutes = () => {
  return (

    // <MyPessoasProvider>
      
      <Routes>
        <Route path="./components/pages/cadpessoa/cadpessoas" element={ <CadPessoas />} />
        <Route path="./components/pages/cadpessoa/cadpessoasinc" element={ <CadPessoasInc />} />
        <Route path="./components/pages/cadpessoa/cadpessoasalt" element={ <CadPessoasAlt />} />
        <Route path="./components/pages/cadpessoa/cadpessoasexc" element={ <CadPessoasExc />} />
        <Route path="./components/pages/cadpessoa/cadpessoaslist" element={ <CadPessoasList />} />
        <Route path="./components/pages/cadpessoa/cadpessoaspesq" element={ <CadPessoasPesq />} />
      </Routes>

    // </MyPessoasProvider>

  );
};
export default MyPessoasRoutes;
