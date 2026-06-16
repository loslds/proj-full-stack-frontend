// src/components/grids/BarMenuConfig.tsx

import React from "react";

import { useAcessoContext } from "../contexts/ContextAcesso";
import { useSystemTables } from "../../funcs/funcs/useSystemTables";

import { ContentBarMainMenu } from "../sidebar/ContentBarMainMenu";
import { ContentBarButtonMenu } from "../sidebar/ContentBarButtonMenu";
import { ContentDropdownMenu } from "../sidebar/ContentBarDropdownMenu";
import { ContentBarButtonGreenMenu } from "../sidebar/ContentBarButtonGreenMenu";
import { ContentBarButtonRedMenu } from "../sidebar/ContentBarButtonRedMenu";
import { ContentBarButtonYelowMenu } from "../sidebar/ContentBarButtonYelowMenu";
import { Dropdown, DropdownOption } from "./Dropdown";
import { PageModal } from "../pages/PageModal";
import { CardHlpStateContextPage } from "../../cards/CardHlpStateContextPage";
import btn_def_q_close from '../../assets/defaults/btn/btn_def_q_close.svg';
import pnl_def_mod_config from '../../assets/defaults/pnl/pnl_def_mod_config.svg';
import btn_def_q_menuoff from '../../assets/defaults/btn/btn_def_q_menuoff.svg';
import btn_def_q_menuon from '../../assets/defaults/btn/btn_def_q_menuon.svg';

export type GridViewMode = "default" | "list" | "detail";

export type GridUtilityAction =
  | "reset_table_current"
  | "seed_table_current"
  | "sync_table_current"
  | "sync_systables"
  | "check_system"
  | "run_seeds"
  | "reprocess_images"
  | "sync_services"
  | "logoff_master"
  | "clear_session"
  | "check_access"
  | "filter_fields"
  | "filter_text"
  | "filter_id"
  | "listar_simples"
  | "listar_detalhada"
  | "listar_impressao";

export interface BarMenuConfigProps {
  onRefresh?: () => void;
  onUtilitySelect?: (value: GridUtilityAction, tableName?: string) => void;
  onLoadSummary?: () => void;
  onViewModeSelect?: (tableName: string, mode: GridViewMode) => void;
}

const TABLE_ACTIONS = [
  "vistable",
  "filttable",
  "regtable",
  "listtable",
  "inctable",
  "alttable",
  "exctable",
] as const;

