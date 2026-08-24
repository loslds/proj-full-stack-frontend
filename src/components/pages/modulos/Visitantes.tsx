// C:\repository\proj-full-stack-frontend\src\components\pages\Home.tsx
import React from 'react';
//import * as Pg from '../stylePages';
import { useNavigate } from 'react-router-dom';
// Para mudança do thema (dark/light)  
import { ThemeProvider } from 'styled-components';
import light from '../../../themes/light';
import dark from '../../../themes/dark';
// layout page
import { LayoutVisitante } from "../../layouts/LayoutVisitante";
// uso do context
//import { status, Dispatch } from "react";
import { useAcessoContext } from "../../contexts/ContextAcesso";
// painel Maim da Pagina ->
import { ContentCardPageMain } from "../../ContentCardPageMain";

import { BarMenuVisitante } from "../../sidebars/visitante/BarMenuVisitantes";

import { DivisionPgHztal } from "../../stylePages";



/**img da Pagina MODAL */ 
/** component ação botão para fechar a pagina MODAL*/
import btn_def_q_close from '../../assets/defaults/btn/btn_def_q_close.svg';
/** component imagem painel para acesso negado pagina MODAL*/
import pnl_def_ope_negado from '../../assets/defaults/pnl/pnl_def_ope_negacao.svg';

// Heard
import lg_def_mod_visitante from "../../assets/defaults/lg/lg_def_mod_visitante.svg";

import { CardHlpHomeLogo } from '../../../cards/CardHlpHomeLogo';
import { CardHlpHomePage } from '../../../cards/CardHlpHomePage';
import { CardHlpLoginPage } from '../../../cards/CardHlpLoginPage';




// main page
import { ContentItensBody } from '../../ContentItensBody';
import { ContentCustonImgPage } from '../../ContentCustonImgPage';


// bottom page
import { PageModal } from './../PageModal';
import { ContentSysMainItens } from '../../../cards/ContentSysMainItens';
import { AutoCloseTimer } from '../../AutoCloseTimer';
import { ContentSidePagePanelBotton } from '../../sidebars/ContentSidePagePanelBotton';
import { ContentSidePageBottonLabel } from '../../sidebars/ContentSidePageBottonLabel';
import { ContentSidePageBottonButton } from '../../sidebars/ContentSidePageBottonButton';
import { ContentSideMsgPagePanelBotton } from '../../sidebars/ContentSideMsgPagePanelBotton';
/** component ação botão help */

import { CardImgNeg } from '../../../cards/CardImgNeg';
import { CardLogoffMaster } from '../../../cards/CardLogoffMaster';
import { CardLogoffLogin } from '../../../cards/CardLogoffLogin';

/** imgs do header */ 
//** BOTÃO HELP PAGINA */
/** component ação botão Help Pagina  */ 
import btn_def_q_help from "../../assets/defaults/btn/btn_def_c_help.svg";

//** BOTÃO LOGIN */
/** component ação botão Login e logoff da Pagina */ 
/** se não tiver logado */
import btn_def_ope_q_login from "../../assets/defaults/btn/btn_def_ope_q_login.svg";
/** se tiver logado  sem avatar*/
import btn_def_q_avatar from "../../assets/defaults/btn/btn_def_q_avatar.svg";

/** component ação imagem Login e logoff modal */ 
import pnl_def_ope_login from '../../assets/defaults/pnl/pnl_def_ope_login.svg';
/** component ação botão limpar acesso Master */ 
import btn_def_q_master from    '../../assets/defaults/btn/btn_def_q_master.svg';
/** component ação imagem Master na pagina do Logoff modal */ 
import pnl_def_ope_master from '../../assets/defaults/pnl/pnl_def_ope_master.svg'
/** component ação para fazer o logoff em MODAL Login e Master  Atualizador do context*/  
import { logoutMaster } from '../../contexts/helpers/logoutMaster';
import { logoutLogin } from '../../contexts/helpers/logoutLogin';
/** component MODAL ação de abrir e acionar o MODAL LOGOFF na Hearder da Pagina */
import btn_def_q_voltar from "../../assets/defaults/btn/btn_def_q_voltar.svg"
//import btn_def_q_continuar from "../../assets/defaults/btn/btn_def_q_continuar.svg"

/** component ação botão para resgatar acesso */ 
import btn_def_q_resgatar from '../../assets/defaults/btn/btn_def_q_resgatar.svg';
/** img do main painel */ 
/** component ação imagem Panel Visitante da pagina HOME */ 

/** img do painel Bottom */ 
/** component ação botão para refrescar a pagina */
import btn_def_q_refrescar from '../../assets/defaults/btn/btn_def_q_refrescar.svg';
import { useChaveMaster } from '@/components/contexts/hooks/useChaveMaster';



