
import * as Pg from '../stylePages';
import React from "react";
import axios from "axios";

interface Empresa {
  id: number;
  fantasy: string;
}

interface Setor {
  id: number;
  setor: string;
}


import { useNavigate } from "react-router-dom";

//import * as Pg from "../stylePages";

import { ThemeProvider } from "styled-components";
import light from "../../themes/light";
import dark from "../../themes/dark";

import LayoutLogin from "../layouts/LayoutLogin";

import { PageModal } from './PageModal';
import { CardHlpLoginLogo } from '../../cards/CardHlpLoginLogo';
import { CardHlpLoginPage } from '../../cards/CardHlpLoginPage';

import { ContentItensBody } from '../ContentItensBody';
import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton';
import { ContentSideMsgPagePanelBotton } from '../ContentSideMsgPagePanelBotton';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton';
import { ContentPageButtonDefImgEnabled } from '../ContentPageButtonDefImgEnabled';

import lg_login from "../../assets/svgs/lg_login.svg";
import bt_helppg from "../../assets/svgs/bt_helppg.svg";
import bt_abortar from "../../assets/svgs/bt_abortar.svg";
import bt_enviar from '../../assets/svgs/bt_enviar.svg';

import bt_close from "../../assets/svgs/bt_close.svg";

//import bt_voltar from "../../assets/pngs/bt_voltar.png";
//import bt_setadir from "../../assets/svgs/bt_setadir.svg";

