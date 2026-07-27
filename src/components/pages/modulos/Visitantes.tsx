import React from "react";
//import * as Pg from "../../stylePages";
import { ThemeProvider } from "styled-components";
import light from "../../../themes/light";
import dark from "../../../themes/dark";
import { useNavigate } from "react-router-dom";
import { useAcessoContext } from "../../contexts/ContextAcesso";
import LayoutVisitante from "../../layouts/LayoutVisitante";
import { ContentCardPageMain } from "../../ContentCardPageMain";
//import { BarMenuVisitanates } from "../../sidebar/BarMenuVisitantes";
import { DivisionPgHztal } from "../../stylePages";













/** component ação botão help */

import { CardHlpVisitanteLogo } from '../../../cards/CardHlpHomeLogo';
import { CardHlpVisitantePage } from '../../../cards/CardHlpHomePage';
import { CardImgNeg } from '../../../cards/CardImgNeg';



import { CardDesenvolver } from "@/cards/CardDesenvolver";



import bt_helppg from "../../../assets/defaults/btn/btn_def_q_help.svg";
import bt_abortar from "../../../assets/defaults/btn/btn_def_q_sair.svg";
import bt_close from "../../../assets/defaults/btn/btn_def_q_close.svg";
import lg_def_mod_visitante from "../../../assets/defaults/lg/lg_def_mod_visitante.svg";
import lg_def_ope_defaut from '../../assets/defaults/lg/lg_def_ope_defaut.svg';



import btn_def_q_logo_off from "../../../assets/defaults/btn/btn_def_q_logo_off.svg";
import btn_def_q_logo_on from "../../../assets/defaults/btn/btn_def_q_logo_on.svg";
import btn_def_q_voltar from "../../../assets/defaults/btn/btn_def_q_voltar.svg";

//import bt_setadir from "../../assets/svgs/bt_setadir.svg";


// inicio do painel BOTTON
// bottom page
import { PageModal } from '../PageModal';
import { ContentSysMainItens } from '../../../cards/ContentSysMainItens';
import { AutoCloseTimer } from '../../AutoCloseTimer';
import { ContentSidePagePanelBotton } from '../../sidebar/ContentSidePagePanelBotton';
import { ContentSidePageBottonLabel } from '../../sidebar/ContentSidePageBottonLabel';
import { ContentSidePageBottonButton } from '../../sidebar/ContentSidePageBottonButton';
import { ContentSideMsgPagePanelBotton } from '../../sidebar/ContentSideMsgPagePanelBotton';
/**img do modal */ 
import btn_def_q_close from '../../../assets/defaults/btn/btn_def_q_close.svg';
import pnl_def_ope_negado from '../../../assets/defaults/pnl/pnl_def_ope_negacao.svg';
import lg_def_ope_visitante from '../../../assets/defaults/lg/lg_def_mod_visitante.svg';

const Visitante : React.FC = () => {
  const { state } = useAcessoContext();

  const [theme, setTheme] = React.useState(light);
  // mudança em THEME
  const [ischeck, setIscheck] = React.useState(false);
  // menssagem em heard do Panel Booton
  const [msgpanelbottom, setMsgPanelBottom] = React.useState('');
  // menssagem em Panel Booton
  const [messagebottom, setMessageBottom] = React.useState('');
  
  // Set para botão imagem do logo
    const [cardlogo, setCardLogo] = React.useState(false);
  // Set para mostrar o modal sobre o logo da pagina
  const handlerCardLogo = React.useCallback(() => setCardLogo((old) => !old), []);

  // Set para botão imagem do help pagina
  const [cardhplpage, setCardHlpPage] = React.useState(false);
  // Set para mostrar o modal sobre do help da pagina
  const handlerCardHlpPage = React.useCallback(() => setCardHlpPage((old) => !old), []);

  // Set para opperação invalida na pagina
  const [notOperation, setNotOperation] = React.useState(false);
  // Set para mostrar o modal sobre operação invalida na pagina
  const handlerCardNotOperation = React.useCallback(() => setCardHlpPage((old) => !old), []);

  // Set para botão da mudança do Tema em pagina
  const ToggleTheme = () => {
    setTheme(theme.name === 'dark' ? light : dark);
    setIscheck((prev) => !prev);
  };

  // navegação da Paginas
  const navigate = useNavigate();
  const goto = React.useCallback((path: string) => navigate(path), [navigate]);

 

  

  return (
    <ThemeProvider theme={theme}>
      <LayoutVisitante
        //* Logo da pagina Visitantes do Sistema
        imgsys={lg_def_mod_visitante}
        titbtnsys="Modulo Visitante..."
        onclicksys={ handlerCardLogo }
        //* Titulo da Pagina 
        titlepg="Visitante"
        //* Botão Help da Pagina
        imgbtnhlppg={bt_helppg}
        titbtnhlppg="Help Page..."
        onclickhlppg={ handlerCardHlpPage }


        $imglgon={btn_def_q_logo_on}
        $imglgoff={btn_def_q_logo_off}
        $logonoff={islogin}
        titbtnlgonoff={state.logado ? "Usuário logado" : "Usuário não logado"}
        onclicklgooff={() => {
          if (state.logado) {
            goto('/login');
          } else {
            setIsLogin(true);
            setMsgPanelBottom('Sistema inoperante!');
          }
        }}


        imgbtnaborta={bt_abortar}
        titbtnaborta="Abortar..."
        onclickaborta={ goto('/') }

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

          <ContentSidePagePanelBotton bordas="3px" open={true} pwidth="100%">
            <ContentSideMsgPagePanelBotton
              bordas="3px"
              label="Menssagens : "
              msg={msgpanelbottom}
            />

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