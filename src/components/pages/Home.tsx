 
// C:\repository\proj-full-stack-frontend\src\components\pages\Home.tsx
import React from 'react';
import * as Pg from '../stylePages';
import { useNavigate } from 'react-router-dom';
// theme
import { ThemeProvider } from 'styled-components';
import light from '../../themes/light';
import dark from '../../themes/dark';
// layout page
import LayoutHome from '../layouts/LayoutHome';
// uso do context
//import { Dispatch } from "react";
import { useAcessoContext } from "../contexts/ContextAcesso";
/** component ação para fazer o logoff em MODAL Login e Master  Atualizador do context*/  
import { logoutMaster } from '../contexts/helpers/logoutMaster';
import { logoutLogin } from '../contexts/helpers/logoutLogin';
import { SystemHealthResult } from '../../types/SystemHealth';
// main page
import { ContentItensBody } from '../ContentItensBody';
import { ContentCustonImgPage } from '../ContentCustonImgPage';
// bottom page
import { PageModal } from './PageModal';
import { ContentSysMainItens } from '../../cards/ContentSysMainItens';
import { AutoCloseTimer } from '../AutoCloseTimer';
import { ContentSidePagePanelBotton } from '../sidebars/ContentSidePagePanelBotton';
import { ContentSidePageBottonLabel } from '../sidebars/ContentSidePageBottonLabel';
import { ContentSidePageBottonButton } from '../sidebars/ContentSidePageBottonButton';
import { ContentSideMsgPagePanelBotton } from '../sidebars/ContentSideMsgPagePanelBotton';

/**img da Pagina MODAL */ 
/** component ação botão para fechar a pagina MODAL*/
import btn_def_q_close from '../../assets/defaults/btn/btn_def_q_close.svg';
/** component imagem painel para acesso negado pagina MODAL*/
import pnl_def_ope_negado from '../../assets/defaults/pnl/pnl_def_ope_negacao.svg';

// Heard
import lg_def_ope_default from "../../assets/defaults/lg/lg_def_ope_default.svg";
import { CardHlpHomeLogo } from '../../cards/CardHlpHomeLogo';
import { CardHlpHomePage } from '../../cards/CardHlpHomePage';




/** component ação botão help */
import { CardCheckingSystema } from '../../cards/CardCheckingSystema';
import { CardImgNeg } from '../../cards/CardImgNeg';
// Help Botão Login
import { CardHlpBtnLoginModPage } from '../../cards/CardHlpBtnLoginModPage';
// Modal LOGO-OFF SENHA LOGIN
import { CardLogoffLogin } from '../../cards/CardLogoffLogin';
// Modal LOGO-OFF SENHA MASTER
import { CardLogoffMaster } from '../../cards/CardLogoffMaster';



/** IMAGENS DOS BOTÔES PAGINA */
/** component ação Botão Help Pagina  */ 
import btn_def_q_help from "../../assets/defaults/btn/btn_def_c_help.svg";
//** component ação BOTÃO LOGIN */
import btn_def_ope_q_login from "../../assets/defaults/btn/btn_def_ope_q_login.svg";
/** se tiver logado sem avatar*/
import btn_def_q_avatar from "../../assets/defaults/btn/btn_def_q_avatar.svg";
/** component ação limpar Login (logoff modal) */ 
import pnl_def_ope_login from '../../assets/defaults/pnl/pnl_def_ope_login.svg';
/** component ação limpar Master (logoff modal)*/ 
import btn_def_q_master from    '../../assets/defaults/btn/btn_def_q_master.svg';
/** component ação imagem Master na pagina do Logoff modal */ 
import pnl_def_ope_master from '../../assets/defaults/pnl/pnl_def_ope_master.svg'
/** component ação botão para resgatar acesso */ 
import btn_def_q_resgatar from '../../assets/defaults/btn/btn_def_q_resgatar.svg';