const Login: React.FC = () => {

  const [theme, setTheme] = React.useState(light);
  const [ischeck, setIscheck] = React.useState(false);

  const ToggleTheme = () => {
    if (theme.name === "dark") {
      setTheme(light);
      setIscheck(true);
    } else {
      setTheme(dark);
      setIscheck(false);
    }
  };

  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  // Estados para os selects
  const [empresas, setEmpresas] = React.useState([]);
  const [setores, setSetores] = React.useState([]);
  const [empresaSelecionada, setEmpresaSelecionada] = React.useState("");
  const [idempresa, setIdEmpresa] = React.useState(0);
  const [setorSelecionado, setSetorSelecionado] = React.useState("");
  const [idsetor, setIdSetor] = React.useState(0);
  const [tipoAcesso, setTipoAcesso] = React.useState("");
  const [idtipoacesso, setIdTipoAcesso] = React.useState(0);
  const [isdesable, setIsDesable] = React.useState(true);
  const [edicao, setEdicao] = React.useState(false);

  
  // Estados para os inputs de login
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");

  const [msgpanelbottom, setMsgPanelBottom] = React.useState('');

  // Buscar empresas no servidor
  React.useEffect(() => {
    axios.get("http://localhost:3001/empresas")
      .then((res) => setEmpresas(res.data))
      .catch((err) => console.error("Erro ao buscar empresas:", err));
  }, []);
  
  // Buscar setores ao selecionar empresa
  React.useEffect(() => {
    if (empresaSelecionada) {
      axios.get(`http://localhost:3001/setores`)
        .then((res) => setSetores(res.data))
        .catch((err) => console.error("Erro ao buscar setores:", err));
    }
  }, [empresaSelecionada]);

  // Manipular login

  React.useEffect(() => {
    let idemp = parseInt(empresaSelecionada);
    let idset = parseInt(setorSelecionado);
    let idace = parseInt(tipoAcesso);
    if (idemp <= 0){
      setMsgPanelBottom('Selecione uma Empresa...');
      setEdicao(false);
      setIsDesable(true);
    } else if (idset <= 0){
      setMsgPanelBottom('Selecione um Setor...');
      setEdicao(false);
      setIsDesable(true);
    } else if (idace <= 0){
      setMsgPanelBottom('Selecione um Acesso...');
      setEdicao(false);
      setIsDesable(true);
    } else {
      setIdEmpresa( idemp );
      setIdSetor( idset );
      if (tipoAcesso === 'email-senha'){
        setIdTipoAcesso(1);
      } else if (tipoAcesso === 'email-pin'){
        setIdTipoAcesso(2);
      } else if (tipoAcesso === 'pseudonimo-senha'){
        setIdTipoAcesso(3);
      } else if (tipoAcesso === 'pseudonimo-pin'){
        setIdTipoAcesso(4);
      }
      setIsDesable(false);
      setEdicao(true);
    }
    
  },[edicao]);

  const handleCheckLogin = () => {
    if (edicao) {
      // busca em servidor ´:
      // se encontrar  
    }
  };

  const [cardhplloginlogo, setCardHlpLoginLogo] = React.useState(false);
  const handlerCardHlpLoginLogo = React.useCallback(() => {
    setCardHlpLoginLogo((oldState) => !oldState);
  }, []);

  const [cardhplloginpage, setCardHlpLoginPage] = React.useState(false);
  const handlerCardHlpLoginPage = React.useCallback(() => {
    setCardHlpLoginPage((oldState) => !oldState);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <LayoutLogin
        imgsys={lg_login}
        titbtnsys="Acesso Sistema..."
        onclicksys={handlerCardHlpLoginLogo}

        titlepg="Cadastros"

        imgbtnhlppg={bt_helppg}
        titbtnhlppg="Help Page..."
        onclickhlppg={ handlerCardHlpLoginPage }

        imgbtnaborta={bt_abortar}
        titbtnaborta="Abortar..."
        onclickaborta={ goto('/') }

        onchange={ToggleTheme}
        ischeck={ischeck}
      >
        <ContentItensBody>
          <h2>Login</h2>

          {/* Select Empresa */}
          <div>
            <label>Empresa:</label>
            <select value={empresaSelecionada} onChange={(e) => setEmpresaSelecionada(e.target.value)}>
              <option value="">Selecione Empresa</option>
              {empresas.map((empresa: Empresa) => (
                <option key={empresa.id} value={empresa.id}>{empresa.fantasy}</option>
              ))}
            </select>
          
            {/* Select Setores */}
            {empresaSelecionada && (
              <>
                <label>Setor:</label>
                <select value={setorSelecionado} onChange={(e) => setSetorSelecionado(e.target.value)}>
                  <option value="">Selecione um setor</option>
                  {setores.map((setor: Setor) => (
                    <option key={setor.id} value={setor.id}>{setor.setor}</option>
                  ))}
                </select>
              </>
            )}

            {/* Select Tipo de Acesso */}
            {setorSelecionado && (
              <>
                <label>Acesso:</label>
                <select value={tipoAcesso} onChange={(e) => setTipoAcesso(e.target.value)}>
                  <option value="0">Selecione o tipo de acesso</option>
                  <option value="1">Email e Senha</option>
                  <option value="2">Email e PIN</option>
                  <option value="3">Pseudônimo e Senha</option>
                  <option value="4">Pseudônimo e PIN</option>
                </select>
              </>
            )}

            {/* Inputs de Login */}
            {tipoAcesso && (
              <>
                <label>{tipoAcesso.includes("email") ? "Email" : "Pseudônimo"}:</label>
                <input
                  type="text"
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                  placeholder={tipoAcesso.includes("email") ? "Digite seu email" : "Digite seu pseudônimo"}
                />

                <label>{tipoAcesso.includes("senha") ? "Senha" : "PIN"}:</label>
                <input
                  type={tipoAcesso.includes("senha") ? "password" : "text"}
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                  placeholder={tipoAcesso.includes("senha") ? "Digite sua senha" : "Digite seu PIN"}
                />
                <p>
                  <a href="#" onClick={() => navigate("/resgatar")}> Esqueceu sua senha? </a>
                </p>
            </>
          )}
        
        </ContentItensBody>

        <Pg.DivisionPgHztal />
        <ContentSidePagePanelBotton bordas="3px" open={true} pwidth="100%">
         
          <ContentSideMsgPagePanelBotton bordas="3px" label={'Menssagens : '} msg={msgpanelbottom} />
                    
          <ContentSidePageBottonLabel istitl={true} title={'Voltar.: '}>
            <ContentSidePageBottonButton
              pxheight={'40px'}
              img={''}
              titbtn={'Voltar...'}
              onclick={goto('/')}
              onMouseEnter={() => setMsgPanelBottom('retorna a Home...') }
              onMouseLeave={() => setMsgPanelBottom('')}
            />
          </ContentSidePageBottonLabel>

          { edicao ? (
            <ContentSidePageBottonLabel istitl={true} title={'Confirma? : '}>
              <ContentPageButtonDefImgEnabled 
                pxheight={'40px'}
                img={bt_enviar}
                titbtn={'Confirmar...'}
                onclick={handleCheckLogin}
                disabled={isdesable}
              />
            </ContentSidePageBottonLabel>
          ): null}
          
        </ContentSidePagePanelBotton>


        {cardhplloginpage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Help Conteúdo Login.'}
            onclose={() => setCardHlpLoginPage(false)}
          >
            <CardHlpLoginPage
              imgcardpage={lg_login}
              onclosesair={() => setCardHlpLoginPage(false)}
            />
          </PageModal>
        ) : null}
        {cardhplloginlogo ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Sintese Login...'}
            onclose={() => setCardHlpLoginLogo(false)}
          >
            <CardHlpLoginLogo
              imgcardlogin={lg_login}
              onclosesair={() => setCardHlpLoginLogo(false)}
            />
          </PageModal>
        ) : null}
      </LayoutLogin>
    </ThemeProvider>
  );
};

export default Login;