const Visitante : React.FC = () => {
  
  const { state } = useAcessoContext();

  const [theme, setTheme] = React.useState(light);
  // mudança em THEME
  const [ischeck, setIscheck] = React.useState(false);
  // menssagem em heard do Panel Booton
  const [msgpanelbottom, setMsgPanelBottom] = React.useState('');
  // menssagem em Panel Booton
  const [messagebottom, setMessageBottom] = React.useState('');
  // SET PARA ABERTURA DE MODAL DA PAGINA
  // Botão para Abrir Help Modal LOGO Page
  const [cardlogo, setCardLogo] = React.useState(false);
  // Botão para Abrir Help Modal da Pagina
  const [cardhplpage, setCardHlpPage] = React.useState(false);
  // Botão para Abrir Help Modal do Login na Pagina
  const [cardhplbtnlogin, setCardHlpBtnLogin] = React.useState(false);
  // Botão para Abrir Help Acesso Negado na Pagina
  const [cardnegadopage, setCardNegadoPage] = React.useState(false);


  // Help Botão Login
  const [iscardhlploginmodpage, setIsCardHlpLoginModPage] = React.useState(false); //Set para modal Data-User LOGADO
    
  // Botão para LOGO-OFF do Login
  const [ismsgchvLogin, setIsMsgChvLogin] = React.useState(false); //Set para modal Botão logoff-login
  const [chavelogin, setChaveLogin ] = React.useState(false); // Abre Botão LOGOFF LOGIN
  // Botão para LOGO-OFF da Master
  const [ismsgchvkey, setIsMsgChvkey] = React.useState(false); //Set para modal Botão logoff  master
  const [chavemst, setChaveMst ] = React.useState(false); //Abre Botão LOGOFF MASTER
  // Set para operação invalida na pagina
  const [notOperation, setNotOperation] = React.useState(false); //Set para modal Local Não Operável
  //** Abre ao clicar na E NÃO TEM aCESSO AO sistema */
  const handlerCardNotOperation = React.useCallback(() => setCardHlpPage((old) => !old), []);  // Abre Botão Mensagem Não Operável
  //** Abre ao clicar na Logo do Sistema ou Empresa */
  const handlerCardLogo = React.useCallback(() => setCardLogo((old) => !old), []);
  //** Abre ao clicar no botão help da Pagina */
  const handlerCardHlpPage = React.useCallback(() => setCardHlpPage((old) => !old), []);
  //** Abre ao clicar no botão Login */
  const handlerCardHlpBtnLogin = React.useCallback(() => setCardHlpBtnLogin((old) => !old), []);

  

  

  // Set para botão da mudança do Tema em pagina
  const ToggleTheme = () => {
    setTheme(theme.name === 'dark' ? light : dark);
    setIscheck((prev) => !prev);
  };

  // navegação da Paginas
  const navigate = useNavigate();
  const goto = React.useCallback((path: string) => navigate(path), [navigate]);

  



  const imagemLogoEmpresa =
    state.id_logo_emp > 0 && state.logo_svg_emp?.trim()
    ? state.logo_svg_emp
    : lg_def_mod_visitante;

  
  const imagemLogin =
    !state.logado
      ? btn_def_ope_q_login
      : state.id_img_user > 0 && state.img_svg_user
        ? state.img_svg_user
        : btn_def_q_avatar;
    

  return (
    <ThemeProvider theme={theme}>
      <LayoutVisitante
        //** Logo da Sistema/Empresa ou do Sistema 
        imgbtnlogo={imagemLogoEmpresa}
        titbtnlogo="Quen Somos..."
        onClickbtnlogo={handlerCardLogo}

        /** Titulo da Pagina */
        titulopg="Visitantes"

        /** Botão Help da Pagina*/
        imgbtnhlppg={btn_def_q_help}
        titbtnhlppg="Help Page..."
        onClickbtnhlppg={handlerCardHlpPage}



        /** Botão para LOGO-OFF do Login Caso logado ou não*/
        imgbtnloginon={imagemLogin}
        titbtnloginon={state.logado ? 'Dados Users...' : 'Sintese Login...'}
        /** se master estiver ativa o disabled  */
        disabledloginon={ chavemst }
        onClickbtnloginon={() => {
          if (state.logado) {
            setCardDataLogado(true);
            setMsgPanelBottom('Data-Cebter Logado Sistema');
          } else {
            handlercardloginpg();
            setMsgPanelBottom('Help da Sintese do Login Sistema');
          }
        }}

        /** Botão para LOGO-OFF do Master Caso logado com Master*/
        loginoff={chavelogin}
        imgbtnloginoff={btn_def_ope_q_login}
        titbtnloginoff={"Segurança..."}
        onClickbtnloginoff={() => {
          if (state.logado) {
            setIsMsgChvkey(true);
          } else {

            setNotOperation(true);
            setMsgPanelBottom('Sistema Inoperante!');
          }
        }}
 
      /* Botão para sair Modo Modo Master (chave de acesso)*/
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
        if (state.chkdb) {
          goto('/resgate');
        } else {
          setNotOperation(true);
          setMsgPanelBottom('Sistema Inoperante!');
        }
      }}

      




