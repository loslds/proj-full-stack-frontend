
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

import { CardDesenvolver } from './cards/CardDesenvolver';
//import Resgate from './components/pages/Resgate';
//import MySQLRoutes from './MySQLRoutes';                 
import MyModulosRoutes from './MyModulosRoutes';           
import MyAcoesRoutes from './MyAcoesRoutes';               
import MyAcessosRoutes from './MyAcoesRoutes';             
import MyAvatarusersRoutes from './MyAvatarusersRoutes';   
import MyAvatarRoutes from './MyAvatarRoutes';             
import MyChavesRoutes from './MyChavesRoutes';
import MyCadastrosRoutes from './MyCadastros';
import MyCidadesRoutes from './MyCidadesRoutes';
import MyClientesRoutes from './MyClientesRoutes';
import MyCodsegsRoutes from './MyCodsegs';
import MyConsumidoresRoutes from './MyConsumidoresRoutes';
import MyDocsRoutes from './MyDocs';
import MyEmailsRoutes from './MyEmails';
import MyEmpresasRoutes from './MyEmpresasRoutes';
import MyFonesRoutes from './MyFones';
import MyFornecedoresRoutes from './MyFornecedores';
import MyFuncionariosRoutes from './MyFuncionarios';
import MyNiveisRoutes from './MyNiveis';
import MyOSevicosRoutes from './MyOServicosRoutes';
import MyPerguntasRoutes from './MyPerguntasCadastros';
import MyPessoasRoutes from './MyPessoas';
import MyRespostasRoutes from './MyRespostas';
import MyUsersRoutes from './MyUsers';

//import MyTabCoresRoutes from './MyTabCoresRoutes';         // Importando as rotas do MyTabCores
//import MyTabPrecosRoutes from './MyTabPrecosRoutes';       // Importando as rotas do MyTabPrecos
//import MyRecepcaoRoutes from './MyRecepcaoRoutes';         // Importando as rotas do MyRecepcao

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='./cards/CardDesenvolver' element={<CardDesenvolver/>} /> 
      {/* <Route path="/resgate" element={<Resgate />} /> */}
      {/* <Route path="/resgate" element={<Resgate />} /> */}
      <Route path="/*" element={<MyModulosRoutes />} />      {/* Rotas de Empresas envolvidas pelo MyEmpresasProvider */}
      <Route path="/*" element={<MyAcoesRoutes />} />        {/* Rotas de Acoes envolvidas pelo MyAcoesProvider */}
      <Route path="/*" element={<MyAcessosRoutes />} />      {/* Rotas de Acessos envolvidas pelo MyAcessosProvider */}
      <Route path="/*" element={<MyAvatarusersRoutes />} />  {/* Rotas de Avatarusers envolvidas pelo MyAvatarusersProvider*/} 
      <Route path="/*" element={<MyAvatarRoutes />} />       {/* Rotas de Avatar envolvidas pelo MyAvatarProvider*/} 
      <Route path="/*" element={<MyCadastrosRoutes />} />    {/* Rotas de Cadastros envolvidas pelo MyCadastrosProvider*/} 
      <Route path="/*" element={<MyChavesRoutes />} />       {/* Rotas de Chaves envolvidas pelo MyChavesProvider*/} 
      <Route path="/*" element={<MyCidadesRoutes />} />      {/* Rotas de Cidades envolvidas pelo MyCidadesProvider*/} 
      <Route path="/*" element={<MyClientesRoutes />} />     {/* Rotas do Clientes envolvidas pelo MyClientesProvider */}
      <Route path="/*" element={<MyCodsegsRoutes />} />      {/* Rotas de CodSegs envolvidas pelo MyCodsegsProvider*/} 
      <Route path="/*" element={<MyConsumidoresRoutes />} /> {/* Rotas do Consumidores envolvidas pelo MyConsumidoresProvider */}
      <Route path="/*" element={<MyDocsRoutes />} />         {/* Rotas de Docs envolvidas pelo MyDocsProvider*/} 
      <Route path="/*" element={<MyEmailsRoutes />} />       {/* Rotas de Email envolvidas pelo MyEmailProvider*/} 
      <Route path="/*" element={<MyEmpresasRoutes />} />     {/* Rotas de Empresas envolvidas pelo MyEmpresasProvider */}
      <Route path="/*" element={<MyFonesRoutes />} />        {/* Rotas de Fones envolvidas pelo MyFonesProvider*/} 
      <Route path="/*" element={<MyFornecedoresRoutes />} /> {/* Rotas de Fornecedores envolvidas pelo MyFornecedoreProvider*/} 
      <Route path="/*" element={<MyFuncionariosRoutes />} /> {/* Rotas de Funcionarios envolvidas pelo MyFuncionariosProvider*/}
      <Route path="/*" element={<MyNiveisRoutes />} />       {/* Rotas de Niveis envolvidas pelo MyNiveisProvider*/}       
      <Route path="/*" element={<MyOSevicosRoutes />} />     {/* Rotas do OServicos envolvidas pelo MyOServicosProvider */}
      <Route path="/*" element={<MyPerguntasRoutes />} />    {/* Rotas de Perguntas envolvidas pelo MyPerguntasProvider*/} 
      <Route path="/*" element={<MyPessoasRoutes />} />      {/* Rotas de Pessoas envolvidas pelo MyPessoasProvider*/} 
      <Route path="/*" element={<MyRespostasRoutes />} />    {/* Rotas de Respostas envolvidas pelo MyRespostasProvider*/} 
        
      
      
      
      
      
      
      <Route path="/*" element={<MyUsersRoutes />} />        {/* Rotas de Users envolvidas pelo MyUsersProvider*/} 






      
      
      {/* Rotas do TabCores envolvidas pelo MyTabCoresProvider */}
      {/* <Route path="/*" element={<MyTabCoresRoutes />} /> */}
      {/* Rotas do TabPrecos envolvidas pelo MyPrecosProvider */}
      {/* <Route path="/*" element={<MyTabPrecosRoutes />} /> */}


      {/* rotas por setores */}
      {/* <Route path="/*" element={<MyRecepcaoRoutes />} /> */}

      {/* 🚨 Adicionando a rota do login MySQL separada 
      <Route path="/mysqlconfig" element={<MysqlConfig />} /> */}


      {/* Rotas do MySQL envolvidas pelo MySQLProvider */}
      {/* <Route path="/*" element={<MySQLRoutes />} /> */}

    </Routes>
  );
};

export default AppRoutes;

