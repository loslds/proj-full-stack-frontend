
// C:\repository\proj-full-stack-frontend\src\components\pages\modulos\Config.tsx
// C:\repository\proj-full-stack-frontend\src\components\pages\modulos\Config.tsx

import React from "react";
import { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";

import light from "../../../themes/light";
import dark from "../../../themes/dark";

import LayoutConfig from "../../layouts/LayoutConfig";
import { useAcessoContext } from "../../contexts/ContextAcesso";

import { ContentCardPageMain } from "../../ContentCardPageMain";
import {
  BarMenuConfig,
  type GridUtilityAction,
  type GridViewMode,
} from "../../grids/BarMenuConfig";

import GenericGrid from "../../grids/GenericGrid";

import { ContentMainGrid } from "@/components/ContentMainGrid";
import { ContentMainTitle } from "../../ContentMainTitle";
import { DivisionPgHztal } from "../../stylePages";

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

import lg_config from "../../../assets/defaut/logo/lg_def_mod_config.svg";
import pnl_config from "../../../assets/defaut/painel/pnl_def_mod_config.svg";
import btn_chelp from "../../../assets/defaut/botao/btn_def_c_help.svg";
import btn_csair from "../../../assets/defaut/botao/btn_def_c_sair.svg";
import btn_chksys from "../../../assets/defaut/botao/btn_def_mod_c_config.svg";
import btn_master from "../../../assets/defaut/botao/bnt_def_q_master.svg";
import pnl_master from "../../../assets/defaut/painel/pnl_def_ope_esclamacao.svg";

import btn_qrefrescar from "../../../assets/defaut/botao/btn_def_q_refrescar.svg";
import btn_qclose from "../../../assets/defaut/botao/btn_def_q_close.svg";
import pnl_negado from "../../../assets/defaut/painel/pnl_def_ope_negacao.svg";

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
    ?.VITE_API_URL ?? "http://localhost:3000/api";

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
  const [ischeck, setIscheck] = React.useState(false);

  const navigate = useNavigate();
  const goto = React.useCallback((path: string) => navigate(path), [navigate]);

  const [msgpanelbottom, setMsgPanelBottom] = React.useState(
    "Aguardando Seleção..."
  );
  const [messagebottom, setMessageBottom] = React.useState(
    "Aguardando Seleção..."
  );

  const [chksistema, setChkSistema] = React.useState(false);
  const [cardhplpage, setCardHlpPage] = React.useState(false);

  const [ismsgchvkey, setIsMsgChvkey] = React.useState(false);
  const [chavemst, setChaveMst] = React.useState(false);
  const [notOperation, setNotOperation] = React.useState(false);

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

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => (prev.name === "dark" ? light : dark));
    setIscheck((prev) => !prev);
  }, []);

  const handlerCardChkSistema = React.useCallback(() => {
    setChkSistema((old) => !old);
  }, []);

  const handlerCardHlpPage = React.useCallback(() => {
    setCardHlpPage((old) => !old);
  }, []);

  React.useEffect(() => {
    setChaveMst(Boolean(state.chvkey));
  }, [state.chvkey]);

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

  return (
    <ThemeProvider theme={theme}>
      <LayoutConfig
        imgsys={lg_config}
        titbtnsys="Modulo Config..."
        onclicksys={() => {}}
        titlepg="Config."
        mston={state.ismaster}
        pxheigth="20px"
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
                img={btn_qrefrescar}
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

          {isGridModalOpen ? (
            <PageModal
              ptop="1%"
              pwidth="95%"
              pheight="95%"
              imgbm={btn_qclose}
              titbm="Fechar..."
              titulo={`Tabela: ${tableName} | Modo: ${gridMode}`}
              onclose={() => setIsGridModalOpen(false)}
            >
              {renderGrid()}
            </PageModal>
          ) : null}

          {chksistema ? (
            <PageModal
              ptop="1%"
              pwidth="80%"
              pheight="95%"
              imgbm={btn_qclose}
              titbm="Fechar..."
              titulo="Checagem do Sistema."
              onclose={() => setChkSistema(false)}
            >
              <CardDesenvolver
                imgcarddes={pnl_config}
                onclosesair={() => setChkSistema(false)}
              />
            </PageModal>
          ) : null}

          {cardhplpage ? (
            <PageModal
              ptop="1%"
              pwidth="80%"
              pheight="95%"
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
          ) : null}

          {notOperation ? (
            <PageModal
              ptop="10%"
              pwidth="70%"
              pheight="50%"
              imgbm={btn_qclose}
              titbm="Fechar..."
              titulo="Acesso Negado"
              onclose={() => setNotOperation(false)}
            >
              <CardImgNeg
                imgcard={pnl_negado}
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

          {ismsgchvkey ? (
            <PageModal
              ptop="330px"
              pwidth="400px"
              pheight="40%"
              imgbm={btn_qclose}
              titbm="Fechar..."
              titulo="Abortar Master."
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
                titulo="Acesso Logoff."
                msg="Confirme opção de Logoff."
                labelConfirm="SIM para Logoff."
                labelCancel="NÃO para Abortar."
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

          {isFilterModalOpen ? (
            <PageModal
              // ptop="5%"
              // pwidth="65%"
              // pheight="70%"
              imgbm={btn_qclose}
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







