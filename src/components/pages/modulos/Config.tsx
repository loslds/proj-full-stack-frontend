
// C:\repository\proj-full-stack-frontend\src\components\pages\modulos\Config.tsx
import React from "react";

import styled from "styled-components";

import { ThemeProvider } from "styled-components";
import light from "../../../themes/light";
import dark from "../../../themes/dark";

import { useNavigate } from "react-router-dom";
import LayoutConfig from "../../layouts/LayoutConfig";
import { useAcessoContext } from "../../contexts/ContextAcesso";

// main page
import { ContentCardPageMain } from "../../ContentCardPageMain";
import { BarMenuConfig } from "../../sidebar/BarMenuConfig";
import { DivisionPgHztal } from "../../stylePages";

// img do Header
import lg_config from "../../../assets/defaut/logo/lg_def_mod_config.svg";
import pnl_config from "../../../assets/defaut/painel/pnl_def_mod_config.svg";
import btn_chelp from "../../../assets/defaut/botao/btn_def_c_help.svg";
import btn_csair from "../../../assets/defaut/botao/btn_def_c_sair.svg";
import btn_chksys from "../../../assets/defaut/botao/btn_def_mod_c_config.svg";
import btn_master from "../../../assets/defaut/botao/bnt_def_q_master.svg";
import pnl_master from "../../../assets/defaut/painel/pnl_def_ope_esclamacao.svg";

// main do grid
import GenericGrid from "../../GenericGrid";
import { ContentMainPage } from "../../ContentMainPage";
import { ContentMainTitle } from "../../ContentMainTitle";

// panel bottom page
import { PageModal } from "../PageModal";
import { ContentSidePagePanelBotton } from "../../sidebar/ContentSidePagePanelBotton";
import { ContentSidePageBottonLabel } from "../../sidebar/ContentSidePageBottonLabel";
import { ContentSidePageBottonButton } from "../../sidebar/ContentSidePageBottonButton";
import { ContentSideMsgPagePanelBotton } from "../../sidebar/ContentSideMsgPagePanelBotton";
import { CardHlpConfigPage } from "../../../cards/CardHlpConfigPage";

import { CardLogoffMaster } from "../../../cards/CardLogoffMaster";
import { logoutMaster } from "../../contexts/helpers/logoutMaster";
import { CardImgNeg } from "../../../cards/CardImgNeg";
import { CardDesenvolver } from "../../../cards/CardDesenvolver";
import CardFilterConfig from "../../../cards/CardFilterConfig";

// img do painel Bottom
import btn_qrefrescar from "../../../assets/defaut/botao/btn_def_q_refrescar.svg";
import btn_qclose from "../../../assets/defaut/botao/btn_def_q_close.svg";
import pnl_negado from "../../../assets/defaut/painel/pnl_def_ope_negacao.svg";

import { ButtonDefaulImgPage } from "../../stylePages";
import { ContentPanelHlpMain } from "../../ContentPanelHlpMain";
import btn_qchaves from "../../../assets/defaut/botao/btn_def_tab_q_chaves.svg";

// ------------------------
// Tipos do grid
// ------------------------
type GridRow = Record<string, unknown>;
type GridColumn = { key: string; header?: string; type?: string };

type LoadTableResult =
  | { exists: false; rows: []; columns?: GridColumn[] }
  | { exists: true; rows: GridRow[]; columns?: GridColumn[] };

const API_BASE =
  (import.meta as unknown as { env?: Record<string, string> })?.env?.VITE_API_URL ??
  "http://localhost:3000/api";

// ------------------------
// Fetch genérico por nome da tabela
// ------------------------
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

