

// C:\repository\proj-full-stack-frontend\src\components\sidebar\BarMenuConfig.tsx

import React from "react";

import { useAcessoContext } from "../contexts/ContextAcesso";
import { useSystemTables } from "../../funcs/funcs/useSystemTables";
import { ContentBarMainMenu } from "./ContentBarMainMenu";
import { ContentBarButtonMenu } from "./ContentBarButtonMenu";
import { ContentDropdownMenu } from "./ContentBarDropdownMenu";
import { Dropdown, DropdownOption } from "./Dropdown";
import { ContentBarButtonGreenMenu } from "./ContentBarButtonGreenMenu";
import { ContentBarButtonRedMenu } from "./ContentBarButtonRedMenu";
import { ContentBarButtonYelowMenu } from "./ContentBarButtonYelowMenu";

import { PageModal } from "../pages/PageModal";
import { CardHlpStateContextPage } from "../../cards/CardHlpStateContextPage";
import btn_qclose from '../../assets/defaut/botao/btn_def_q_close.svg';
import pnl_config from "../../assets/defaut/painel/pnl_def_mod_config.svg";

import btn_cmenuoff from "../../assets/defaut/botao/btn_def_c_menuoff.svg";
import btn_cmenuon from "../../assets/defaut/botao/btn_def_c_menuon.svg";


export type GridViewMode = "common" | "list" | "detail";

interface BarMenuConfigProps {
  onRefresh?: () => void;
  onUtilitySelect?: (value: string, tableName?: string) => void;
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

  // abre painel dos states
  const [cardstate, setCardState] = React.useState(false);
  const handlerCardState = React.useCallback(() => setCardState((old) => !old), []);

  const { options, loading, error } = useSystemTables();
  const dropdownOptions = React.useMemo(() => options ?? [], [options]);