// //* Logo da pagina Visitantes do Sistema
//         imgsys={lg_def_mod_visitante}
//         titbtnsys="Modulo Visitante..."
//         onclicksys={ handlerCardLogo }
//         //* Titulo da Pagina 
//         titlepg="Visitante"
//         //* Botão Help da Pagina
//         imgbtnhlppg={bt_helppg}
//         titbtnhlppg="Help Page..."
//         onclickhlppg={ handlerCardHlpPage }


        // $imglgon={btn_def_q_logo_on}
        // $imglgoff={btn_def_q_logo_off}
        // $logonoff={islogin}
        // titbtnlgonoff={state.logado ? "Usuário logado" : "Usuário não logado"}
        // onclicklgooff={() => {
        //   if (state.logado) {
        //     goto('/login');
        //   } else {
        //     setIsLogin(true);
        //     setMsgPanelBottom('Sistema inoperante!');
        //   }
        // }}


        // imgbtnaborta={bt_abortar}
        // titbtnaborta="Abortar..."
        // onclickaborta={ goto('/') }



        // Botão para mudar o tema (dark/light)  
        onchange={ToggleTheme}
        ischeck={ischeck}
      >





        <ContentCardPageMain open={true}>
          </ContentCardPageMain>

          <DivisionPgHztal />
          {state.logado ? (  
            <h1>BarMenuVisitantes</h1>
            //<BarMenuVisitantes />
          ) : (
            <h1>PagBanenrSistema</h1>
            // <PagBanenrSistema/>
          ) }
          <DivisionPgHztal />

          <ContentSideMsgPagePanelBotton bordas="3px" label={'Menssagens : '} msg={msgpanelbottom} />
        
            {/* Refaz a pagina atual */}
            <ContentSidePageBottonLabel  open={true} istitl={true} title={'Refrescar.: '} >
              {/* Mostra, ação botão a esquerda do Panel */}
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={btn_def_q_refrescar}
                titbtn={'Refrescar...'}
                onClick={() => goto('/Visitante')}
                onMouseEnter={() => setMsgPanelBottom('Refrescar a Page...') }
                onMouseLeave={() => setMsgPanelBottom('Restaurar Page...') }
              />
              </ContentSidePageBottonLabel>
              <div><label>ATENÇÃO...{messagebottom}</label></div>





            <ContentSidePageBottonLabel
              open={true}
              istitl={true}
              title="Refrescar.: "
            >
              <ContentSidePageBottonButton
                pxheight="40px"
                img={btn_def_q_voltar}
                titbtn="Refrescar..."
                onClick={() => goto('/visitantes')}
                onMouseEnter={() => setMsgPanelBottom( "Refresca a Pagina...")}
                onMouseLeave={() => setMsgPanelBottom('Refresca a Página.') }
              />
            </ContentSidePageBottonLabel>
            <div>
              <label>{messagebottom}</label>
            </div>
          </ContentSidePagePanelBotton>
        {/** Abre Modal help ao clicar na imagem LOGO da Pagina */ }


        {cardhplpage ? (
          <PageModal
            ptop={'1%'}
            pwidth={'80%'}
            pheight={'95%'}
            imgbm={bt_close}
            titbm="Fechar..."
            titulo={'Help Conteúdo Visitante.'}
            onclose={() => setCardHlpPage(false)}
          >
            <CardHlpVisitanteLogo
              imghlplogo={lg_def_mod_visitante} 
              onclosesair={() => setCardLogo(false)} 
            /> 
          </PageModal>
        ) : null}



        {islogin ? (
          <PageModal
            ptop={'10%'}
            pwidth={'50%'}
            pheight={'50%'}
            imgbm={btn_def_q_close}
            titbm="Fechar..."
            titulo={'Acesso Negado'}
            onclose={() => setIsLogin(false)}
          >
            <CardImgNeg
              imgcard={pnl_def_ope_negado}
              pminheight={'120px'}
              pwidth={'120px'}
              onclickimg={() => setIsLogin(false)}
            />
            <ContentSysMainItens>
            <form>
                <p> '⛔ ACESSO SISTEMA INOPERANTE.'</p>
                <br />
                <p> É Necessário logar no sistema. </p>
              </form>
            </ContentSysMainItens>
            <AutoCloseTimer onClose={() => setNotOperation(false)} seconds={5} />
          </PageModal>
        ) : null}        
      </LayoutVisitante>
    </ThemeProvider>
  );
};

export default Visitante;

