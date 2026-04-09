
// C:\repository\proj-full-stack-frontend\src\components\pages\modulos\Config.tsx
import React from "react";

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
// import { ContentSBItensMenu } from "../../../components/sidebar/ContentSBItensMenu";

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
import { AutoCloseTimer } from "../../AutoCloseTimer";
import { ContentSidePagePanelBotton } from "../../sidebar/ContentSidePagePanelBotton";
import { ContentSidePageBottonLabel } from "../../sidebar/ContentSidePageBottonLabel";
import { ContentSidePageBottonButton } from "../../sidebar/ContentSidePageBottonButton";
import { ContentSideMsgPagePanelBotton } from "../../sidebar/ContentSideMsgPagePanelBotton";
import { CardHlpConfigPage } from "../../../cards/CardHlpConfigPage";

import { CardLogoffMaster } from "../../../cards/CardLogoffMaster";
import { logoutMaster } from "../../contexts/helpers/logoutMaster";
import { CardImgNeg } from "../../../cards/CardImgNeg";
import { CardDesenvolver } from "../../../cards/CardDesenvolver";

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
// (rota que você testou no Thunder: /api/system/table/:name)
// ------------------------
async function fetchTableByName(tableName: string): Promise<LoadTableResult> {
  const url = `${API_BASE}/system/table/${encodeURIComponent(tableName)}`;

  const res = await fetch(url, { method: "GET" });

  // tabela não existe / rota retorna 404
  if (res.status === 404) {
    return { exists: false, rows: [] };
  }

  // erro geral
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
  const [msgpanelbottom, setMsgPanelBottom] = React.useState("");
  const [messagebottom, setMessageBottom] = React.useState("Aguardando Seleção...");

  // modais "cards"
  const [chksistema, setChkSistema] = React.useState(false);
  const handlerCardChkSistema = React.useCallback(() => setChkSistema((old) => !old), []);

  const [cardhplpage, setCardHlpPage] = React.useState(false);
  const handlerCardHlpPage = React.useCallback(() => setCardHlpPage((old) => !old), []);
// abre painel dos states
  const [cardstate, setCardState] = React.useState(false);
  const handlerCardState = React.useCallback(() => setCardState((old) => !old), []);
  
  // modais de retorno tabela
  const [nottables, setNotTables] = React.useState(false);
  const [notregstable, setNotRegsTable] = React.useState(false);
  const [notOperation, setNotOperation] = React.useState(false);

  // master
  const [ismsgchvkey, setIsMsgChvkey] = React.useState(false);
  const [chavemst, setChaveMst] = React.useState(false);

  React.useEffect(() => {
    setChaveMst(Boolean(state.chvkey));
  }, [state.chvkey]);

  // grid
  //const [ispggrid, setIsPgGrid] = React.useState(true);
  const [isgridtable, setIsGridTables] = React.useState(false);
  const [gridLoading, setGridLoading] = React.useState(false);
  const [gridError, setGridError] = React.useState<string | null>(null);
  const [gridRows, setGridRows] = React.useState<GridRow[]>([]);
  const [gridColumns, setGridColumns] = React.useState<GridColumn[] | undefined>(undefined);

  const tableName = React.useMemo(() => String(state.nametable ?? "").trim(), [state.nametable]);
  const hasTableSelected = tableName.length > 0;

  // intenção de abrir/manipular tabela (inclui regtable para listagem)
  const hasOpenIntent = React.useMemo(() => {
    return Boolean(state.inctable || state.alttable || state.exctable || state.listtable || state.regtable);
  }, [state.inctable, state.alttable, state.exctable, state.listtable, state.regtable]);

  const canLoad = hasTableSelected && hasOpenIntent;

  const resetGridUi = React.useCallback(() => {
    setNotTables(false);
    setNotRegsTable(false);
    setIsGridTables(false);
    setGridError(null);
    setGridRows([]);
    setGridColumns(undefined);
  }, []);

  const loadTable = React.useCallback(async () => {
    if (!canLoad) return;

    setGridLoading(true);
    setGridError(null);

    setNotTables(false);
    setNotRegsTable(false);

    setIsGridTables(false);
    setGridRows([]);
    setGridColumns(undefined);

    try {
      const result = await fetchTableByName(tableName);

      if (!result.exists) {
        setNotTables(true);
        setIsGridTables(false);
        setMessageBottom(`ATENÇÃO... Tabela em uso: ${tableName} (inexistente).`);
        return;
      }

      setIsGridTables(true);
      setMessageBottom(`ATENÇÃO... Tabela em uso: ${tableName}`);

      if (result.columns && result.columns.length > 0) {
        setGridColumns(result.columns);
      }

      setGridRows(result.rows ?? []);

      if (!result.rows || result.rows.length === 0) {
        setNotRegsTable(true);
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Erro ao carregar tabela.";

      setGridError(msg);
      setNotTables(true);
      setIsGridTables(false);
      setMessageBottom(`ATENÇÃO... Erro ao carregar tabela: ${tableName}`);
    } finally {
      setGridLoading(false);
    }
  }, [canLoad, tableName]);

  React.useEffect(() => {
    setMessageBottom("");
    if (!hasTableSelected) {
      resetGridUi();
      setMessageBottom("Aguardando Seleção...");
      return;
    }

    setMessageBottom(`ATENÇÃO... Tabela em uso: ${tableName}`);

    if (!canLoad) {
      resetGridUi();
      return;
    }

    void loadTable();
  }, [canLoad, hasTableSelected, loadTable, resetGridUi, tableName]);

  React.useEffect(() => {
    setMessageBottom("");
    dispatch({ type: "page", payload: "Config" });
    dispatch({ type: "aplicacao", payload: "OPÇÃO" });
    dispatch({ type: "modulo", payload: "Config" });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <LayoutConfig
        imgsys={lg_config}
        titbtnsys="Modulo Config..."
        onclicksys={() => {}}
        titlepg="Config."

        mston={state.ismaster}
        pxheigth={'20px'}
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
        <ContentCardPageMain open={true} pwidth={"100%"}>
          <BarMenuConfig
            onRefresh={() => void loadTable()}
            onUtilitySelect={(value) => {
            console.log("UTIL:", value);
            }}
          />

          {isgridtable ? <DivisionPgHztal /> : null}

          {isgridtable ? (
            <ContentMainPage pborder="3px" open={true} pwidth="100%">
              <ContentMainTitle>
                <h3>Tabela : {tableName}</h3>
              </ContentMainTitle>

              {gridLoading ? <h2>Carregando grid...</h2> : null}
              {gridError ? <h2>{gridError}</h2> : null}

              {!gridLoading && !gridError ? (
                <GenericGrid tableName={tableName} rows={gridRows} columns={gridColumns} />
              ) : null}
            </ContentMainPage>
          ) : null}

          <DivisionPgHztal />
          <ContentPanelHlpMain pwidth="60px">

            <ButtonDefaulImgPage 
              img={btn_qchaves}
              title={"States..."}
              onClick={ handlerCardState }
            />

            { cardstate ? (
              
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

                  {/* <p>permissoes: {JSON.stringify(state.permissoes)}</p> */}
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
                onClick={() => void loadTable()}
                onMouseEnter={() => setMsgPanelBottom("Refrescar a Tabela...")}
                onMouseLeave={() => setMsgPanelBottom("")}
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

          {/* Tabela inexistente/inacessível */}
          {nottables ? (
            <PageModal
              ptop={"10%"}
              pwidth={"70%"}
              pheight={"50%"}
              imgbm={btn_qclose}
              titbm="Fechar..."
              titulo={"Acesso Negado"}
              onclose={() => setNotTables(false)}
            >
              <CardImgNeg
                imgcard={pnl_negado}
                pminheight={"120px"}
                pwidth={"120px"}
                onclickimg={() => setNotTables(false)}
              />
              <form>
                <br />
                <p>⛔ Tabela inexistente ou inacessível...</p>
                <br />
              </form>
              <AutoCloseTimer onClose={() => setNotTables(false)} seconds={5} />
            </PageModal>
          ) : null}

          {/* Tabela existe mas sem registros */}
          {notregstable ? (
            <PageModal
              ptop={"10%"}
              pwidth={"70%"}
              pheight={"50%"}
              imgbm={btn_qclose}
              titbm="Fechar..."
              titulo="Tabela Ativa..."
              onclose={() => setNotRegsTable(false)}
            >
              <CardImgNeg
                imgcard={pnl_negado}
                pminheight={"120px"}
                pwidth={"120px"}
                onclickimg={() => setNotRegsTable(false)}
              />
              <form>
                <br />
                <p>⚠️ {tableName} sem registros.</p>
                <br />
                <p>Podendo ser manipulada.</p>
                <br />
              </form>
              <AutoCloseTimer onClose={() => setNotRegsTable(false)} seconds={5} />
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
              <AutoCloseTimer onClose={() => setNotOperation(false)} seconds={5} />
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
        </ContentCardPageMain>
      </LayoutConfig>
    </ThemeProvider>
  );
};

export default Config;








////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// // C:\repository\proj-full-stack-frontend\src\components\pages\modulos\Config.tsx
// import React from "react";

// import { ThemeProvider } from "styled-components";
// import light from "../../../themes/light";
// import dark from "../../../themes/dark";

// import { useNavigate } from "react-router-dom";
// import LayoutConfig from "../../layouts/LayoutConfig";
// import { useAcessoContext } from "../../contexts/ContextAcesso";

// // main page
// import { ContentCardPageMain } from "../../ContentCardPageMain";
// import { BarMenuConfig } from "../../sidebar/BarMenuConfig";
// import { DivisionPgHztal } from "../../stylePages";

// // img do Header
// import lg_config from "../../../assets/defaut/logo/lg_def_mod_config.svg";
// import pnl_config from "../../../assets/defaut/painel/pnl_def_mod_config.svg";
// import btn_chelp from "../../../assets/defaut/botao/btn_def_c_help.svg";
// import btn_csair from "../../../assets/defaut/botao/btn_def_c_sair.svg";
// import btn_chksys from "../../../assets/defaut/botao/btn_def_mod_c_config.svg";
// import btn_master from "../../../assets/defaut/botao/bnt_def_q_master.svg";
// import pnl_master from "../../../assets/defaut/painel/pnl_def_ope_esclamacao.svg";

// // main do grid
// import GenericGrid from "../../GenericGrid";
// import { ContentMainPage } from "../../ContentMainPage";
// import { ContentMainTitle } from "../../ContentMainTitle";

// // panel bottom page
// import { PageModal } from "../PageModal";
// import { AutoCloseTimer } from "../../AutoCloseTimer";
// import { ContentSidePagePanelBotton } from "../../sidebar/ContentSidePagePanelBotton";
// import { ContentSidePageBottonLabel } from "../../sidebar/ContentSidePageBottonLabel";
// import { ContentSidePageBottonButton } from "../../sidebar/ContentSidePageBottonButton";
// import { ContentSideMsgPagePanelBotton } from "../../sidebar/ContentSideMsgPagePanelBotton";
// import { CardHlpConfigPage } from "../../../cards/CardHlpConfigPage";

// import { CardLogoffMaster } from "../../../cards/CardLogoffMaster";
// import { logoutMaster } from "../../contexts/helpers/logoutMaster";
// import { CardImgNeg } from "../../../cards/CardImgNeg";
// import { CardDesenvolver } from "../../../cards/CardDesenvolver";

// // img do painel Bottom
// import btn_qrefrescar from "../../../assets/defaut/botao/btn_def_q_refrescar.svg";
// import btn_qclose from "../../../assets/defaut/botao/btn_def_q_close.svg";
// import pnl_negado from "../../../assets/defaut/painel/pnl_def_ope_negacao.svg";

// // ------------------------
// // Tipos do grid
// // ------------------------
// type GridRow = Record<string, unknown>;
// type GridColumn = { key: string; header?: string; type?: string };

// type LoadTableResult =
//   | { exists: false; rows: []; columns?: GridColumn[] }
//   | { exists: true; rows: GridRow[]; columns?: GridColumn[] };

// const API_BASE = 
//   (import.meta as unknown as { env?: Record<string, string> })?.env?.VITE_API_URL ??
//   "http://localhost:3000/api";

// // Fetch genérico por nome da tabela
// async function fetchTableByName(tableName: string): Promise<LoadTableResult> {
//   const url = `${API_BASE}/system/table/${encodeURIComponent(tableName)}`;

//   const res = await fetch(url, { method: "GET" });

//   // tabela não existe
//   if (res.status === 404) {
//     return { exists: false, rows: [] };
//   }

//   // erro geral
//   if (!res.ok) {
//     throw new Error(`Erro ao carregar tabela (HTTP ${res.status})`);
//   }

//   const data = (await res.json()) as Partial<{
//     exists: boolean;
//     rows: GridRow[];
//     columns: GridColumn[];
//   }>;

//   // backend respondeu mas disse que não existe
//   if (!data.exists) {
//     return { exists: false, rows: [] };
//   }

//   return {
//     exists: true,
//     rows: Array.isArray(data.rows) ? data.rows : [],
//     columns: Array.isArray(data.columns) ? data.columns : undefined,
//   };
// }

// const Config: React.FC = () => {
//   const { state, dispatch } = useAcessoContext();

//   const [theme, setTheme] = React.useState(light);
//   const [ischeck, setIscheck] = React.useState(false);

//   const toggleTheme = React.useCallback(() => {
//     setTheme((prev) => (prev.name === "dark" ? light : dark));
//     setIscheck((prev) => !prev);
//   }, []);

//   const navigate = useNavigate();
//   const goto = React.useCallback((path: string) => navigate(path), [navigate]);

//   const [msgpanelbottom, setMsgPanelBottom] = React.useState("");
//   const [messagebottom, setMessageBottom] = React.useState("Aguardando Seleção...");

//   const [chksistema, setChkSistema] = React.useState(false);
//   const handlerCardChkSistema = React.useCallback(() => {
//     setChkSistema((old) => !old);
//   }, []);

//   const [cardhplpage, setCardHlpPage] = React.useState(false);
//   const handlerCardHlpPage = React.useCallback(() => {
//     setCardHlpPage((old) => !old);
//   }, []);

//   // modais
//   const [nottables, setNotTables] = React.useState(false);
//   const [notregstable, setNotRegsTable] = React.useState(false);
//   const [notOperation, setNotOperation] = React.useState(false);

//   // master modal
//   const [ismsgchvkey, setIsMsgChvkey] = React.useState(false);
//   const [chavemst, setChaveMst] = React.useState(false);

//   React.useEffect(() => {
//     setChaveMst(Boolean(state.chvkey));
//   }, [state.chvkey]);

//   // main grid
//   const [isgridtable, setIsGridTables] = React.useState(false);
//   const [gridLoading, setGridLoading] = React.useState(false);
//   const [gridError, setGridError] = React.useState<string | null>(null);

//   // dados do grid
//   const [gridRows, setGridRows] = React.useState<GridRow[]>([]);
//   const [gridColumns, setGridColumns] = React.useState<GridColumn[] | undefined>(undefined);

//   const tableName = React.useMemo(() => String(state.nametable ?? "").trim(), [state.nametable]);

//   const hasTableSelected = tableName.length > 0;

//   // “intenção” de abrir/manipular tabela
//   const hasOpenIntent = React.useMemo(() => {
//     return Boolean(state.inctable || state.alttable || state.exctable || state.reltable || state.regtable);
//   }, [state.inctable, state.alttable, state.exctable, state.reltable, state.regtable]);

//   const canLoad = hasTableSelected && hasOpenIntent;

//   const resetGridUi = React.useCallback(() => {
//     setNotTables(false);
//     setNotRegsTable(false);
//     setIsGridTables(false);
//     setGridError(null);
//     setGridRows([]);
//     setGridColumns(undefined);
//   }, []);

//   const loadTable = React.useCallback(async () => {
//     if (!canLoad) return;

//     setGridLoading(true);
//     setGridError(null);
//     setNotTables(false);
//     setNotRegsTable(false);

//     // sempre limpa o grid antes de recarregar (evita “mix” de tabela anterior)
//     setIsGridTables(false);
//     setGridRows([]);
//     setGridColumns(undefined);

//     try {
//       const result = await fetchTableByName(tableName);

//       if (!result.exists) {
//         setMessageBottom(`Tabela em uso: ${tableName} (inexistente).`);
//         setNotTables(true);
//         setIsGridTables(false);
//         return;
//       }

//       setIsGridTables(true);
//       setMessageBottom(`Tabela em uso: ${tableName}`);

//       if (result.columns && result.columns.length > 0) setGridColumns(result.columns);
//       setGridRows(result.rows);

//       if (!result.rows || result.rows.length === 0) {
//         setNotRegsTable(true);
//       }
//     } catch (e: unknown) {
//       const msg = e instanceof Error ? e.message : "Erro ao carregar tabela.";
//       setGridError(msg);
//       setMessageBottom(`Erro ao carregar: ${tableName}`);

//       setNotTables(true);
//       setIsGridTables(false);
//     } finally {
//       setGridLoading(false);
//     }
//   }, [canLoad, tableName]);

//   // Reage a mudança de “nametable” ou flags de intenção
//   React.useEffect(() => {
//     if (!canLoad) {
//       resetGridUi();
//       if (!hasTableSelected) setMessageBottom("Aguardando Seleção...");
//       return;
//     }

//     void loadTable();
//   }, [canLoad, hasTableSelected, loadTable, resetGridUi]);

//   return (
//     <ThemeProvider theme={theme}>
//       <LayoutConfig
//         imgsys={lg_config}
//         titbtnsys="Modulo Config..."
//         onclicksys={() => {}}
//         titlepg="Config."
//         imgbtnhlppg={btn_chelp}
//         titbtnhlppg="Help Page..."
//         onclickhlppg={handlerCardHlpPage}
//         imgbtnaborta={btn_csair}
//         titbtnaborta="Fechar..."
//         onclickaborta={() => goto("/")}
//         imgbtnchk={btn_chksys}
//         titbtnchk="Checar Systema..."
//         onclickchk={handlerCardChkSistema}
//         mstonoff={chavemst}
//         imgbtnmst={btn_master}
//         titbtnmst="Segurança..."
//         onclickmst={() => {
//           if (state.chvkey) {
//             setIsMsgChvkey(true);
//           } else {
//             setNotOperation(true);
//             setMsgPanelBottom("Sistema Inoperante!");
//           }
//         }}
//         onchange={toggleTheme}
//         ischeck={ischeck}
//       >
//         <ContentCardPageMain open={true} pwidth={"100%"}>
//           <BarMenuConfig />

//           {isgridtable ? <DivisionPgHztal /> : null}

//           {isgridtable ? (
//             <ContentMainPage pborder="3px" open={true} pwidth="100%">
//               <ContentMainTitle>
//                 <h3>{tableName}</h3>
//               </ContentMainTitle>

//               {gridLoading ? <h2>Carregando grid...</h2> : null}
//               {gridError ? <h2>{gridError}</h2> : null}

//               {!gridLoading && !gridError ? (
//                 <GenericGrid tableName={tableName} rows={gridRows} columns={gridColumns} />
//               ) : null}
//             </ContentMainPage>
//           ) : null}

//           <DivisionPgHztal />

//           <ContentSidePagePanelBotton bordas="3px" open={true} pwidth="100%">
//             <ContentSideMsgPagePanelBotton bordas="3px" label={"Menssagens : "} msg={msgpanelbottom} />

//             <ContentSidePageBottonLabel open={true} istitl={true} title={"Refrescar.: "}>
//               <ContentSidePageBottonButton
//                 pxheight={"40px"}
//                 img={btn_qrefrescar}
//                 titbtn={"Refrescar..."}
//                 onClick={() => void loadTable()}
//                 onMouseEnter={() => setMsgPanelBottom("Refrescar a Tabela...")}
//                 onMouseLeave={() => setMsgPanelBottom("")}
//               />
//             </ContentSidePageBottonLabel>

//             <div>
//               <label>ATENÇÃO...{messagebottom}</label>
//             </div>
//           </ContentSidePagePanelBotton>

//           {chksistema ? (
//             <PageModal
//               ptop={"1%"}
//               pwidth={"80%"}
//               pheight={"95%"}
//               imgbm={btn_qclose}
//               titbm="Fechar..."
//               titulo={"Checagem do Sistema."}
//               onclose={() => setChkSistema(false)}
//             >
//               <CardDesenvolver imgcarddes={pnl_config} onclosesair={() => setChkSistema(false)} />
//             </PageModal>
//           ) : null}

//           {cardhplpage ? (
//             <PageModal
//               ptop={"1%"}
//               pwidth={"80%"}
//               pheight={"95%"}
//               imgbm={btn_qclose}
//               titbm="Fechar..."
//               titulo="Help Conteúdo Config."
//               onclose={() => setCardHlpPage(false)}
//             >
//               <CardHlpConfigPage imgcardpage={pnl_config} onclosesair={() => setCardHlpPage(false)} />
//             </PageModal>
//           ) : null}

//           {nottables ? (
//             <PageModal
//               ptop={"10%"}
//               pwidth={"70%"}
//               pheight={"50%"}
//               imgbm={btn_qclose}
//               titbm="Fechar..."
//               titulo={"Acesso Negado"}
//               onclose={() => setNotTables(false)}
//             >
//               <CardImgNeg
//                 imgcard={pnl_negado}
//                 pminheight={"120px"}
//                 pwidth={"120px"}
//                 onclickimg={() => setNotTables(false)}
//               />
//               <form>
//                 <br />
//                 <p>⛔ Tabela inexistente ou inacessível...</p>
//                 <br />
//               </form>
//               <AutoCloseTimer onClose={() => setNotTables(false)} seconds={5} />
//             </PageModal>
//           ) : null}

//           {notregstable ? (
//             <PageModal
//               ptop={"10%"}
//               pwidth={"70%"}
//               pheight={"50%"}
//               imgbm={btn_qclose}
//               titbm="Fechar..."
//               titulo="Tabela Ativa..."
//               onclose={() => setNotRegsTable(false)}
//             >
//               <CardImgNeg
//                 imgcard={pnl_negado}
//                 pminheight={"120px"}
//                 pwidth={"120px"}
//                 onclickimg={() => setNotRegsTable(false)}
//               />
//               <form>
//                 <br />
//                 <p>⚠️ {tableName} sem registros.</p>
//                 <br />
//                 <p>Podendo ser manipulada.</p>
//                 <br />
//               </form>
//               <AutoCloseTimer onClose={() => setNotRegsTable(false)} seconds={5} />
//             </PageModal>
//           ) : null}

//           {notOperation ? (
//             <PageModal
//               ptop={"10%"}
//               pwidth={"70%"}
//               pheight={"50%"}
//               imgbm={btn_qclose}
//               titbm="Fechar..."
//               titulo={"Acesso Negado"}
//               onclose={() => setNotOperation(false)}
//             >
//               <CardImgNeg
//                 imgcard={pnl_negado}
//                 pminheight={"120px"}
//                 pwidth={"120px"}
//                 onclickimg={() => setNotOperation(false)}
//               />
//               <form>
//                 <p>⛔ ACESSO: SISTEMA INOPERANTE.</p>
//                 <br />
//                 <p>Entre em contato com suporte.</p>
//               </form>
//               <AutoCloseTimer onClose={() => setNotOperation(false)} seconds={5} />
//             </PageModal>
//           ) : null}

//           {ismsgchvkey ? (
//             <PageModal
//               ptop="330px"
//               pwidth={"400px"}
//               pheight={"40%"}
//               imgbm={btn_qclose}
//               titbm="Fechar..."
//               titulo={"Abortar Master."}
//               onclose={() => setIsMsgChvkey(false)}
//             >
//               <CardLogoffMaster
//                 pptop="300px"
//                 bordas="4px"
//                 pxheight="57px"
//                 pxwidth="65px"
//                 imgpnl={pnl_master}
//                 onclickpnl={() => {}}
//                 open={true}
//                 titulo={"Acesso Logoff."}
//                 msg={"Confirme opção de Logoff."}
//                 labelConfirm={"SIM para Logoff."}
//                 labelCancel={"NÃO para Abortar."}
//                 seconds={30}
//                 resetKey={chavemst ? 1 : 0}
//                 onConfirm={() => {
//                   logoutMaster(dispatch);
//                   setIsMsgChvkey(false);
//                 }}
//                 onCancel={() => setIsMsgChvkey(false)}
//                 onClose={() => setIsMsgChvkey(false)}
//               />
//             </PageModal>
//           ) : null}
//         </ContentCardPageMain>
//       </LayoutConfig>
//     </ThemeProvider>
//   );
// };

// export default Config;