const GridViewport = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  box-sizing: border-box;
`;

const Config: React.FC = () => {
  const { state, dispatch } = useAcessoContext();

  // theme
  const [theme, setTheme] = React.useState(light);
  const [ischeck, setIscheck] = React.useState(false);

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => (prev.name === "dark" ? light : dark));
    setIscheck((prev) => !prev);
  }, []);

  // nav
  const navigate = useNavigate();
  const goto = React.useCallback((path: string) => navigate(path), [navigate]);

  // panel bottom msgs
  const [msgpanelbottom, setMsgPanelBottom] = React.useState("Aguardando Seleção...");
  const [messagebottom, setMessageBottom] = React.useState("Aguardando Seleção...");

  // modais "cards"
  const [chksistema, setChkSistema] = React.useState(false);
  const handlerCardChkSistema = React.useCallback(() => setChkSistema((old) => !old), []);

  const [cardhplpage, setCardHlpPage] = React.useState(false);
  const handlerCardHlpPage = React.useCallback(() => setCardHlpPage((old) => !old), []);

  // abre painel dos states
  const [cardstate, setCardState] = React.useState(false);
  const handlerCardState = React.useCallback(() => setCardState((old) => !old), []);

  // master
  const [ismsgchvkey, setIsMsgChvkey] = React.useState(false);
  const [chavemst, setChaveMst] = React.useState(false);

  // sistema inoperante
  const [notOperation, setNotOperation] = React.useState(false);

  React.useEffect(() => {
    setChaveMst(Boolean(state.chvkey));
  }, [state.chvkey]);

  // grid
  const [isgridtable, setIsGridTables] = React.useState(false);
  const [gridLoading, setGridLoading] = React.useState(false);
  const [gridError, setGridError] = React.useState<string | null>(null);
  const [gridRows, setGridRows] = React.useState<GridRow[]>([]);
  const [gridColumns, setGridColumns] = React.useState<GridColumn[] | undefined>(undefined);

  // seleção do grid
  const [selectedRowId, setSelectedRowId] = React.useState<number | null>(null);

  const tableName = React.useMemo(() => String(state.nametable ?? "").trim(), [state.nametable]);
  const hasTableSelected = tableName.length > 0;
  // filtros para o grid
  const [isFilterModalOpen, setIsFilterModalOpen] = React.useState(false);

  //const [filterFields, setFilterFields] = React.useState<{ key: string; label: string }[]>([]);

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

      const total = Array.isArray(result.rows) ? result.rows.length : 0;

      if (total === 0) {
        setMsgPanelBottom(`Tabela em uso: ${tableName}, sem registros.`);
      } else {
        setMsgPanelBottom(`Tabela em uso: ${tableName}, ${total} registros.`);
      }

      setMessageBottom(`Tabela em uso: ${tableName}`);
    } catch {
      setMsgPanelBottom(`Tabela em uso: ${tableName}, inoperante.`);
      setMessageBottom(`Erro ao consultar tabela: ${tableName}`);
    } finally {
      setGridLoading(false);
    }
  }, [hasTableSelected, resetGridUi, tableName]);

  const loadTableGrid = React.useCallback(async () => {
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

      if (result.columns && result.columns.length > 0) {
        setGridColumns(result.columns);
      } else {
        setGridColumns(undefined);
      }

      setGridRows(result.rows ?? []);
      setIsGridTables(true);

      if (!result.rows || result.rows.length === 0) {
        setMsgPanelBottom(`Visualizando tabela ${tableName}, sem registros.`);
      } else {
        setMsgPanelBottom(`Visualizando tabela ${tableName}.`);
      }

      setMessageBottom(`Tabela em uso: ${tableName}`);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Erro ao carregar grid da tabela.";
      setGridError(msg);
      resetGridUi();
      setMsgPanelBottom(`Tabela em uso: ${tableName}, inoperante.`);
      setMessageBottom(`Erro ao carregar grid: ${tableName}`);
    } finally {
      setGridLoading(false);
    }
  }, [hasTableSelected, resetGridUi, tableName]);

  // const handleLoadSummary = React.useCallback(() => {
  //   void loadTableSummary();
  // }, [loadTableSummary]);

  const handleRefresh = React.useCallback(async () => {
    if (!hasTableSelected) {
      setMsgPanelBottom("Aguardando Seleção...");
      setMessageBottom("Aguardando Seleção...");
      return;
    }

    if (state.vistable) {
      setMsgPanelBottom(`Refrescando visualização da tabela ${tableName}...`);
      await loadTableGrid();
      return;
    }

    if (state.regtable) {
      setMsgPanelBottom(`Refrescando dados da tabela ${tableName}...`);
      await loadTableSummary();
      return;
    }

    setMsgPanelBottom(`Tabela selecionada: ${tableName}`);
    setMessageBottom(`Tabela em uso: ${tableName}`);
  }, [hasTableSelected, loadTableGrid, loadTableSummary, state.regtable, state.vistable, tableName]);

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
    if (!hasTableSelected || !state.vistable) return;
    void loadTableGrid();
  }, [hasTableSelected, loadTableGrid, state.vistable]);

  React.useEffect(() => {
    if (!state.listtable || !hasTableSelected) return;
    setMsgPanelBottom(`Selecione o tipo de listagem para a tabela ${tableName}.`);
  }, [hasTableSelected, state.listtable, tableName]);
  
  // useEffect para Filtro
  React.useEffect(() => {
    if (!state.filttable || !hasTableSelected) return;

    if (!gridRows.length) {
      setMsgPanelBottom("Tabela selecionada não contém registros.");
      dispatch({ type: "filttable", payload: false });
      return;
    }

    setMsgPanelBottom(`Filtro de visualização da tabela ${tableName} em preparação.`);
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

    setMsgPanelBottom(`Alteração do registro ${selectedRowId} na tabela ${tableName}.`);
  }, [hasTableSelected, selectedRowId, state.alttable, tableName]);

  React.useEffect(() => {
    if (!state.exctable || !hasTableSelected) return;

    if (selectedRowId == null) {
      setMsgPanelBottom("Selecione um registro para exclusão.");
      return;
    }

    setMsgPanelBottom(`Exclusão do registro ${selectedRowId} na tabela ${tableName}.`);
  }, [hasTableSelected, selectedRowId, state.exctable, tableName]);

  React.useEffect(() => {
    console.log("CONFIG FLOW", {
      nametable: state.nametable,
      regtable: state.regtable,
      vistable: state.vistable,
      listtable: state.listtable,
      filttable: state.filttable,
      inctable: state.inctable,
      alttable: state.alttable,
      exctable: state.exctable,
      isgridtable,
      selectedRowId,
      gridRows: gridRows.length,
    });
  }, [
    gridRows.length,
    isgridtable,
    selectedRowId,
    state.alttable,
    state.exctable,
    state.filttable,
    state.inctable,
    state.listtable,
    state.nametable,
    state.regtable,
    state.vistable,
  ]);

  return (
    <ThemeProvider theme={theme}>
      <LayoutConfig
        imgsys={lg_config}
        titbtnsys="Modulo Config..."
        onclicksys={() => {}}
        titlepg="Config."
        mston={state.ismaster}
        pxheigth={"20px"}
        strcor={state.ismaster ? "#008000" : "transparent"}
        imgbtnhlppg={btn_chelp}
        titbtnhlppg="Help Page..."
        onclickhlppg={handlerCardHlpPage}
        imgbtnaborta={btn_csair}
        titbtnaborta="Fechar..."
        onclickaborta={() => goto("/")}
        imgbtnchk={btn_chksys}
        titbtnchk="Checar Systema..."
        onclickchk={handlerCardChkSistema}
        mstonoff={chavemst}
        imgbtnmst={btn_master}
        titbtnmst="Segurança..."
        onclickmst={() => {
          if (state.chvkey) {
            setIsMsgChvkey(true);
          } else {
            setNotOperation(true);
            setMsgPanelBottom("Sistema Inoperante!");
          }
        }}
        onchange={toggleTheme}
        ischeck={ischeck}
      >
        <ContentCardPageMain open={true}> 
          {/* pwidth={"98%"}> */}
  
          <BarMenuConfig
            // onRefresh={() => void handleRefresh()}
            // onLoadSummary={handleLoadSummary}
            // onUtilitySelect={(value) => {
            //   console.log("UTIL:", value);
            //   setMsgPanelBottom(`Util selecionado: ${value}`);
            // }}
          />
                  
          {isgridtable ? <DivisionPgHztal /> : null}
 
          { isgridtable ? (
            
            <ContentMainPage pborder="3px" open={true} pwidth="100%">
              <ContentMainTitle>
                <h3>Tabela : {tableName}</h3>
              </ContentMainTitle>

              {gridLoading ? <h2>Carregando grid...</h2> : null}
              {gridError ? <h2>{gridError}</h2> : null}

              {!gridLoading && !gridError ? (
                <GridViewport>
                  <GenericGrid
                    tableName={tableName}
                    rows={gridRows}
                    columns={gridColumns}
                  />
                  </GridViewport>
              ) : null}
            </ContentMainPage>
            
          ) : null}

          <DivisionPgHztal />

          <ContentPanelHlpMain pwidth="60px">
            <ButtonDefaulImgPage
              img={btn_qchaves}
              title={"States..."}
              onClick={handlerCardState}
            />

            {cardstate ? (
              <ContentMainPage pborder="1px" open={true} pwidth="100%">
                <ContentMainTitle>
                  <h3>Conteudo dos Payload [ state ]</h3>
                </ContentMainTitle>

                <form>
                  <p>page: {state.page}</p>
                  <p>aplicacao: {state.aplicacao}</p>
                  <p>path_origem: {state.path_origem}</p>
                  <p>path_destino: {state.path_destino}</p>

                  <p>qdd_acesso: {state.qdd_acesso}</p>
                  <p>ult_acesso: {state.ult_acesso}</p>
                  <p>tempo: {state.tempo}</p>
                  <p>dataini: {state.dataini}</p>

                  <p>mdlogin: {state.mdlogin}</p>
                  <p>nmlogin: {state.nmlogin}</p>
                  <p>nrcont: {state.nrcont}</p>
                  <p>nmcont: {state.nmcont}</p>

                  <p>modulo: {state.modulo}</p>
                  <p>cor: {state.cor}</p>
                  <p>acao: {state.acao}</p>
                  <p>nivel: {state.nivel}</p>

                  <p>systemMode: {state.systemMode ? "true" : "false"}</p>
                  <p>initsys: {state.initsys ? "true" : "false"}</p>
                  <p>chkdb: {state.chkdb ? "true" : "false"}</p>

                  <p>chvkey: {state.chvkey ? "true" : "false"}</p>
                  <p>ismaster: {state.ismaster ? "true" : "false"}</p>
                  <p>auth_admin: {state.auth_admin}</p>

                  <p>logado: {state.logado ? "true" : "false"}</p>
                  <p>auth: {state.auth}</p>
                  <p>identificador: {state.identificador}</p>
                  <p>senha: {state.senha}</p>
                  <p>pinnumber: {state.pinnumber}</p>
                  <p>pinchar: {state.pinchar}</p>

                  <p>id_acesso: {state.id_acesso}</p>

                  <div>
                    <strong>permissoes:</strong>
                    <pre>{JSON.stringify(state.permissoes, null, 2)}</pre>
                  </div>

                  <p>nametable: {state.nametable}</p>
                  <p>regtable: {state.regtable ? "true" : "false"}</p>
                  <p>vistable: {state.vistable ? "true" : "false"}</p>
                  <p>listtable: {state.listtable ? "true" : "false"}</p>
                  <p>inctable: {state.inctable ? "true" : "false"}</p>
                  <p>alttable: {state.alttable ? "true" : "false"}</p>
                  <p>exctable: {state.exctable ? "true" : "false"}</p>
                  <p>filttable: {state.filttable ? "true" : "false"}</p>

                  <p>keyVisitante: {state.keyVisitante ? "true" : "false"}</p>
                  <p>keyRecepcao: {state.keyRecepcao ? "true" : "false"}</p>
                  <p>keyDesign: {state.keyDesign ? "true" : "false"}</p>
                  <p>keyAcabamento: {state.keyAcabamento ? "true" : "false"}</p>
                  <p>keyProducao: {state.keyProducao ? "true" : "false"}</p>
                  <p>keyAdministracao: {state.keyAdministracao ? "true" : "false"}</p>
                  <p>keyConfig: {state.keyConfig ? "true" : "false"}</p>

                  <p>id_emp: {state.id_emp}</p>
                  <p>nomeemp: {state.nomeemp}</p>
                  <p>fantemp: {state.fantemp}</p>

                  <p>id_vis: {state.id_vis}</p>
                  <p>nomevis: {state.nomevis}</p>
                  <p>fantvis: {state.fantvis}</p>

                  <p>id_con: {state.id_con}</p>
                  <p>nomecon: {state.nomecon}</p>
                  <p>fantcom: {state.fantcom}</p>

                  <p>id_cli: {state.id_cli}</p>
                  <p>nomecli: {state.nomecli}</p>
                  <p>fantcli: {state.fantcli}</p>

                  <p>id_for: {state.id_for}</p>
                  <p>nomefor: {state.nomefor}</p>
                  <p>fantfor: {state.fantfor}</p>

                  <p>id_fun: {state.id_fun}</p>
                  <p>nomefun: {state.nomefun}</p>
                  <p>fantfun: {state.fantfun}</p>

                  <p>id_user: {state.id_user}</p>
                  <p>nomeuser: {state.nomeuser}</p>
                  <p>mailuser: {state.mailuser}</p>
                  <p>docuser: {state.docuser}</p>
                  <p>foneuser: {state.foneuser}</p>

                  <p>id_logo_emp: {state.id_logo_emp}</p>
                  <p>logo_nmarq_emp: {state.logo_nmarq_emp}</p>
                  <p>logo_svg_emp: {state.logo_svg_emp}</p>

                  <p>id_img_user: {state.id_img_user}</p>
                  <p>img_nmarq_user: {state.img_nmarq_user}</p>
                  <p>img_svg_user: {state.img_svg_user}</p>
                </form>
                <DivisionPgHztal />
              </ContentMainPage>
            ) : null}
          </ContentPanelHlpMain>

          <ContentSidePagePanelBotton bordas="3px" open={true} pwidth="100%">
            <ContentSideMsgPagePanelBotton bordas="3px" label={"Menssagens : "} msg={msgpanelbottom} />

            <ContentSidePageBottonLabel open={true} istitl={true} title={"Refrescar.: "}>
              <ContentSidePageBottonButton
                pxheight={"40px"}
                img={btn_qrefrescar}
                titbtn={"Refrescar..."}
                onClick={() => void handleRefresh()}
                onMouseEnter={() => setMsgPanelBottom("Refrescar a tabela atual conforme o estado ativo.")}
                onMouseLeave={() => {
                  if (!hasTableSelected) {
                    setMsgPanelBottom("Aguardando Seleção...");
                  } else if (state.filttable) {
                    setMsgPanelBottom(`Filtro em tabela ${tableName} em preparação.`);
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

          {/* Checagem do Sistema */}
          {chksistema ? (
            <PageModal
              ptop={"1%"}
              pwidth={"80%"}
              pheight={"95%"}
              imgbm={btn_qclose}
              titbm="Fechar..."
              titulo={"Checagem do Sistema."}
              onclose={() => setChkSistema(false)}
            >
              <CardDesenvolver imgcarddes={pnl_config} onclosesair={() => setChkSistema(false)} />
            </PageModal>
          ) : null}

          {/* Help */}
          {cardhplpage ? (
            <PageModal
              ptop={"1%"}
              pwidth={"80%"}
              pheight={"95%"}
              imgbm={btn_qclose}
              titbm="Fechar..."
              titulo="Help Conteúdo Config."
              onclose={() => setCardHlpPage(false)}
            >
              <CardHlpConfigPage imgcardpage={pnl_config} onclosesair={() => setCardHlpPage(false)} />
            </PageModal>
          ) : null}

          {/* Sistema inoperante */}
          {notOperation ? (
            <PageModal
              ptop={"10%"}
              pwidth={"70%"}
              pheight={"50%"}
              imgbm={btn_qclose}
              titbm="Fechar..."
              titulo={"Acesso Negado"}
              onclose={() => setNotOperation(false)}
            >
              <CardImgNeg
                imgcard={pnl_negado}
                pminheight={"120px"}
                pwidth={"120px"}
                onclickimg={() => setNotOperation(false)}
              />
              <form>
                <p>⛔ ACESSO: SISTEMA INOPERANTE.</p>
                <br />
                <p>Entre em contato com suporte.</p>
              </form>
            </PageModal>
          ) : null}

          {/* Logoff Master */}
          {ismsgchvkey ? (
            <PageModal
              ptop="330px"
              pwidth={"400px"}
              pheight={"40%"}
              imgbm={btn_qclose}
              titbm="Fechar..."
              titulo={"Abortar Master."}
              onclose={() => setIsMsgChvkey(false)}
            >
              <CardLogoffMaster
                pptop="300px"
                bordas="4px"
                pxheight="57px"
                pxwidth="65px"
                imgpnl={pnl_master}
                onclickpnl={() => {}}
                open={true}
                titulo={"Acesso Logoff."}
                msg={"Confirme opção de Logoff."}
                labelConfirm={"SIM para Logoff."}
                labelCancel={"NÃO para Abortar."}
                seconds={30}
                resetKey={chavemst ? 1 : 0}
                onConfirm={() => {
                  logoutMaster(dispatch);
                  setIsMsgChvkey(false);
                }}
                onCancel={() => setIsMsgChvkey(false)}
                onClose={() => setIsMsgChvkey(false)}
              />
            </PageModal>
          ) : null}
          {/* Acesso ao filtro de tabelas */}
          {isFilterModalOpen ? (
            <PageModal
              ptop={"5%"}
              pwidth={"80%"}
              pheight={"80%"}
              imgbm={btn_qclose}
              titbm="Fechar..."
              titulo={"Filtro de Visualização"}
              onclose={() => {
                setIsFilterModalOpen(false);
                dispatch({ type: "filttable", payload: false });
                setMsgPanelBottom(`Filtro abortado para a tabela ${tableName}.`);
              }}
            >
              <CardFilterConfig
                tableName={tableName}
                availableFields={currentFields}
                initialSelectedFields={currentFields}
                onCancel={() => {
                  setIsFilterModalOpen(false);
                  dispatch({ type: "filttable", payload: false });
                  setMsgPanelBottom(`Filtro abortado para a tabela ${tableName}.`);
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