/** img do main painel */ 
/** component ação imagem Panel Visitante da pagina HOME */ 
import pnl_def_mod_visitante from '../../assets/defaults/pnl/pnl_def_mod_visitantes.svg';
/** component ação imagem Panel Recepção da pagina HOME */ 
import pnl_def_mod_recepcao from '../../assets/defaults/pnl/pnl_def_mod_recepcao.svg';
/** component ação imagem Panel Design da pagina HOME */ 
import pnl_def_mod_design from '../../assets/defaults/pnl/pnl_def_mod_design.svg';
/** component ação imagem Panel Produção da pagina HOME */ 
import pnl_def_mod_producao from '../../assets/defaults/pnl/pnl_def_mod_producao.svg';
/** component ação imagem Panel Acabamento da pagina HOME */ 
import pnl_def_mod_acabamento from '../../assets/defaults/pnl/pnl_def_mod_acabamento.svg';
/** component ação imagem Panel Expedição da pagina HOME */ 
import pnl_def_mod_expedicao from '../../assets/defaults/pnl/pnl_def_mod_expedicao.svg';
/** component ação imagem Panel Administração da pagina HOME */ 
import pnl_def_mod_administracao from '../../assets/defaults/pnl/pnl_def_mod_administracao.svg';
/** component ação imagem Panel Config da pagina HOME */ 
import pnl_def_mod_config from '../../assets/defaults/pnl/pnl_def_mod_config.svg';

/** img do painel Bottom */ 
/** component ação botão para refrescar a pagina */
import btn_def_q_refrescar from '../../assets/defaults/btn/btn_def_q_refrescar.svg';


