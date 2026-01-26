  
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
  
  

  // para abrir PanelModal => tabela inexistente
  const [nottables, setNotTables] = React.useState(false);

  // para abrir PanelModal => tabela sem registro
  const [notregstable, setNotRegsTable] = React.useState(false);

  // para abrir no Main o grid da tabela com ou sem registro
  const [isgridtable, setIsGrigTables] = React.useState(false);

  // (opcional) controle de carregamento/erro do grid
  const [gridLoading, setGridLoading] = React.useState(false);
  const [gridError, setGridError] = React.useState<string | null>(null);

  // -------------------------
  // REGRAS DO FLUXO
  // grid só abre quando:
  // - existe nametable selecionada
  // - E o usuário clicou no botão da tabela (aqui inferimos isso pelos flags de manutenção TRUE)
  // -------------------------
  const hasTableSelected = React.useMemo(() => {
    return !!state.nametable && String(state.nametable).trim() !== "";
  }, [state.nametable]);

  const hasOpenIntent = React.useMemo(() => {
    // quando você clica no botão com nome da tabela, o BarMenuConfig liga esses flags.
    // isso vira o “gatilho” correto para abrir o grid.
    return !!(state.inctable || state.alttable || state.exctable || state.reltable);
  }, [state.inctable, state.alttable, state.exctable, state.reltable]);

  // -------------------------
  // PLUGAR AQUI O FETCH REAL
  // Esta função deve:
  // - verificar se a tabela existe (ou se backend retornou 404/erro)
  // - trazer registros (com filtro state.filttable se houver)
  // - se não existir: setNotTables(true)
  // - se existir e não tiver registros: setNotRegsTable(true)
  // - se tiver registros: renderiza grid (você vai colocar componente do grid no JSX)

  // -------------------------
  type GridRow = Record<string, unknown>;
  interface LoadTableResult {
    exists: boolean;
    rows: GridRow[];
  }

  const loadTable = React.useCallback(async (): Promise<void> => {
    if (!hasTableSelected || !hasOpenIntent) return;

    setGridLoading(true);
    setGridError(null);
    setNotTables(false);
    setNotRegsTable(false);

    try {
      // TODO: substituir pela chamada real:
      // const result = await fetchTableRows(state.nametable, state.filttable)
      const result: LoadTableResult = {
        exists: true,
        rows: [],
      };

      if (!result.exists) {
        setIsGrigTables(false);
        setMessageBottom(`Tabela em Uso: ${state.nametable} inexistente.`);
        setNotTables(true);
        return;
      }

      setIsGrigTables(true);
      setMessageBottom(`Tabela em Uso: ${state.nametable}`);

      if (result.rows.length === 0) {
        setNotRegsTable(true);
      }

      // TODO: guardar as linhas para o grid
      // setGridRows(result.rows);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Erro ao carregar tabela.";
      setIsGrigTables(false);
      setGridError(message);
      setMessageBottom(`Erro ao carregar: ${state.nametable}`);
      setNotTables(true);
    } finally {
      setGridLoading(false);
    }
  }, [hasTableSelected, hasOpenIntent, state.nametable]);

  React.useEffect(() => {
    if (!hasTableSelected || !hasOpenIntent) {
      setIsGrigTables(false);
      setNotTables(false);
      setNotRegsTable(false);
      setGridError(null);

      if (!hasTableSelected) setMessageBottom("Aguardando Seleção...");
      return;
    }

    void loadTable();
  }, [hasTableSelected, hasOpenIntent, loadTable]);

  
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
            <>
              {gridLoading ? <h2>Carregando grid...</h2> : null}
              {gridError ? <h2>{gridError}</h2> : null}
              {!gridLoading && !gridError ? <h2>aqui entra o Main grid</h2> : null}
            </>
          ) : null}
           
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
                  <br />
                  <p> ⛔ Tabela Ineistênte ou inacessível...</p>
                  <br />
                </form>
                <AutoCloseTimer onClose={() => setNotTables(false)} seconds={5} />
              </PageModal>
            ) : null}

            {notregstable ? (
              <PageModal
                ptop={'10%'}
                pwidth={'70%'}
                pheight={'50%'}
                imgbm={btn_qclose}
                titbm="Fechar..."
                titulo="Tabela Ativa..."
                onclose={() => setNotTables(false)}
              >
                <CardImgNeg
                  imgcard={pnl_negado}
                  pminheight={'120px'}
                  pwidth={'120px'}
                  onclickimg={() => setNotRegsTable(false)}
                />
                <form>
                  <br />
                  <p>⚠️ {state.nametable} sem registros.</p>
                  <br />
                  <p> Podendo ser Manipulada.</p>
                  <br />

                </form>
                <AutoCloseTimer onClose={() => setNotRegsTable(false)} seconds={5} />
              </PageModal>
            ) : null}


          </ContentCardPageMain>
        
      </LayoutConfig>
    </ThemeProvider>
  );
};

export default Config;


