
// C:\repository\proj-full-stack-frontend\src\components\pages\Visitante.tsx

import React from 'react';
//import * as Pg from '../../stylePages';
import { useNavigate } from 'react-router-dom';
// theme
import { ThemeProvider } from 'styled-components';
import light from '../../../themes/light';
import dark from '../../../themes/dark';
// layout page
// layout page
import LayoutVisitante from "../../layouts/LayoutVisitante";
// uso do context
//import { status, Dispatch } from "react";
import { useAcessoContext } from "../../contexts/ContextAcesso";
/** component ação para fazer o logoff em MODAL Login e Master  Atualizador do context*/  
import { logoutMaster } from '../../contexts/helpers/logoutMaster';
import { logoutLogin } from '../../contexts/helpers/logoutLogin';
// painel Maim da Pagina ->
import { ContentCardPageMain } from "../../ContentCardPageMain";

//import { BarMenuVisitante } from "../../sidebars/visitante/BarMenuVisitantes";

import { DivisionPgHztal } from "../../stylePages";
// bottom page
import { PageModal } from '../PageModal';
import { AutoCloseTimer } from '../../AutoCloseTimer';
import { ContentSidePagePanelBotton } from '../../sidebars/ContentSidePagePanelBotton';
import { ContentSidePageBottonLabel } from '../../sidebars/ContentSidePageBottonLabel';
import { ContentSidePageBottonButton } from '../../sidebars/ContentSidePageBottonButton';
import { ContentSideMsgPagePanelBotton } from '../../sidebars/ContentSideMsgPagePanelBotton';
/**img da Pagina MODAL */ 
/** component ação botão para fechar a pagina MODAL*/
import btn_def_q_close from '../../../assets/defaults/btn/btn_def_q_close.svg';
/** component imagem painel para acesso negado pagina MODAL*/
import pnl_def_ope_negado from '../../assets/defaults/pnl/pnl_def_ope_negacao.svg';
// Heard
import lg_def_ope_default from "../../../assets/defaults/lg/lg_def_ope_default.svg";
import { CardHlpHomeLogo } from '../../../cards/CardHlpHomeLogo';
import { CardHlpHomePage } from '../../../cards/CardHlpHomePage';

/** component ação botão help Hearders*/
import { CardImgNeg } from '../../../cards/CardImgNeg';
// Help Botão Login
import { CardHlpBtnLoginModPage } from '../../../cards/CardHlpBtnLoginModPage';
// Modal LOGO-OFF SENHA LOGIN
import { CardLogoffLogin } from '../../../cards/CardLogoffLogin';
// Modal LOGO-OFF SENHA MASTER
import { CardLogoffMaster } from '../../../cards/CardLogoffMaster';

/** IMAGENS DOS BOTÔES PAGINA */
/** component ação Botão Help Pagina  */ 
import btn_def_q_help from ".../../../assets/defaults/btn/btn_def_c_help.svg";
//** component ação BOTÃO LOGIN */
import btn_def_ope_q_login from "../../../assets/defaults/btn/btn_def_ope_q_login.svg";
/** se tiver logado sem avatar*/
import btn_def_q_avatar from "../../../assets/defaults/btn/btn_def_q_avatar.svg";
/** component ação limpar Login (logoff modal) */ 
import pnl_def_ope_login from '../../../assets/defaults/pnl/pnl_def_ope_login.svg';
/** component ação limpar Master (logoff modal)*/ 
import btn_def_q_master from    '../../../assets/defaults/btn/btn_def_q_master.svg';
/** component ação imagem Master na pagina do Logoff modal */ 
import pnl_def_ope_master from '../../../assets/defaults/pnl/pnl_def_ope_master.svg'
/** component ação botão Home  Pagina  */ 
import btn_def_q_home from "../../../assets/defaults/btn/btn_def_q_home.png";



/** component MODAL ação de abrir e acionar o MODAL LOGOFF na Hearder da Pagina */
//import btn_def_q_voltar from "../../assets/defaults/btn/btn_def_q_voltar.svg"
//import btn_def_q_continuar from "../../assets/defaults/btn/btn_def_q_continuar.svg"



/** img do painel Bottom */ 
/** component ação botão para refrescar a pagina */
import btn_def_q_refrescar from '../../assets/defaults/btn/btn_def_q_refrescar.svg';