  const [tableName, setTableName] = React.useState("");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isTableActive, setIsTableActive] = React.useState(false);

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

  const handleFilterMode = React.useCallback(
    (filterType: string) => {
      if (!tableName) return;

      setCurrentTable(tableName);
      resetTableActions();

      dispatch({ type: "regtable", payload: true });
      dispatch({ type: "vistable", payload: false });
      dispatch({ type: "filttable", payload: true });

      setIsTableActive(true);

      onUtilitySelect?.(filterType, tableName);
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
    (value: string) => {
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
        case "view_common":
          handleViewMode("common");
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
      if (!value) return;

      const needsCurrentTable = [
        "reset_table_current",
        "seed_table_current",
        "sync_table_current",
      ].includes(value);

      if (needsCurrentTable) {
        if (!tableName) return;
        setCurrentTable(tableName);
      }

      onUtilitySelect?.(value, tableName);
    },
    [tableName, setCurrentTable, onUtilitySelect]
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
        label: "Visualização",
        value: "visualizacao",
        subOptions: [
          { label: "Simples", value: "view_common" },
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
        $img={!isMenuOpen ? btn_cmenuon : btn_cmenuoff}
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
      {/** Abre Modal help ao clicar na imagem LOGO da Pagina */ }
        {cardstate ? (
          <PageModal
            ptop={"1%"}
            pwidth={"80%"}
            pheight={"95%"}
            imgbm={btn_qclose}
            titbm="Fechar..."
            titulo={'Conteúdo dos Payload [ state ]'}
            onclose={() => setCardState(false)}
          >
            <CardHlpStateContextPage imgcardpage={pnl_config} onclosesair={() => setCardState(false)}/>
          </PageModal>
        ) : null}
    </ContentBarMainMenu>
    

  );
};

export default BarMenuConfig;


// // C:\repository\proj-full-stack-frontend\src\components\sidebar\BarMenuConfig.tsx
// import React from "react";

// import { useAcessoContext } from "../contexts/ContextAcesso";
// import { useSystemTables } from "../../funcs/funcs/useSystemTables";
// import { ContentBarMainMenu } from "./ContentBarMainMenu";
// import { ContentBarButtonMenu } from "./ContentBarButtonMenu";
// import { ContentDropdownMenu } from "./ContentBarDropdownMenu";
// import { Dropdown, DropdownOption } from "./Dropdown";
// import { ContentBarButtonGreenMenu } from "./ContentBarButtonGreenMenu";
// import { ContentBarButtonRedMenu } from "./ContentBarButtonRedMenu";

// import btn_cmenuoff from "../../assets/defaut/botao/btn_def_c_menuoff.svg";
// import btn_cmenuon from "../../assets/defaut/botao/btn_def_c_menuon.svg";

// interface BarMenuConfigProps {
//   onRefresh?: () => void;
//   onUtilitySelect?: (value: string, tableName?: string) => void;
//   onLoadSummary?: () => void;
// }

// export const BarMenuConfig: React.FC<BarMenuConfigProps> = ({
//   onRefresh,
//   onUtilitySelect,
//   onLoadSummary,
// }) => {
//   const { dispatch } = useAcessoContext();

//   const { options, loading, error } = useSystemTables();
//   const dropdownOptions = React.useMemo(() => options ?? [], [options]);

//   const [tableName, setTableName] = React.useState("");
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
//   const [iscoropen, setIsCorOpen] = React.useState(false);

//   const resetTableActions = React.useCallback(() => {
//     dispatch({ type: "vistable", payload: false });
//     dispatch({ type: "filttable", payload: false });
//     dispatch({ type: "regtable", payload: false });
//     dispatch({ type: "listtable", payload: false });
//     dispatch({ type: "inctable", payload: false });
//     dispatch({ type: "alttable", payload: false });
//     dispatch({ type: "exctable", payload: false });
//   }, [dispatch]);

//   const setCurrentTable = React.useCallback(
//     (name: string) => {
//       setTableName(name);
//       dispatch({ type: "nametable", payload: name });
//     },
//     [dispatch]
//   );

//   const handleToggleMenu = React.useCallback(() => {
//     setIsMenuOpen((prev) => !prev);
//   }, []);

//   const handleSelectTable = React.useCallback(
//     (name: string) => {
//       setCurrentTable(name);
//       resetTableActions();
//       setIsCorOpen(false);
//     },
//     [setCurrentTable, resetTableActions]
//   );

//   const handleOpenSelectedTable = React.useCallback(() => {
//     if (!tableName) return;

//     setCurrentTable(tableName);
//     resetTableActions();

//     dispatch({ type: "regtable", payload: true });
//     setIsCorOpen(true);

//     onLoadSummary?.();
//   }, [dispatch, resetTableActions, setCurrentTable, tableName, onLoadSummary]);

//   const handleRefresh = React.useCallback(() => {
//     if (!tableName) return;

//     setCurrentTable(tableName);
//     onRefresh?.();
//   }, [setCurrentTable, onRefresh, tableName]);

//   const handleSelectOperation = React.useCallback(
//     (value: string) => {
//       if (!tableName) return;

//       setCurrentTable(tableName);
//       resetTableActions();

//       switch (value) {
//         case "visualizar_sem_filtro":
//           dispatch({ type: "regtable", payload: true });
//           dispatch({ type: "vistable", payload: true });
//           dispatch({ type: "filttable", payload: false });
//           setIsCorOpen(true);
//           break;

//         case "visualizar_filtra":
//           dispatch({ type: "regtable", payload: true });
//           dispatch({ type: "vistable", payload: false });
//           dispatch({ type: "filttable", payload: true });
//           setIsCorOpen(true);
//           break;
        
//         case "filter_fields":
//           dispatch({ type: "regtable", payload: true });
//           dispatch({ type: "vistable", payload: false });
//           dispatch({ type: "filttable", payload: true });
//           setIsCorOpen(true);
//           break;

//         case "filter_text":
//           dispatch({ type: "regtable", payload: true });
//           dispatch({ type: "vistable", payload: false });
//           dispatch({ type: "filttable", payload: true });
//           setIsCorOpen(true);
//         break;

//         case "filter_id":
//           dispatch({ type: "regtable", payload: true });
//           dispatch({ type: "vistable", payload: false });
//           dispatch({ type: "filttable", payload: true });
//           setIsCorOpen(true);
//           break;

//         case "listar_simples":
//         case "listar_detalhada":
//         case "listar_impressao":
//           dispatch({ type: "regtable", payload: true });
//           dispatch({ type: "listtable", payload: true });
//           setIsCorOpen(true);
//           break;

//         case "incluir":
//           dispatch({ type: "regtable", payload: true });
//           dispatch({ type: "inctable", payload: true });
//           setIsCorOpen(true);
//           break;

//         case "alterar":
//           dispatch({ type: "regtable", payload: true });
//           dispatch({ type: "alttable", payload: true });
//           setIsCorOpen(true);
//           break;

//         case "excluir":
//           dispatch({ type: "regtable", payload: true });
//           dispatch({ type: "exctable", payload: true });
//           setIsCorOpen(true);
//           break;

//         default:
//           break;
//       }
//     },
//     [dispatch, resetTableActions, setCurrentTable, tableName]
//   );

//   const handleSelectUtility = React.useCallback(
//     (value: string) => {
//       if (!value) return;

//       if (
//         value === "reset_table_current" ||
//         value === "seed_table_current" ||
//         value === "sync_table_current"
//       ) {
//         if (!tableName) return;
//         setCurrentTable(tableName);
//       }

//       onUtilitySelect?.(value, tableName);
//     },
//     [onUtilitySelect, setCurrentTable, tableName]
//   );

//   React.useEffect(() => {
//     if (isMenuOpen) return;

//     setTableName("");
//     setIsCorOpen(false);
//     dispatch({ type: "nametable", payload: "" });
//     resetTableActions();
//   }, [dispatch, isMenuOpen, resetTableActions]);

//   const operationOptions = React.useMemo<DropdownOption[]>(
//     () => [
//       {
//         label: "Visualizar",
//         value: "visualizar",
//         subOptions: [
//           { label: "Sem Filtro", value: "visualizar_sem_filtro" },
//           { 
//             label: "Filtrar", 
//             value: "visualizar_filtra",
//             subOptions: [
//               { label: "Campos", value: "filter_fields" },
//               { label: "Texto", value: "filter_text" },
//               { label: "ID", value: "filter_id" },
//             ],
//           },
//         ],
//       },
//       {
//         label: "Listar",
//         value: "listar",
//         subOptions: [
//           { label: "Lst.Simples", value: "listar_simples" },
//           { label: "Lst.Detalhada", value: "listar_detalhada" },
//           { label: "Impressão", value: "listar_impressao" },
//         ],
//       },
//       { label: "Incluir", value: "incluir" },
//       { label: "Alterar", value: "alterar" },
//       { label: "Excluir", value: "excluir" },
//     ],
//     []
//   );

//   const utilOptions = React.useMemo<DropdownOption[]>(
//     () => [
//       {
//         label: "Tabelas",
//         value: "util_tabelas",
//         subOptions: [
//           { label: "Resetar Atual", value: "reset_table_current" },
//           { label: "Seed Atual", value: "seed_table_current" },
//           { label: "Sincronizar Atual", value: "sync_table_current" },
//           { label: "Atualizar Systables", value: "sync_systables" },
//         ],
//       },
//       {
//         label: "Sistema",
//         value: "util_sistema",
//         subOptions: [
//           { label: "Checkout", value: "check_system" },
//           { label: "Seeds Gerais", value: "run_seeds" },
//           { label: "Reproc. Imgs", value: "reprocess_images" },
//           { label: "Sincronização", value: "sync_services" },
//         ],
//       },
//       {
//         label: "Segurança",
//         value: "util_seguranca",
//         subOptions: [
//           { label: "Logoff Master", value: "logoff_master" },
//           { label: "Limpar Sessão", value: "clear_session" },
//           { label: "Verifica Acessos", value: "check_access" },
//         ],
//       },
//     ],
//     []
//   );

// const isDropdownOpen = isMenuOpen;

// // aparece depois de selecionar a tabela
// const showTableButton = isMenuOpen && tableName !== "";

// // aparece somente depois de clicar no botão verde da tabela
// const showRefreshButton = isMenuOpen && tableName !== "" && iscoropen;

// // aparecem somente depois de clicar no botão verde da tabela
// const showActionControls = isMenuOpen && tableName !== "" && iscoropen;


//   return (
//     <ContentBarMainMenu>
//       <ContentBarButtonMenu
//         $width="50px"
//         $img={!isMenuOpen ? btn_cmenuon : btn_cmenuoff}
//         titbtn={!isMenuOpen ? "Abre Menu..." : "Fecha Menu..."}
//         onClick={handleToggleMenu}
//       />

//       <ContentDropdownMenu $open={isDropdownOpen} $width="205px">
//         <Dropdown
//           $pxheight="40px"
//           $pxwidth="205px"
//           labelbtn={
//             loading ? "Carregando..." : error ? "Erro no Sistema" : "Arq.Sistema."
//           }
//           options={dropdownOptions}
//           onSelect={handleSelectTable}
//         />
//       </ContentDropdownMenu>

//       <ContentBarButtonGreenMenu
//         $open={showTableButton}
//         $isCor={iscoropen}
//         titbtn="Tabela Selecionada..."
//         titulo={tableName}
//         onClick={handleOpenSelectedTable}
//       />

//       <ContentBarButtonRedMenu
//         $width="140px"
//         $open={showRefreshButton}
//         titbtn="Refrescar Grid..."
//         titulo="Refrescar"
//         onClick={handleRefresh}
//       />
//       <ContentDropdownMenu $open={showActionControls} $width="130px">
//         <Dropdown
//           $pxheight="30px"
//           $pxwidth="130px"
//           labelbtn="Operações"
//           options={operationOptions}
//           onSelect={handleSelectOperation}
//         />
//       </ContentDropdownMenu>

//       <ContentDropdownMenu $open={showActionControls} $width="90px">
//         <Dropdown
//           $pxheight="30px"
//           $pxwidth="120px"
//           labelbtn="Util"
//           options={utilOptions}
//           onSelect={handleSelectUtility}
//         />
//       </ContentDropdownMenu>
//     </ContentBarMainMenu>
//   );
// };

// export default BarMenuConfig;