export const BarMenuConfig: React.FC<BarMenuConfigProps> = ({
  onRefresh,
  onUtilitySelect,
  onLoadSummary,
  onViewModeSelect,
}) => {
  const { dispatch } = useAcessoContext();

  const [cardstate, setCardState] = React.useState(false);
  const [tableName, setTableName] = React.useState("");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isTableActive, setIsTableActive] = React.useState(false);

  const { options, loading, error } = useSystemTables();

  const dropdownOptions = React.useMemo<DropdownOption[]>(
    () => options ?? [],
    [options]
  );

  const handlerCardState = React.useCallback(() => {
    setCardState((old) => !old);
  }, []);

  const resetTableActions = React.useCallback(() => {
    TABLE_ACTIONS.forEach((type) => {
      dispatch({ type, payload: false });
    });
  }, [dispatch]);

  const setCurrentTable = React.useCallback(
    (name: string) => {
      setTableName(name);
      dispatch({ type: "nametable", payload: name });
    },
    [dispatch]
  );

  const activateTable = React.useCallback(() => {
    dispatch({ type: "regtable", payload: true });
    setIsTableActive(true);
  }, [dispatch]);

  const handleToggleMenu = React.useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleSelectTable = React.useCallback(
    (name: string) => {
      setCurrentTable(name);
      resetTableActions();
      setIsTableActive(false);
    },
    [setCurrentTable, resetTableActions]
  );

  const handleOpenSelectedTable = React.useCallback(() => {
    if (!tableName) return;

    setCurrentTable(tableName);
    resetTableActions();
    activateTable();

    onLoadSummary?.();
  }, [
    tableName,
    setCurrentTable,
    resetTableActions,
    activateTable,
    onLoadSummary,
  ]);

  const handleRefresh = React.useCallback(() => {
    if (!tableName) return;

    setCurrentTable(tableName);
    onRefresh?.();
  }, [tableName, setCurrentTable, onRefresh]);

  const handleViewMode = React.useCallback(
    (mode: GridViewMode) => {
      if (!tableName) return;

      setCurrentTable(tableName);
      resetTableActions();

      dispatch({ type: "regtable", payload: true });
      dispatch({ type: "vistable", payload: true });
      dispatch({ type: "filttable", payload: false });

      setIsTableActive(true);
      onViewModeSelect?.(tableName, mode);
    },
    [
      tableName,
      setCurrentTable,
      resetTableActions,
      dispatch,
      onViewModeSelect,
    ]
  );

  const handleUtilityAction = React.useCallback(
    (value: GridUtilityAction) => {
      if (!tableName) return;

      setCurrentTable(tableName);
      onUtilitySelect?.(value, tableName);
    },
    [tableName, setCurrentTable, onUtilitySelect]
  );

  const handleFilterMode = React.useCallback(
    (value: GridUtilityAction) => {
      if (!tableName) return;

      setCurrentTable(tableName);
      resetTableActions();

      dispatch({ type: "regtable", payload: true });
      dispatch({ type: "vistable", payload: false });
      dispatch({ type: "filttable", payload: true });

      setIsTableActive(true);
      onUtilitySelect?.(value, tableName);
    },
    [
      tableName,
      setCurrentTable,
      resetTableActions,
      dispatch,
      onUtilitySelect,
    ]
  );

  const handleListMode = React.useCallback(
    (value: GridUtilityAction) => {
      if (!tableName) return;

      setCurrentTable(tableName);
      resetTableActions();

      dispatch({ type: "regtable", payload: true });
      dispatch({ type: "listtable", payload: true });

      setIsTableActive(true);
      onUtilitySelect?.(value, tableName);
    },
    [
      tableName,
      setCurrentTable,
      resetTableActions,
      dispatch,
      onUtilitySelect,
    ]
  );

  const handleCrudOperation = React.useCallback(
    (operation: "incluir" | "alterar" | "excluir") => {
      if (!tableName) return;

      setCurrentTable(tableName);
      resetTableActions();

      dispatch({ type: "regtable", payload: true });

      if (operation === "incluir") {
        dispatch({ type: "inctable", payload: true });
      }

      if (operation === "alterar") {
        dispatch({ type: "alttable", payload: true });
      }

      if (operation === "excluir") {
        dispatch({ type: "exctable", payload: true });
      }

      setIsTableActive(true);
    },
    [tableName, setCurrentTable, resetTableActions, dispatch]
  );

  const handleSelectOperation = React.useCallback(
    (value: string) => {
      switch (value) {
        case "view_default":
          handleViewMode("default");
          break;

        case "view_list":
          handleViewMode("list");
          break;

        case "view_detail":
          handleViewMode("detail");
          break;

        case "filter_fields":
        case "filter_text":
        case "filter_id":
          handleFilterMode(value);
          break;

        case "listar_simples":
        case "listar_detalhada":
        case "listar_impressao":
          handleListMode(value);
          break;

        case "incluir":
        case "alterar":
        case "excluir":
          handleCrudOperation(value);
          break;

        default:
          break;
      }
    },
    [handleViewMode, handleFilterMode, handleListMode, handleCrudOperation]
  );

  const handleSelectUtility = React.useCallback(
    (value: string) => {
      const utilityValue = value as GridUtilityAction;

      const needsCurrentTable = [
        "reset_table_current",
        "seed_table_current",
        "sync_table_current",
      ].includes(utilityValue);

      if (needsCurrentTable && !tableName) return;

      handleUtilityAction(utilityValue);
    },
    [tableName, handleUtilityAction]
  );

  React.useEffect(() => {
    if (isMenuOpen) return;

    setTableName("");
    setIsTableActive(false);
    dispatch({ type: "nametable", payload: "" });
    resetTableActions();
  }, [dispatch, isMenuOpen, resetTableActions]);

  const operationOptions = React.useMemo<DropdownOption[]>(
    () => [
      {
        label: "Visualizações",
        value: "visualizacoes",
        subOptions: [
          { label: "Default", value: "view_default" },
          { label: "Lista", value: "view_list" },
          { label: "Detalhes", value: "view_detail" },
          {
            label: "Filtrar",
            value: "filtrar",
            subOptions: [
              { label: "Campos", value: "filter_fields" },
              { label: "Texto", value: "filter_text" },
              { label: "ID", value: "filter_id" },
            ],
          },
        ],
      },
      {
        label: "Listar",
        value: "listar",
        subOptions: [
          { label: "Lst.Simples", value: "listar_simples" },
          { label: "Lst.Detalhada", value: "listar_detalhada" },
          { label: "Impressão", value: "listar_impressao" },
        ],
      },
      { label: "Incluir", value: "incluir" },
      { label: "Alterar", value: "alterar" },
      { label: "Excluir", value: "excluir" },
    ],
    []
  );

  const utilOptions = React.useMemo<DropdownOption[]>(
    () => [
      {
        label: "Tabelas",
        value: "util_tabelas",
        subOptions: [
          { label: "Resetar Atual", value: "reset_table_current" },
          { label: "Seed Atual", value: "seed_table_current" },
          { label: "Sincronizar Atual", value: "sync_table_current" },
          { label: "Atualizar Systables", value: "sync_systables" },
        ],
      },
      {
        label: "Sistema",
        value: "util_sistema",
        subOptions: [
          { label: "Checkout", value: "check_system" },
          { label: "Seeds Gerais", value: "run_seeds" },
          { label: "Reproc. Imgs", value: "reprocess_images" },
          { label: "Sincronização", value: "sync_services" },
        ],
      },
      {
        label: "Segurança",
        value: "util_seguranca",
        subOptions: [
          { label: "Logoff Master", value: "logoff_master" },
          { label: "Limpar Sessão", value: "clear_session" },
          { label: "Verifica Acessos", value: "check_access" },
        ],
      },
    ],
    []
  );

  const showTableSelector = isMenuOpen;
  const showTableButton = isMenuOpen && tableName !== "";
  const showRefreshButton = isMenuOpen && tableName !== "" && isTableActive;
  const showActionControls = isMenuOpen && tableName !== "" && isTableActive;

  return (
    <ContentBarMainMenu>
      <ContentBarButtonMenu
        $width="50px"
        $img={!isMenuOpen ? btn_def_q_menuoff : btn_def_q_menuon}
        titbtn={!isMenuOpen ? "Abre Menu..." : "Fecha Menu..."}
        onClick={handleToggleMenu}
      />

      <ContentDropdownMenu $open={showTableSelector} $width="205px">
        <Dropdown
          $pxheight="40px"
          $pxwidth="205px"
          labelbtn={
            loading
              ? "Carregando..."
              : error
              ? "Erro no Sistema"
              : "Arq.Sistema."
          }
          options={dropdownOptions}
          onSelect={handleSelectTable}
        />
      </ContentDropdownMenu>

      <ContentBarButtonGreenMenu
        $open={showTableButton}
        $isCor={isTableActive}
        titbtn="Tabela Selecionada..."
        titulo={tableName}
        onClick={handleOpenSelectedTable}
      />

      <ContentBarButtonRedMenu
        $width="140px"
        $open={showRefreshButton}
        titbtn="Refrescar Grid..."
        titulo="Refrescar"
        onClick={handleRefresh}
      />

      <ContentDropdownMenu $open={showActionControls} $width="130px">
        <Dropdown
          $pxheight="30px"
          $pxwidth="130px"
          labelbtn="Operações"
          options={operationOptions}
          onSelect={handleSelectOperation}
        />
      </ContentDropdownMenu>

      <ContentDropdownMenu $open={showActionControls} $width="90px">
        <Dropdown
          $pxheight="30px"
          $pxwidth="120px"
          labelbtn="Util"
          options={utilOptions}
          onSelect={handleSelectUtility}
        />
      </ContentDropdownMenu>

      <ContentBarButtonYelowMenu
        $width="100px"
        $open={true}
        titbtn="Context..."
        titulo="States"
        onClick={handlerCardState}
      />

      {cardstate ? (
        <PageModal
          ptop={'1%'}
          pwidth={'80%'}
          pheight={'95%'}
          imgbm={btn_def_q_close}
          titbm="Fechar..."
          titulo="Conteúdo dos Payload [ state ]"
          onclose={() => setCardState(false)}
        >
          <CardHlpStateContextPage
            imgcardpage={pnl_def_mod_config}
            onclosesair={() => setCardState(false)}
          />
        </PageModal>
        
      ) : null}
    </ContentBarMainMenu>
  );
};

export default BarMenuConfig;