///////////////////////////////////////////////////////////////
const Visitante : React.FC = () => {
  
  const { state, dispatch } = useAcessoContext();

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
    
  // Botão para LOGO-OFF do Login
  const [ismsgchvLogin, setIsMsgChvLogin] = React.useState(false); //Set para modal Botão logoff-login
  const [chavelogin, setChaveLogin ] = React.useState(false); // Abre Botão LOGOFF LOGIN
  // Botão para LOGO-OFF da Master
  const [ismsgchvkey, setIsMsgChvkey] = React.useState(false); //Set para modal Botão logoff  master
  const [chavemst, setChaveMst ] = React.useState(false); //Abre Botão LOGOFF MASTER

 
  //** Abre ao clicar na E NÃO TEM aCESSO AO sistema */
  // navegação da Paginas
  const navigate = useNavigate();
  const goto = React.useCallback((path: string) => navigate(path), [navigate]);

  // Set para botão da mudança do Tema em pagina
  const ToggleTheme = () => {
    setTheme(theme.name === 'dark' ? light : dark);
    setIscheck((prev) => !prev);
  };
  /////////////////////////////////
React.useEffect(() => {
  
  setMessageBottom("");

  dispatch({ type: "page", payload: "Visitante" });
  dispatch({ type: "modulo", payload: "Visitantes" });
  dispatch({ type: "aplicacao", payload: "OPÇÃO" });
  
  // ✅ 1) Se CHVKEY estiver ativo, NÃO pode zerar nem bloquear.
  if (state.chvkey) {
    setMsgPanelBottom('Acesso "Master" ativo.');
    setMessageBottom("Aguardando Seleção...");
    return;
  }
  
  // ✅ 2) Usuário logado (login normal)
  if (state.logado) {
    setMsgPanelBottom(`Acesso MODULO ["${state.modulo}"] do Sistema...`);
    setMessageBottom("Aguardando Seleção...");
    return;
  }
}, [state.chkdb, state.logado, state.chvkey, state.modulo, dispatch]);

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
   
    // apresentação de Imagens cobforme Login
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

        /** Botão Login da Pagina*/
        imgbtnloginon={imagemLogin}
        titbtnloginon={state.logado ? 'Dados Users...' : 'Sintese Login...'}
        disabledloginon={ chavemst } /** se master estiver ativa o disabled  */
        onClickbtnloginon={handlerCardHlpBtnLogin}

        /** Botão Logo-off Senha Login  */
        loginoff={chavelogin}
        imgbtnloginoff={btn_def_ope_q_login}
        titbtnloginoff={"Segurança..."}
        onClickbtnloginoff={() => {
          if (state.logado) {
            setIsMsgChvLogin(true);
          } else {
            setCardNegadoPage(true);
            setMsgPanelBottom('Operação Negada!');
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
            setCardNegadoPage(true);
            setMsgPanelBottom('Operação Negada!');
          }
        }}
  
        /* Botão para vOLTAR A HOME */
        imgbtnhome={btn_def_q_home}
        titbtnhome={"Inicio...HOME"}
        onClickbtnhome={ () => goto('/')}

        // Botão para mudar o tema (dark/light)  
        onchange={ToggleTheme}
        ischeck={ischeck}
      >

        <ContentCardPageMain open={true}>

          <DivisionPgHztal />
          {state.logado ? (  
            <h1>BarMenuVisitantes</h1>
            //<BarMenuVisitantes />
          ) : (
            <h1>PagBanenrSistema</h1>
            // <PagBanenrSistema/>
          ) }
          <DivisionPgHztal />

        </ContentCardPageMain>

        {/* Monta o painel bootom */}
        <ContentSidePagePanelBotton 
          bordas="3px" 
          open={true} 
          pwidth="100%"
        >
          {/* Mostra mensagem painel bootom */}
          <ContentSideMsgPagePanelBotton 
            bordas="3px" 
            label={'Menssagens : '} 
            msg={msgpanelbottom}
          />
        
          {/* Refaz a pagina atual */}
          <ContentSidePageBottonLabel  open={true} istitl={true} title={'Refrescar.: '} >
            {/* Mostra, ação botão a esquerda do Panel */}
            <ContentSidePageBottonButton
              pxheight={'40px'}
              img={btn_def_q_refrescar}
              titbtn={'Refrescar...'}
              onClick={() => goto('/')}
              onMouseEnter={() => setMsgPanelBottom('Refrescar a Page...') }
              onMouseLeave={() => setMsgPanelBottom('Restaurar Page...') } 
            />
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
       
        
        {/* Abre Modal da anunciando "negado / não pode operar" o Sistema (fechável) */ }
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
              onclickimg={() => setCardNegadoPage(false)} 
            />
            <AutoCloseTimer onClose={() => setCardNegadoPage(false)} seconds={5} />
          </PageModal>
          ) : null 
        }
        <div>{ state.chvkey ? (<p>......ChvKey : true </p>) : (<p>.......ChvKey : false </p>)}</div>
        <div>{ state.logado ? (<p>......Logado : true </p>) : (<p>.......Logado : false </p>)}</div>

      </LayoutVisitante>
    </ThemeProvider>
  );
};

export default Visitante;

