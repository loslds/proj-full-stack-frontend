

// C:\repository\proj-full-stack-frontend\src\components\pages\modulos\Config.tsx

import React from "react";
import { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";

import light from "../../../themes/light";
import dark from "../../../themes/dark";

import LayoutConfig from "../../layouts/LayoutConfig";
import { useAcessoContext } from "../../contexts/ContextAcesso";

/** component ação para fazer o logoff em MODAL Login e Master  Atualizador do context*/  
import { logoutMaster } from '../../contexts/helpers/logoutMaster';
import { logoutLogin } from '../../contexts/helpers/logoutLogin';

import { ContentCardPageMain } from "../../ContentCardPageMain";
import { BarMenuConfig, type GridUtilityAction, type GridViewMode } from "../../sidebars/config/BarMenuConfig";

import GenericGrid from "../../grids/GenericGrid";

import { ContentMainGrid } from "@/components/ContentMainGrid";
import { ContentMainTitle } from "../../ContentMainTitle";
import { DivisionPgHztal } from "../../styleComponents";

import { PageModal } from "../PageModal";
import { AutoCloseTimer } from '../../AutoCloseTimer';
import { ContentSidePagePanelBotton } from "../../sidebars/ContentSidePagePanelBotton";
import { ContentSidePageBottonLabel } from "../../sidebars/ContentSidePageBottonLabel";
import { ContentSidePageBottonButton } from "../../sidebars/ContentSidePageBottonButton";
import { ContentSideMsgPagePanelBotton } from "../../sidebars/ContentSideMsgPagePanelBotton";
//////////////////////////////////////////////////
// Help MODAL após click em Botão
// Ação do Click na Logo
import { CardHlpConfigLogo } from "../../../cards/CardHlpConfigLogo";
// Ação do Click Help Page
import { CardHlpConfigPage } from "../../../cards/CardHlpConfigPage";
// Ação do Click Login-Avatar
import { CardHlpBtnLoginModPage } from '../../../cards/CardHlpBtnLoginModPage';
// Ação do Click LOGO-OFF SENHA LOGIN
import { CardLogoffLogin } from '../../../cards/CardLogoffLogin';
// Ação do Click LOGO-OFF SENHA MASTER
import { CardLogoffMaster } from "../../../cards/CardLogoffMaster";
// Ação ao Click para filtrar dados na Grid
import { CardFilterConfig } from "../../../cards/CardFilterConfig";
// Ação ao Click para fechar o Modal
import btn_def_q_close from "../../../assets/defaults/btn/btn_def_q_chvkey.svg";
// Heard imagem da Logo da Pagina
import lg_def_mod_config from "../../../assets/defaults/lg/lg_def_mod_config.svg";
/**img da Pagina MODAL */ 
/** component ação Botão Help Pagina  */ 
import btn_def_q_help from "../../../assets/defaults/btn/btn_def_c_help.svg";
/** Painel para component modal Acesso Negado*/
import pnl_def_ope_negado from '../../../assets/defaults/pnl/pnl_def_ope_negacao.svg';
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
/** component ação imagem Check Sistema */ 
import btn_def_q_chvkey from '../../../assets/defaults/btn/btn_def_q_chvkey.svg'
/** component ação botão Home  Pagina  */ 
import btn_def_q_home from "../../../assets/defaults/btn/btn_def_q_home.png";

// Ação do Click Acesso Negado
import pnl_def_ope_negacao from "../../../assets/defaults/pnl/pnl_def_ope_negacao.svg";
import { CardImgNeg } from "../../../cards/CardImgNeg";
// Ação ao Click onde não tem Modal ainda sem ser feito
import { CardDesenvolver } from "../../../cards/CardDesenvolver";

import pnl_def_mod_config from '../../../assets/defaults/pnl/pnl_def_mod_config.svg';
import btn_def_q_refrescar from '../../../assets/defaults/btn/btn_def_q_refrescar.svg';


type GridRow = Record<string, unknown>;

type GridColumn = {
  key: string;
  header?: string;
  type?: string;
  visible?: boolean;
};

type LoadTableResult =
  | { exists: false; rows: []; columns?: GridColumn[] }
  | { exists: true; rows: GridRow[]; columns?: GridColumn[] };

const API_BASE =
  (import.meta as unknown as { env?: Record<string, string> })?.env
    ?.VITE_API_URL ?? "http://localhost:5000/api";

async function fetchTableByName(tableName: string): Promise<LoadTableResult> {
  const url = `${API_BASE}/system/table/${encodeURIComponent(tableName)}`;

  const res = await fetch(url, { method: "GET" });

  if (res.status === 404) {
    return { exists: false, rows: [] };
  }

  if (!res.ok) {
    throw new Error(`Erro ao carregar tabela (HTTP ${res.status})`);
  }

  const data = (await res.json()) as Partial<{
    exists: boolean;
    rows: GridRow[];
    columns: GridColumn[];
  }>;

  if (!data.exists) {
    return { exists: false, rows: [] };
  }

  return {
    exists: true,
    rows: Array.isArray(data.rows) ? data.rows : [],
    columns: Array.isArray(data.columns) ? data.columns : undefined,
  };
}

const Config: React.FC = () => {
  
  const { state, dispatch } = useAcessoContext();

  const [theme, setTheme] = React.useState(light);
  // mudança em THEME
  const [ischeck, setIscheck] = React.useState(false);
  // menssagem em heard do Panel Booton
  const [msgpanelbottom, setMsgPanelBottom] = React.useState("Aguardando Seleção...");
  // menssagem em Panel Booton
  const [messagebottom, setMessageBottom] = React.useState("Aguardando Seleção...");

  // SET PARA ABERTURA DE MODAL DA PAGINA
  // Botão para Abrir Help Modal LOGO Page
  const [cardlogo, setCardLogo] = React.useState(false);
  // Botão para Abrir Help Modal da Pagina
  const [cardhplpage, setCardHlpPage] = React.useState(false);
  // Botão para Abrir Help Modal do Login na Pagina
  const [cardhplbtnlogin, setCardHlpBtnLogin] = React.useState(false);
  // Botão para LOGO-OFF do Login
  const [ismsgchvLogin, setIsMsgChvLogin] = React.useState(false); //Set para modal Botão logoff-login
  const [chavelogin, setChaveLogin ] = React.useState(false); // Abre Botão LOGOFF LOGIN
  // Botão para LOGO-OFF da Master
  const [ismsgchvkey, setIsMsgChvkey] = React.useState(false); //Set para modal Botão logoff  master
  const [chavemst, setChaveMst ] = React.useState(false); //Abre Botão LOGOFF MASTER
  // Botão para Abrir Check Sistema na Pagina
  const [chksistema, setChkSistema] = React.useState(false);
  
  // Botão para Abrir não Operavel na Pagina
  const [notOperation, setNotOperation] = React.useState(false);
  // Botão para Abrir Help Acesso Negado na Pagina
  const [cardnegadopage, setCardNegadoPage] = React.useState(false);
 
  //** Abre ao clicar na E NÃO TEM aCESSO AO sistema */
  // navegação da Paginas
  const navigate = useNavigate();
  const goto = React.useCallback((path: string) => navigate(path), [navigate]);

  // Set para botão da mudança do Tema em pagina
  const ToggleTheme = () => {
    setTheme(theme.name === 'dark' ? light : dark);
    setIscheck((prev) => !prev);
  };

  //** Abre/fecha ao clicar na Logo do Sistema ou Empresa */
  const handlerCardLogo = React.useCallback(() => setCardLogo((old) => !old), []);
  //** Abre/fecha ao clicar no botão help da Pagina */
  const handlerCardHlpPage = React.useCallback(() => setCardHlpPage((old) => !old), []);
  //** Abre/fecha ao clicar no botão Login */
  const handlerCardHlpBtnLogin = React.useCallback(() => setCardHlpBtnLogin((old) => !old), []);
  //** Abre/fecha ao clicar no botão Check Sistema */
  const handlerCardChkSistema = React.useCallback(() => { setChkSistema((old) => !old); }, []);
  /////////////////////////////////
   
    


  /////////////////////////////////////////////////////////
  const [isgridtable, setIsGridTables] = React.useState(false);
  const [gridLoading, setGridLoading] = React.useState(false);
  const [gridError, setGridError] = React.useState<string | null>(null);
  const [gridRows, setGridRows] = React.useState<GridRow[]>([]);
  const [gridColumns, setGridColumns] = React.useState<
    GridColumn[] | undefined
  >(undefined);

  const [selectedRowId, setSelectedRowId] = React.useState<number | null>(null);

  const [gridMode, setGridMode] = React.useState<GridViewMode>("default");

  const [isGridModalOpen, setIsGridModalOpen] = React.useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = React.useState(false);

  const tableName = React.useMemo(
    () => String(state.nametable ?? "").trim(),
    [state.nametable]
  );

  const hasTableSelected = tableName.length > 0;

  const currentFields = React.useMemo(() => {
    if (gridColumns && gridColumns.length > 0) {
      return gridColumns.map((col) => ({
        key: col.key,
        label: col.header ?? col.key,
      }));
    }

    if (gridRows.length > 0) {
      return Object.keys(gridRows[0]).map((key) => ({
        key,
        label: key,
      }));
    }

    return [];
  }, [gridColumns, gridRows]);

  const resetGridUi = React.useCallback(() => {
    setIsGridTables(false);
    setIsGridModalOpen(false);
    setGridError(null);
    setGridRows([]);
    setGridColumns(undefined);
    setSelectedRowId(null);
  }, []);

  const loadTableSummary = React.useCallback(async () => {
    if (!hasTableSelected) return;

    setGridLoading(true);
    setGridError(null);
    resetGridUi();

    try {
      const result = await fetchTableByName(tableName);

      if (!result.exists) {
        setMsgPanelBottom(`Tabela em uso: ${tableName}, inexistente.`);
        setMessageBottom(`Tabela em uso: ${tableName}`);
        return;
      }

      const total = result.rows.length;

      setMsgPanelBottom(
        total === 0
          ? `Tabela em uso: ${tableName}, sem registros.`
          : `Tabela em uso: ${tableName}, ${total} registros.`
      );
      setMessageBottom(`Tabela em uso: ${tableName}`);
    } catch {
      setMsgPanelBottom(`Tabela em uso: ${tableName}, inoperante.`);
      setMessageBottom(`Erro ao consultar tabela: ${tableName}`);
    } finally {
      setGridLoading(false);
    }
  }, [hasTableSelected, resetGridUi, tableName]);

  const loadTableGrid = React.useCallback(
    async (mode: GridViewMode = gridMode) => {
      if (!hasTableSelected) return;

      setGridLoading(true);
      setGridError(null);
      setSelectedRowId(null);

      try {
        const result = await fetchTableByName(tableName);

        if (!result.exists) {
          resetGridUi();
          setMsgPanelBottom(`Tabela em uso: ${tableName}, inexistente.`);
          setMessageBottom(`Tabela em uso: ${tableName}`);
          return;
        }

        setGridColumns(result.columns?.length ? result.columns : undefined);
        setGridRows(result.rows ?? []);
        setIsGridTables(true);

        if (mode === "detail") {
          setIsGridModalOpen(true);
        } else {
          setIsGridModalOpen(false);
        }

        setMsgPanelBottom(
          result.rows.length === 0
            ? `Visualizando tabela ${tableName}, sem registros.`
            : `Visualizando tabela ${tableName} em modo ${mode}.`
        );

        setMessageBottom(`Tabela em uso: ${tableName}`);
      } catch (e: unknown) {
        const msg =
          e instanceof Error ? e.message : "Erro ao carregar grid da tabela.";

        setGridError(msg);
        resetGridUi();
        setMsgPanelBottom(`Tabela em uso: ${tableName}, inoperante.`);
        setMessageBottom(`Erro ao carregar grid: ${tableName}`);
      } finally {
        setGridLoading(false);
      }
    },
    [gridMode, hasTableSelected, resetGridUi, tableName]
  );

  const handleLoadSummary = React.useCallback(() => {
    void loadTableSummary();
  }, [loadTableSummary]);

  const handleViewModeSelect = React.useCallback(
    (selectedTableName: string, mode: GridViewMode) => {
      setGridMode(mode);
      setMsgPanelBottom(
        `Visualização selecionada: ${selectedTableName} / ${mode}.`
      );

      void loadTableGrid(mode);
    },
    [loadTableGrid]
  );

  const handleUtilitySelect = React.useCallback(
    (value: GridUtilityAction, selectedTableName?: string) => {
      console.log("UTIL:", value, selectedTableName);

      setMsgPanelBottom(`Util selecionado: ${value}`);

      if (
        value === "filter_fields" ||
        value === "filter_text" ||
        value === "filter_id"
      ) {
        setIsFilterModalOpen(true);
      }
    },
    []
  );

  const handleRefresh = React.useCallback(async () => {
    if (!hasTableSelected) {
      setMsgPanelBottom("Aguardando Seleção...");
      setMessageBottom("Aguardando Seleção...");
      return;
    }

    if (state.vistable || isgridtable) {
      setMsgPanelBottom(`Refrescando visualização da tabela ${tableName}...`);
      await loadTableGrid(gridMode);
      return;
    }

    if (state.regtable) {
      setMsgPanelBottom(`Refrescando dados da tabela ${tableName}...`);
      await loadTableSummary();
      return;
    }

    setMsgPanelBottom(`Tabela selecionada: ${tableName}`);
    setMessageBottom(`Tabela em uso: ${tableName}`);
  }, [
    gridMode,
    hasTableSelected,
    isgridtable,
    loadTableGrid,
    loadTableSummary,
    state.regtable,
    state.vistable,
    tableName,
  ]);

  React.useEffect(() => {
    dispatch({ type: "page", payload: "Config" });
    dispatch({ type: "aplicacao", payload: "OPÇÃO" });
    dispatch({ type: "modulo", payload: "Config" });
  }, [dispatch]);

  React.useEffect(() => {
    resetGridUi();

    if (!hasTableSelected) {
      setMsgPanelBottom("Aguardando Seleção...");
      setMessageBottom("Aguardando Seleção...");
      return;
    }

    setMsgPanelBottom(`Tabela selecionada: ${tableName}`);
    setMessageBottom(`Tabela em uso: ${tableName}`);
  }, [hasTableSelected, resetGridUi, tableName]);

  React.useEffect(() => {
    if (!state.listtable || !hasTableSelected) return;
    setMsgPanelBottom(`Selecione o tipo de listagem para a tabela ${tableName}.`);
  }, [hasTableSelected, state.listtable, tableName]);

  React.useEffect(() => {
    if (!state.filttable || !hasTableSelected) return;

    if (!gridRows.length) {
      setMsgPanelBottom("Tabela selecionada não contém registros.");
      dispatch({ type: "filttable", payload: false });
      return;
    }

    setMsgPanelBottom(
      `Filtro de visualização da tabela ${tableName} em preparação.`
    );
    setIsFilterModalOpen(true);
  }, [dispatch, gridRows.length, hasTableSelected, state.filttable, tableName]);

  React.useEffect(() => {
    if (!state.inctable || !hasTableSelected) return;
    setMsgPanelBottom(`Inclusão de novo registro na tabela ${tableName}.`);
  }, [hasTableSelected, state.inctable, tableName]);

  React.useEffect(() => {
    if (!state.alttable || !hasTableSelected) return;

    if (selectedRowId == null) {
      setMsgPanelBottom("Selecione um registro para alteração em seus dados.");
      return;
    }

    setMsgPanelBottom(
      `Alteração do registro ${selectedRowId} na tabela ${tableName}.`
    );
  }, [hasTableSelected, selectedRowId, state.alttable, tableName]);

  React.useEffect(() => {
    if (!state.exctable || !hasTableSelected) return;

    if (selectedRowId == null) {
      setMsgPanelBottom("Selecione um registro para exclusão.");
      return;
    }

    setMsgPanelBottom(`Exclusão do registro ${selectedRowId}.`);
  }, [hasTableSelected, selectedRowId, state.exctable]);

  const renderGrid = () => (
    <>
      {gridLoading ? <h2>Carregando grid...</h2> : null}
      {gridError ? <h2>{gridError}</h2> : null}

      {!gridLoading && !gridError ? (
        <GenericGrid
          tableName={tableName}
          rows={gridRows}
          columns={gridColumns}
          mode={gridMode}
        />
      ) : null}
    </>
  );

  /////////////////////////////////


  React.useEffect(() => {
    setChaveLogin(Boolean(state.logado));
  }, [state.logado]);
  
  React.useEffect(() => {
    setChaveMst(Boolean(state.chvkey));
  }, [state.chvkey]);

  // // apresentação de Imagens cobforme Login
  // const imagemLogoEmpresa =
  //   state.id_logo_emp > 0 && state.logo_svg_emp?.trim()
  //   ? state.logo_svg_emp
  //   : lg_def_ope_default;
  
  const imagemLogin =
    !state.logado
      ? btn_def_ope_q_login
      : state.id_img_user > 0 && state.img_svg_user
        ? state.img_svg_user
        : btn_def_q_avatar;
    

  return (
    <ThemeProvider theme={theme}>
      <LayoutConfig
        //** Logo da Sistema/Empresa ou do Sistema
        imgbtnlogo={lg_def_mod_config}
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
  
        /* Botão para VOLTAR A HOME */
        imgbtnhome={btn_def_q_home}
        titbtnhome={"Inicio...HOME"}
        onClickbtnhome={ () => goto('/')}

        //* Botão para Checar Sistema
        imgbtnchk={btn_def_q_chvkey}
        titbtnchk="Checar Systema..."
        onClickbtnchk={handlerCardChkSistema}


        // Botão para mudar o tema (dark/light)  
        onchange={ToggleTheme}
        ischeck={ischeck}
      >
        <ContentCardPageMain open={true}>
          <BarMenuConfig
            onRefresh={() => void handleRefresh()}
            onLoadSummary={handleLoadSummary}
            onUtilitySelect={handleUtilitySelect}
            onViewModeSelect={handleViewModeSelect}
          />

          {isgridtable && !isGridModalOpen ? <DivisionPgHztal /> : null}

          {isgridtable && !isGridModalOpen ? (
            <ContentMainGrid $open={true} $width="100%">
              <ContentMainTitle>
                <h3>
                  Tabela: {tableName} | Modo: {gridMode}
                </h3>
              </ContentMainTitle>

              {renderGrid()}
            </ContentMainGrid>
          ) : null}

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
                img={btn_def_q_refrescar}
                titbtn="Refrescar..."
                onClick={() => void handleRefresh()}
                onMouseEnter={() =>
                  setMsgPanelBottom(
                    "Refrescar a tabela atual conforme o estado ativo."
                  )
                }
                onMouseLeave={() => {
                  if (!hasTableSelected) {
                    setMsgPanelBottom("Aguardando Seleção...");
                  } else if (state.filttable) {
                    setMsgPanelBottom(
                      `Filtro em tabela ${tableName} em preparação.`
                    );
                  } else if (state.vistable) {
                    setMsgPanelBottom(`Visualizando tabela ${tableName}.`);
                  } else {
                    setMsgPanelBottom(`Tabela selecionada: ${tableName}`);
                  }
                }}
              />
            </ContentSidePageBottonLabel>
            <div>
              <label>{messagebottom}</label>
            </div>
          </ContentSidePagePanelBotton>

          {/** Modal dos Botões Hearders da Pagina */ }
          {/** Abre Modal help ao clicar na imagem LOGO da Pagina */ }
          {cardlogo ? (
            <PageModal
              ptop={'1%'}
              pwidth={'80%'}
              pheight={'95%'}
              imgbm={btn_def_q_close}
              titbm="Fechar..."
              titulo={'Config Sistema.'}
              onclose={() => setCardLogo(false)}>
              <CardHlpConfigLogo imghlplogo={lg_def_mod_config} onclosesair={() => setCardLogo(false)} /> 
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
              <CardHlpConfigPage imgcardpage={lg_def_mod_config} onclosesair={() => setCardHlpPage(false)} />
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
          { ismsgchvLogin ? (
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
            ): null
          }

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
            ) : null 
          }


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
          
          {/* Abre Modal da Do GRID */ }
          {isGridModalOpen ? (
            <PageModal
              ptop="1%"
              pwidth="95%"
              pheight="95%"
              imgbm={btn_def_q_close}
              titbm="Fechar..."
              titulo={`Tabela: ${tableName} | Modo: ${gridMode}`}
              onclose={() => setIsGridModalOpen(false)}
            >
              {renderGrid()}
            </PageModal>
            ) : null
          }

          {/* Abre Modal da checagen do sistema */ }
          {chksistema ? (
            <PageModal
              ptop="1%"
              pwidth="80%"
              pheight="95%"
              imgbm={btn_def_q_close}
              titbm="Fechar..."
              titulo="Checagem do Sistema."
              onclose={() => setChkSistema(false)}
            >
              <CardDesenvolver
                imgcarddes={pnl_def_mod_config}
                onclosesair={() => setChkSistema(false)}

              />
            </PageModal>
          ) : null}

          {notOperation ? (
            <PageModal
              ptop="10%"
              pwidth="70%"
              pheight="50%"
              imgbm={btn_def_q_close}
              titbm="Fechar..."
              titulo="Acesso Negado"
              onclose={() => setNotOperation(false)}
            >
              <CardImgNeg
                imgcard={pnl_def_ope_negacao}
                pminheight="120px"
                pwidth="120px"
                onclickimg={() => setNotOperation(false)}
              />

              <form>
                <p>⛔ ACESSO: SISTEMA INOPERANTE.</p>
                <br />
                <p>Entre em contato com suporte.</p>
              </form>
            </PageModal>
          ) : null}

          {isFilterModalOpen ? (
            <PageModal
              // ptop="5%"
              // pwidth="65%"
              // pheight="70%"
              imgbm={btn_def_q_close}
              titbm="Fechar..."
              titulo="Filtro de Visualização"
              onclose={() => {
                setIsFilterModalOpen(false);
                dispatch({ type: "filttable", payload: false });
                setMsgPanelBottom(`Filtro abortado para a tabela ${tableName}.`);
              }}
            >
              <CardFilterConfig
                tableName={tableName}
                availableFields={currentFields}
                onCancel={() => {
                  setIsFilterModalOpen(false);
                  dispatch({ type: "filttable", payload: false });
                  setMsgPanelBottom(
                    `Filtro abortado para a tabela ${tableName}.`
                  );
                }}
                onConfirm={(selectedFields) => {
                  console.log("FIELDS SELECTED", selectedFields);
                  setIsFilterModalOpen(false);
                  dispatch({ type: "filttable", payload: false });
                  setMsgPanelBottom(`Filtro aplicado na tabela ${tableName}.`);
                }}
              />
            </PageModal>
          ) : null}
        </ContentCardPageMain>
      </LayoutConfig>
    </ThemeProvider>
  );
};

export default Config;







