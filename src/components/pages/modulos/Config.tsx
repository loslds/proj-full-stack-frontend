  
//C:\repository\proj-full-stack-frontend\src\components\pages\modulos\Config.tsx
import React from 'react';

import { ThemeProvider } from 'styled-components';
import light from "../../../themes/light";
import dark from "../../../themes/dark";

import { useNavigate } from 'react-router-dom';
import LayoutConfig from '../../layouts/LayoutConfig';
import { useAcessoContext } from '../../contexts/ContextAcesso';
//import * as Pg from '../stylePages';

// main page
import { ContentCardPageMain } from '../../ContentCardPageMain';
import { BarMenuConfig } from '../../sidebar/BarMenuConfig'

//import { BarSideMenuConfig } from '../sidebar/BarSideMenuConfig.tsx';
import { DivisionPgHztal } from '../../stylePages';

// bottom page
import { PageModal } from '../PageModal';
import { AutoCloseTimer } from '../../AutoCloseTimer';
import { ContentSidePagePanelBotton } from '../../sidebar/ContentSidePagePanelBotton';
import { ContentSidePageBottonLabel } from '../../sidebar/ContentSidePageBottonLabel';
import { ContentSidePageBottonButton } from '../../sidebar/ContentSidePageBottonButton';
import { ContentSideMsgPagePanelBotton } from '../../sidebar/ContentSideMsgPagePanelBotton';
import { CardHlpConfigPage } from '../../../cards/CardHlpConfigPage';
import { CardImgNeg } from '../../../cards/CardImgNeg'
import { CardDesenvolver } from '../../../cards/CardDesenvolver';


// img do painel Bottom
// img do modal

import lg_config from '../../../assets/defaut/logo/lg_def_mod_config.svg';
import pnl_config from '../../../assets/defaut/painel/pnl_def_mod_config.svg';
import btn_chelp from '../../../assets/defaut/botao/btn_def_c_help.svg';
import btn_csair from '../../../assets/defaut/botao/btn_def_c_sair.svg';
import btn_chksys from '../../../assets/defaut/botao/btn_def_mod_c_config.svg'

import btn_qrefrescar from '../../../assets/defaut/botao/btn_def_q_refrescar.svg';
import btn_qclose from '../../../assets/defaut/botao/btn_def_q_close.svg';
import pnl_negado from '../../../assets/defaut/painel/pnl_def_ope_negacao.svg';

const Config: React.FC = () => {
  const { state } = useAcessoContext();
  
  const [theme, setTheme] = React.useState(light);
  const [ischeck, setIscheck] = React.useState(false);

  const ToggleTheme = () => {
    setTheme(theme.name === "dark" ? light : dark);
    setIscheck(theme.name === "dark");
  };
  ///////////////////////
  const navigate = useNavigate();
  const goto = React.useCallback((path: string) => navigate(path), [navigate]);

  ///////////////

  const [msgpanelbottom, setMsgPanelBottom] = React.useState('');// menssagem de aviso dentro do painel bottom
  const [messagebottom, setMessageBottom] = React.useState('Aguardando Seleção...'); // menssagem da apliação do botão
  const [chksistema, setChkSistema] = React.useState(false);
  
  const handlerCardChkSistema = React.useCallback(() => {
      setChkSistema((oldState) => !oldState);
  }, []);

  const [cardhplpage, setCardHlpPage] = React.useState(false);
  const handlerCardHlpPage = React.useCallback(() => {
    setCardHlpPage((oldState) => !oldState);
  }, []);

  const [nottables, setNotTables] = React.useState(false);
  
  const [isgridtable, setIsGrigTables] = React.useState(false);
  React.useEffect(() => {
    if (state.nametable !== '' || null) {
      setMessageBottom("Tabela em Uso :" + state.nametable);
      setIsGrigTables(true);
      console.log("[CONFIG] nametable mudou:", state.nametable);
    } else {
      setIsGrigTables(false);
    } 
  }, [state.nametable]);
  
  return (
    <ThemeProvider theme={theme}>
      <LayoutConfig
        imgsys={lg_config}
        titbtnsys="Modulo Config..."
        onclicksys={() => {}}
        titlepg="Config."
        
        imgbtnhlppg={btn_chelp}
        titbtnhlppg="Help Page..."
        onclickhlppg={handlerCardHlpPage}
        
        imgbtnaborta={btn_csair}
        titbtnaborta="Abortar..."
        onclickaborta={ () => goto('/')}

        imgbtnchk={btn_chksys}
        titbtnchk="Checar Systema..."
        onclickchk={handlerCardChkSistema}

        onchange={ToggleTheme}
        ischeck={ischeck}
      >
        
          <ContentCardPageMain open={true} pwidth={'100%'}>
            <DivisionPgHztal/>
    
            <BarMenuConfig />

    
            {isgridtable ? <DivisionPgHztal/>: null}
            
            {isgridtable ? (
              <h2>aqui entra o Main grid</h2>
            ): null}
           
            <DivisionPgHztal/>
        
            <ContentSidePagePanelBotton bordas="3px" open={true} pwidth="100%">
              <ContentSideMsgPagePanelBotton bordas="3px" label={'Menssagens : '} msg={msgpanelbottom} />
              <ContentSidePageBottonLabel open={true} istitl={true} title={'Refrescar.: '}>
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={btn_qrefrescar}
                  titbtn={'Refrescar...'}
                  // onClick={() => window.location.reload()}
                  onClick={() => goto('/')}
                  onMouseEnter={() => setMsgPanelBottom('Refrescar a Page...')}
                  onMouseLeave={() => goto('/modulos/config')}
                />
              </ContentSidePageBottonLabel>
          
              <div><label>ATENÇÃO...{messagebottom}</label></div>
            </ContentSidePagePanelBotton>
    
            {/* chama Página para trabalho */}
            {chksistema ? (
              <PageModal
                ptop={'1%'}
                pwidth={'80%'}
                pheight={'95%'}
                imgbm={btn_qclose}
                titbm="Fechar..."
                titulo={'Checagem do Sistema.'}
                onclose={() => setChkSistema(false)}
              >
                <CardDesenvolver
                  imgcarddes={pnl_config}
                  onclosesair={() => setChkSistema(false)}
                />
              </PageModal>
            ) : null}
        
            {cardhplpage && (
              <PageModal
                ptop={'1%'}
                pwidth={'80%'}
                pheight={'95%'}
                imgbm={btn_qclose}
                titbm="Fechar..."
                titulo="Help Conteúdo Config."
                onclose={() => setCardHlpPage(false)}
              >
                <CardHlpConfigPage
                  imgcardpage={pnl_config}
                  onclosesair={() => setCardHlpPage(false)}
                />
              </PageModal>
            )}

            {nottables ? (
              <PageModal
                ptop={'10%'}
                pwidth={'70%'}
                pheight={'50%'}
                imgbm={btn_qclose}
                titbm="Fechar..."
                titulo={'Acesso Negado'}
                onclose={() => setNotTables(false)}
              >
                <CardImgNeg
                  imgcard={pnl_negado}
                  pminheight={'120px'}
                  pwidth={'120px'}
                  onclickimg={() => setNotTables(false)}
                />
                <form>
                  <p> ⛔ Tabela inacessível...</p>
                  <br />
                  <p> ACESSO SISTEMA INOPERANTE.</p>
                </form>
                <AutoCloseTimer onClose={() => setNotTables(false)} seconds={5} />
              </PageModal>
            ) : null}
          
          </ContentCardPageMain>
        
      </LayoutConfig>
    </ThemeProvider>
  );
};

export default Config;