const Home: React.FC = () => {
  const { state, dispatch } = useAcessoContext();

  const [theme, setTheme] = React.useState(light);
  // mudança em THEME
  const [ischeck, setIscheck] = React.useState(false);
  // menssagem em heard do Panel Booton
  const [msgpanelbottom, setMsgPanelBottom] = React.useState('');
  // menssagem em Panel Booton
  const [messagebottom, setMessageBottom] = React.useState('');

  const [cardlogo, setCardLogo] = React.useState(false);

  const [cardhplpage, setCardHlpPage] = React.useState(false);

  const [cardhplbtnlogin, setCardHlpBtnLogin] = React.useState(false);

  const [cardnegadopage, setCardNegadoPage] = React.useState(false);

  // Botão para Modal Logado ou não, DATA CEnter ou não do Login
  
  // Help Botão Login
  //Set para modal botão Logof senha Login 
  const [ismsgchvLogin, setIsMsgChvLogin] = React.useState(false);//botão logoff  login
  const [chavelogin, setChaveLogin ] = React.useState(false); // abre botão logoff login

  //Set para modal botão Logof senha Master 
  const [ismsgchvkey, setIsMsgChvkey] = React.useState(false);//botão logoff  master
  const [chavemst, setChaveMst ] = React.useState(false); //abre botão master

  // Mantidos (você usa para sinalizar alguns fluxos), mas agora SEM travar Home
  const [showInitSystem, setInitShowSystem] = React.useState(false);

  // Modal de verificação do sistema (fechável)
  const [showsystemcheckmodal, setShowSystemCheckModal] = React.useState(false);

  const [systemMessages, setSystemMessages] = React.useState<string[]>(['Iniciando verificação do sistema...']);
  const [systemOk, setSystemOk] = React.useState<boolean | null>(null);

  const [notOperation, setNotOperation] = React.useState(false);
  
  // navegação
  const navigate = useNavigate();
  const goto = React.useCallback((path: string) => navigate(path), [navigate]);

  // tema
  const ToggleTheme = () => {
    setTheme(theme.name === 'dark' ? light : dark);
    setIscheck((prev) => !prev);
  };

  React.useEffect(() => {
    if (state.chvkey) {
      setMsgPanelBottom('Acesso "Master" ativo.');
      setMessageBottom("Aguardando Seleção...");
      return;
    }

    if (state.initsys) return;
    let cancelled = false;

    async function runSystemCheck() {
      try {
        // abre modal informativo de verificação (fechável)
        setShowSystemCheckModal(true);
        setSystemOk(null);
        setSystemMessages(['🔍 Iniciando verificação do sistema...', '🔌 Consultando estado do backend...']);
        const res = await fetch('http://localhost:5000/api/system/health');
        const data: SystemHealthResult = await res.json();
        if (cancelled) return;
        const ok = data.success && data.missingTables.length === 0;
        const chkdb = data.initialized;

        const messages: string[] = [
          `🧭 Modo do sistema: ${data.mode}`,
          `🗄️ Database: ${data.database}`,
          `📦 Tabelas encontradas: ${data.existingTables.length}`,
        ];

        // mantém o resumo de ausentes
        if (data.missingTables.length > 0) {
          messages.push(`⚠️ Tabelas ausentes: ${data.missingTables.join(', ')}`);
        } else {
          messages.push('✅ Todas as tabelas necessárias estão presentes.');
        }

        // adiciona o detalhamento tabela a tabela
        if (Array.isArray(data.steps)) {
          messages.push('— Detalhes das tabelas —');
          data.steps.forEach(step => {
          messages.push(step.message);
          });
        }

        setSystemMessages(messages);
        
        setSystemOk(ok);
        dispatch({ type: "initsys", payload: ok });
        dispatch({ type: "chkdb", payload: chkdb });
      } catch {
        setSystemMessages(['❌ Backend não respondeu.', '⛔ Não foi possível verificar o sistema.']);
        setSystemOk(false);
        dispatch({ type: "initsys", payload: false });
        dispatch({ type: "chkdb", payload: false });
      }
    }
    runSystemCheck();
    return () => {
      cancelled = true;
    };
  }, [state.initsys, state.chvkey, state.logado, dispatch]);

  /////////////////////////////////////
  React.useEffect(() => {
  setMessageBottom("");
  dispatch({ type: "page", payload: "Home" });
  dispatch({ type: "aplicacao", payload: "OPÇÃO" });
  
  // ✅ 1) Se CHVKEY estiver ativo, NÃO pode zerar nem bloquear.
  if (state.chvkey) {
    setMsgPanelBottom('Acesso "Master" ativo.');
    setMessageBottom("Aguardando Seleção...");
    return;
  }

  if (state.logado) {
    setMsgPanelBottom('Acesso "Login" ativo.');
    setMessageBottom("Aguardando Seleção...");
    return;
  }

  // ✅ 2) Se sistema não iniciou, mostra status, mas sem travar Home
  if (!state.initsys) {
    dispatch({ type: "initsys", payload: false });
    dispatch({ type: "chkdb", payload: false });
    dispatch({ type: "modulo", payload: "Checagem Database" });
    dispatch({ type: "cor",payload: "" });
    dispatch({ type: "acao", payload: "" });
    dispatch({ type: "nivel", payload: 0 });
        
    setMsgPanelBottom("Check DataBase...");
    setMessageBottom("Sistema com DataBase Inconsistente...");
    setInitShowSystem(true);
    return;
  }
  
  // ✅ 3) Sistema iniciou, mas DB não pronto
  if (!state.chkdb) {
    setShowSystemCheckModal(true);
    setMsgPanelBottom("Sistema Inoperante. Conexão ou tabelas não estão prontas.");
    return;
  }
  
  // ✅ 4) Usuário logado (login normal)
  if (state.logado) {
    setMsgPanelBottom(`Acesso MODULO ["${state.modulo}"] ao Sistema...`);
    setMessageBottom("Aguardando Seleção...");
    return;
  }
  // ✅ 5) Sem login e sem master
  dispatch({ type: "chvkey", payload: false });
  dispatch({ type: "modulo", payload: "Inicial" });
  dispatch({ type: "cor",payload: "" });
  dispatch({ type: "nivel", payload: 0 });
  dispatch({ type: "acao", payload: "" });
  
}, [state.initsys, state.chkdb, state.logado, state.chvkey, state.modulo, dispatch]);

React.useEffect(() => {
  setChaveMst(Boolean(state.chvkey));
}, [state.chvkey]);

React.useEffect(() => {
  setChaveLogin(Boolean(state.logado));
}, [state.logado]);
/////////////////////////////////
//** Abre/fecha ao clicar na Logo do Sistema ou Empresa */
const handlerCardLogo = React.useCallback(() => setCardLogo((old) => !old), []);
//** Abre/fecha ao clicar no botão help da Pagina */
const handlerCardHlpPage = React.useCallback(() => setCardHlpPage((old) => !old), []);
//** Abre/fecha ao clicar no botão Login */
const handlerCardHlpBtnLogin = React.useCallback(() => setCardHlpBtnLogin((old) => !old), []);
//** Abre/fecha ao clicar no botão Panel Mopdulos */
const handlerClicEventNegadoPage = React.useCallback( (num: number) => {

  
  if (num === undefined) return;
  
  const routes: Record<number, string> = {
    1: '/modulos/visitante',
    2: '/modulos/recepcao',
    3: '/modulos/design',
    4: '/modulos/producao',
    5: '/modulos/acabamento',
    6: '/modulos/expedicao',
    7: '/modulos/administracao',
    8: '/modulos/config',
  };
  
  // caso não logado e sem master
  const targetRoute = routes[num];
  
  if (!state.logado && !state.chvkey || !state.chkdb)  {
    setCardNegadoPage(true);
  } else if (targetRoute) {
    goto(targetRoute);
  }
},[goto, state.logado, state.chvkey, state.chkdb]
);

const imagemLogoEmpresa =
  state.id_logo_emp > 0 && state.logo_svg_emp?.trim()
  ? state.logo_svg_emp
  : lg_def_ope_default;

 
const imagemLogin =
  !state.logado
    ? btn_def_ope_q_login
    : state.id_img_user > 0 && state.img_svg_user
      ? state.img_svg_user
      : btn_def_q_avatar;
  
return (
  <ThemeProvider theme={theme}>
    <LayoutHome
      //** Logo da Sistema/Empresa ou do Sistema 
      pminheight={"80px"}
      pwidth={"220px"}
      imgbtnlogo={imagemLogoEmpresa}
      titbtnlogo="Quen Somos..."
      onClickbtnlogo={handlerCardLogo}

      /** Titulo da Pagina */
      titulopg="Home"

      /** Botão Help da Pagina*/
      imgbtnhlppg={btn_def_q_help}
      titbtnhlppg="Help Page..."
      onClickbtnhlppg={handlerCardHlpPage}

      /** Botão Login da Pagina*/
      imgbtnloginon={imagemLogin}
      titbtnloginon={state.logado ? 'Login-on...' : 'Login...'}
      disabledloginon={chavemst}       /** se master estiver ativa o disabled  */
      onClickbtnloginon={() => {
        if (!state.logado) {
            goto('/login');
        } else {
          handlerCardHlpBtnLogin();   
        }
      }}

      /** Botão Logo-off Senha Login  */
      loginoff={chavelogin}
      imgbtnloginoff={btn_def_ope_q_login}
      titbtnloginoff={"Segurança..."}
      onClickbtnloginoff={() => {
        if (state.logado) {
          setIsMsgChvLogin(true);
        } 
          setNotOperation(true);
          setMsgPanelBottom('Sistema Inoperante!');
        }
      }
 
      /**  Botão Logo-off Senha Master */
      masteroff={chavemst}
      imgbtnmasteroff={btn_def_q_master}
      titbtnmasteroff={"Segurança..."}
      onClickbtnmasteroff={() => {
        if (state.chvkey) {
          setIsMsgChvkey(true);
        } else {
          setNotOperation(true);
          setMsgPanelBottom('Sistema Inoperante!');
        }
      }}
  
      /* Botão para Resgatar Acesso (resgate) resgatar Senha de Acesso ou Token de Acesso */
      imgbtnresgate={btn_def_q_resgatar}
      titbtnresgate="Resgatar Acesso..."
      onClickbtnresgate={() => {
        if (!state.logado) {
          goto('/resgate');
        } else {
          setNotOperation(true);
          setMsgPanelBottom('Sistema Inoperante!');
        }
      }}

      // Botão para mudar o tema (dark/light)  
      onchange={ToggleTheme}
      ischeck={ischeck}
    >

    <ContentItensBody>
      {/* Monta os botões de acesso modulos do sistema (VISITANTES)*/ }
      <ContentCustonImgPage
        num={1}
        open={true}
        pxheight={'100px'}
        pheight={'100px'}
        pwidth={'100px'}
        imgbtn={pnl_def_mod_visitante}
        titlebtn={'Modulo Visitantes..'}
        onclick={() => { 
          if (!state.chkdb) {
            handlerClicEventNegadoPage(1);            
          }
          goto("/modulos/visitante") }}
        onMouseEnter={() => setMsgPanelBottom('Abre Modulo Visitante.' )}
        onMouseLeave={() => setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...' )}
      />

      {/* Monta os botões de acesso modulos do sistema (RECEPÇAO)*/ }
      <ContentCustonImgPage
        num={2}
        open={true}
        pxheight={'100px'}
        pheight={'100px'}
        pwidth={'100px'}
        imgbtn={pnl_def_mod_recepcao}
        titlebtn={'Modulo Recepção...'}
        onclick={() => {
          if ( (state.chvkey && state.auth_admin !== '') || 
            (state.modulo === 'Recepção' && state.logado && state.auth !== '') ) {
            goto("/modulos/recepcao");
          } else {
            handlerClicEventNegadoPage(2);
          }
        }}
        onMouseEnter={() => setMsgPanelBottom('Abre Modulo Recepção.')}
        onMouseLeave={() => {
          if (!state.logado && !state.chvkey) setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...');
        }}
      />

      {/* Monta os botões de acesso modulos do sistema (DESIGN)*/ }
      <ContentCustonImgPage
        num={3}
        open={true}
        pxheight={'100px'}
        pheight={'100px'}
        pwidth={'100px'}
        imgbtn={pnl_def_mod_design}
        titlebtn={'Modulo Design...'}
        onclick={() => {
          if ( (state.chvkey && state.auth_admin !== '') || 
            (state.modulo === 'Design' && state.logado && state.auth !== '') ) {
            goto('/modulos/design');
          } else {
            handlerClicEventNegadoPage(3);
          }
        }}
        onMouseEnter={() => setMsgPanelBottom('Abre Modulo Design.')}
        onMouseLeave={() => {
          if (!state.logado && !state.chvkey) setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...');
        }}
      />
      {/* Monta os botões de acesso modulos do sistema (PRODUÇÃO)*/ }
      <ContentCustonImgPage
        num={4}
        open={true}
        pxheight={'100px'}
        pheight={'100px'}
        pwidth={'100px'}
        imgbtn={pnl_def_mod_producao}
        titlebtn={'Modulo Produção...'}
        onclick={() => {
          if ( (state.chvkey && state.auth_admin !== '') || 
            (state.modulo === 'Produção' && state.logado && state.auth !== '') ) {
            goto('/modulos/producao');
          } else {
            handlerClicEventNegadoPage(4);
          }
        }}
        onMouseEnter={() => setMsgPanelBottom('Abre Modulo Produção.')}
        onMouseLeave={() => {
          if (!state.logado && !state.chvkey) setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...');
        }}
      />
      {/* Monta os botões de acesso modulos do sistema (ACABAMENTO)*/ }
      <ContentCustonImgPage
        num={5}
        open={true}
        pxheight={'100px'}
        pheight={'100px'}
        pwidth={'100px'}
        imgbtn={pnl_def_mod_acabamento}
        titlebtn={'Modulo Acabamento...'}
        onclick={() => {
          if ( (state.chvkey && state.auth_admin !== '') || 
            (state.modulo === 'Acabamento' && state.logado && state.auth !== '') ) {
            goto('/modulos/acabamento');
          } else {
            handlerClicEventNegadoPage(5);
          }
        }}
        onMouseEnter={() => setMsgPanelBottom('Abre Modulo Acabamento.')}
        onMouseLeave={() => {
          if (!state.logado && !state.chvkey) setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...');
        }}
      />
      {/* Monta os botões de acesso modulos do sistema (EXPEDIÇÃO)*/ }
      <ContentCustonImgPage
        num={6}
        open={true}
        pxheight={'100px'}
        pheight={'100px'}
        pwidth={'100px'}
        imgbtn={pnl_def_mod_expedicao}
        titlebtn={'Modulo Expedição...'}
        onclick={() => {
          if ( (state.chvkey && state.auth_admin !== '') || 
            (state.modulo === 'Expedição' && state.logado && state.auth !== '') ) {
            goto('/modulos/expedicao');
          } else {
            handlerClicEventNegadoPage(6);
          }
        }}
        onMouseEnter={() => setMsgPanelBottom('Abre Modulo Expedição.')}
        onMouseLeave={() => {
          if (!state.logado && !state.chvkey) setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...');
        }}
      />
      {/* Monta os botões de acesso modulos do sistema (ADMIMINISTRAO)*/ }
      <ContentCustonImgPage
        num={7}
        open={true}
        pxheight={'100px'}
        pheight={'100px'}
        pwidth={'100px'}
        imgbtn={pnl_def_mod_administracao}
        titlebtn={'Modulo Administração...'}
        onclick={() => {
          if ( (state.chvkey && state.auth_admin !== '') || 
            (state.modulo === 'Administração' && state.logado && state.auth !== '') ) {
            goto('/modulos/administracao');
          } else {
            handlerClicEventNegadoPage(7);
          }
        }}
        onMouseEnter={() => setMsgPanelBottom('Abre Modulo Administração.')}
        onMouseLeave={() => {
          if (!state.logado && !state.chvkey) setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...');
        }}
      />
      {/* Monta os botões de acesso modulos do sistema (CONFIG)*/ }
      <ContentCustonImgPage
        num={8}
        open={true}
        pxheight={'100px'}
        pheight={'100px'}
        pwidth={'100px'}
        imgbtn={pnl_def_mod_config}
        titlebtn={'Cadastros Config...'}
        onclick={() => {
          if ( (state.chvkey && state.auth_admin !== '') || 
            (state.modulo === 'Config' && state.logado && state.auth !== '') ) {
            goto('/modulos/config');
          } else {
            handlerClicEventNegadoPage(8);
          }
        }}
        onMouseEnter={ () => {
          if ( (!state.logado && !state.chvkey && state.modulo !== 'Config' && state.modulo !== 'Master' ) )
            setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...');
          else 
            setMsgPanelBottom('✅ Abre Modulo Config.');  
         }}
        onMouseLeave={ () => {
          if (!state.logado && !state.chvkey ) 
            setMsgPanelBottom('❌ Aguardando Acesso ao Sistema...');
          else 
            setMsgPanelBottom('✅ Acesso Permitido...');  
          }}
      />
    </ContentItensBody>

    <Pg.DivisionPgHztal />
      
    {/* Monta o painel bootom */}
    <ContentSidePagePanelBotton 
      bordas="3px" 
      open={true} 
      pwidth="100%"
      >
      {/* Mostra mensagem painel bootom */}
      <ContentSideMsgPagePanelBotton bordas="3px" label={'Menssagens : '} msg={msgpanelbottom} />
        
      {/* Refaz a pagina atual */}
      <ContentSidePageBottonLabel  open={true} istitl={true} title={'Refrescar.: '} >
        {/* Mostra, ação botão a esquerda do Panel */}
        <ContentSidePageBottonButton
          pxheight={'40px'}
          img={btn_def_q_refrescar}
          titbtn={'Refrescar...'}
          onClick={() => goto('/')}
          onMouseEnter={() => setMsgPanelBottom('Refrescar a Page...') }
          onMouseLeave={() => setMsgPanelBottom('Restaurar Page...') } />
          </ContentSidePageBottonLabel>
          
          <div><label>ATENÇÃO...{messagebottom}</label></div>
        </ContentSidePagePanelBotton>
        
        {/** Abre Modal para Acesso Negado na pagina atual */ }
        {cardnegadopage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'30%'}
            pheight={'35%'}
            imgbm={btn_def_q_close}
            titbm={"Fechar..."}
            titulo={'Acesso Negado.'}
            onclose={() => setCardNegadoPage(false)}>
            <CardImgNeg
              imgcard={pnl_def_ope_negado}
              pminheight={'100px'}
              pwidth={'100px'}
              onclickimg={() => setCardNegadoPage(false)} />
          </PageModal>
          ) : null 
        }
        
        {/** Modal dos Botões Hearders da Pagina */ }
        {/** Abre Modal help ao clicar na imagem LOGO da Pagina */ }
        {cardlogo ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={btn_def_q_close}
            titbm="Fechar..."
            titulo={'Home Sistema.'}
            onclose={() => setCardLogo(false)}>
            <CardHlpHomeLogo imghlplogo={imagemLogoEmpresa} onclosesair={() => setCardLogo(false)} /> 
          </PageModal>
          ) : null 
        }

        {/* Abre Modal help ao clicar no Botão Help da Pagina */ }
        {cardhplpage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={btn_def_q_close}
            titbm="Fechar..."
            titulo={'Help Conteúdo Home.'}
            onclose={() => setCardHlpPage(false)}>
            <CardHlpHomePage imgcardpage={lg_def_ope_default} onclosesair={() => setCardHlpPage(false)} />
          </PageModal>
          ) : null 
        }

        {/* Abre Modal ao clicar no Botão Login */ }
        {cardhplbtnlogin ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={btn_def_q_close}
            titbm="Fechar..."
            titulo={'Help Conteúdo Home.'}
            onclose={() => setCardHlpBtnLogin(false)}>
            <CardHlpBtnLoginModPage
              pminheight="110px"
              pwidth="130px"
              imgcardpage={ imagemLogin }
              onclosesair={() => setCardHlpBtnLogin(false)} 
            />
          </PageModal>
          ) : null 
        }

        {/* Abre Modal da fazer o logo-off do Acesso Senha LOGIN */ }
        { ismsgchvLogin && (
          <PageModal
            ptop='330px'
            pwidth={'400px'}
            pheight={'44%'}
            imgbm={btn_def_q_close}
            titbm="Fechar..."
            titulo={'Sistema Logado.'}
            onclose={() => setIsMsgChvLogin(false)} >
            <CardLogoffLogin
              pptop="300px"
              bordas="4px"
              pxheight="57px"
              pxwidth="65px"
              imgpnl={pnl_def_ope_login}
              onclickpnl={() => {}}
              open={true}
              titulo={"Acesso Logo-off."}
              msg={"Confirme opção de Logoff."}
              labelConfirm={"SIM para Logoff."}
              labelCancel={"NÃO para Abortar."}
              seconds={30}
              resetKey={cardlogo ? 1 : 0} // reinicia ao abrir/fechar
              onConfirm={() => {
                logoutLogin(dispatch);
                setChaveLogin(false);
              }}
              onCancel={() => setIsMsgChvLogin(false)}
              onClose={() => setIsMsgChvLogin(false)}
              />
          </PageModal>
        )}

        {/* Abre Modal da fazer o LOGO-OFF Acesso Senha MASTER */ }
        { ismsgchvkey ? (
          <PageModal
            ptop={"330px"}
            pwidth={"400px"}
            pheight={"44%"}
            imgbm={btn_def_q_close}
            titbm="Fechar..."
            titulo={"Abortar Master."}
            onclose={() => setIsMsgChvkey(false)} > {/** devera ser setIsLogoff */} 
            {/** deverrá ser conforme o solicitado de acordo com o setado do botão : setIsLogin ou setIsMaster */} 
            <CardLogoffMaster 
              pptop={"300px"}
              bordas={"4px"}
              pxheight={"57px"}
              pxwidth={"65px"}
              imgpnl={pnl_def_ope_master}
              onclickpnl={() => {}}
              open={true}
              titulo={"Acesso Logo-off."}
              msg={"Confirme opção de Logoff."}
              labelConfirm={"SIM para Logoff."}
              labelCancel={"NÃO para Abortar."}
              width={"45px"}
              height={"45px"}
              seconds={30}
              resetKey={chavemst ? 1 : 0} // reinicia ao abrir/fechar
              onConfirm={() => {
                logoutMaster(dispatch);
                setIsMsgChvkey(false);
              }}
            onCancel={() => setIsMsgChvkey(false)}
            onClose={() => setIsMsgChvkey(false)}
            />
          </PageModal>
        ) : null}
        
        {/* Abre Modal da Verificação do Sistema (fechável) */ }
        {showsystemcheckmodal ? (
          <PageModal
            ptop={'45%'}
            pwidth={'50%'}
            pheight={'50%'}
            imgbm={btn_def_q_close}
            titbm="Fechar..."
            titulo={'Verificação de Checagem do Sistema'}
            onclose={() => setShowSystemCheckModal(false)}>
            <CardCheckingSystema
              messages={systemMessages}
              systemOk={systemOk}
              onClose={() => setShowSystemCheckModal(false)}
              onAutoCloseCountdown={(secondsLeft: number) => {
                if (secondsLeft <= 0) setShowSystemCheckModal(false);
              }}/>
          </PageModal>
          ) : null
        }
        
        {/* Abre Modal da anunciando a Verificação "negado / não pode iniciar" do Sistema (fechável) */ }
        {!showsystemcheckmodal && showInitSystem ? (
          <PageModal
            ptop={'10%'}
            pwidth={'50%'}
            pheight={'50%'}
            imgbm={btn_def_q_close}
            titbm="Fechar..."
            titulo={'Show Verificação do Sistema'}
            onclose={() => setInitShowSystem(false)} >
            <CardImgNeg
              imgcard={pnl_def_ope_negado}
              pminheight={'100px'}
              pwidth={'100px'}
              onclickimg={() => setInitShowSystem(false)} />
              <ContentSysMainItens>
                <form>
                  <p> ⛔ O SISTEMA NÃO PODE SER INICIADO.</p>
                </form>
              </ContentSysMainItens>
            <AutoCloseTimer onClose={() => setInitShowSystem(false)} seconds={5} />
          </PageModal>
          ) : null
        }
        
        {/* Abre Modal da anunciando "negado / não pode operar" o Sistema (fechável) */ }
        {notOperation ? (
          <PageModal
            ptop={'10%'}
            pwidth={'50%'}
            pheight={'50%'}
            imgbm={btn_def_q_close}
            titbm="Fechar..."
            titulo={'Acesso Negado'}
            onclose={() => setNotOperation(false)}
            >
            <CardImgNeg
              imgcard={pnl_def_ope_negado}
              pminheight={'120px'}
              pwidth={'120px'}
              onclickimg={() => setNotOperation(false)}
            />
            <ContentSysMainItens>
              <form>
                <p> '⛔ ACESSO SISTEMA INOPERANTE.'</p>
                <br />
                <p> Entre em contato com suporte. </p>
              </form>
            </ContentSysMainItens>
            <AutoCloseTimer onClose={() => setNotOperation(false)} seconds={5} />
          </PageModal>
        ) : null}

        <div>{ state.chvkey ? (<p>......ChvKey : true </p>) : (<p>.......ChvKey : false </p>)}</div>
        <div>{ state.logado ? (<p>......Logado : true </p>) : (<p>.......Logado : false </p>)}</div>
    </LayoutHome>
  </ThemeProvider>
  );
};

export default Home;
