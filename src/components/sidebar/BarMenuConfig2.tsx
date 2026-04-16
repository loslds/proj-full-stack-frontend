
// C:\repository\proj-full-stack-frontend\src\components\sidebar\BarMenuConfig.tsx
import React from "react";
import * as S from "./stylesSidebar";

import btn_cmenuoff from "../../assets/defaut/botao/btn_def_c_menuoff.svg";
import btn_cmenuon from "../../assets/defaut/botao/btn_def_c_menuon.svg";

import { ContentSBMain } from "./ContentSBMain";
import { ContentSBMenuSide } from "./ContentSBMenuSide";
import { ContentSBButtonMenu } from "./ContentSBButtonMenu";
import { ContentSBButtonItemMenu } from "./ContentSBButtonItemMenu";
import { ContentSBItensButtonOnOff } from "./ContentSBItensButtonOnOff";
import { Dropdown, DropdownOption } from "./Dropdown";

import { useAcessoContext } from "../contexts/ContextAcesso";
import { useSystemTables } from "../../funcs/funcs/useSystemTables";

type BarMenuConfig2Props = {
  onRefresh?: () => void;
  onUtilitySelect?: (value: string) => void;
  onLoadSummary?: () => void; // 👈 AQUI
};

export const BarMenuConfig2: React.FC<BarMenuConfig2Props> = ({
  onRefresh,
  onUtilitySelect,
  onLoadSummary
}) => {
  const { dispatch } = useAcessoContext();

  const { options, loading, error } = useSystemTables();
  const dropdownOptions = React.useMemo(() => options ?? [], [options]);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [tableName, setTableName] = React.useState("");

  const resetTableActions = React.useCallback(() => {
    dispatch({ type: "vistable", payload: false });
    dispatch({ type: "regtable", payload: false });
    dispatch({ type: "listtable", payload: false });
    dispatch({ type: "inctable", payload: false });
    dispatch({ type: "alttable", payload: false });
    dispatch({ type: "exctable", payload: false });
  }, [dispatch]);

  const handleToggleMenu = React.useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleSelectTable = React.useCallback(
    (name: string) => {
      setTableName(name);
      dispatch({ type: "nametable", payload: name });
      resetTableActions();
    },
    [dispatch, resetTableActions]
  );

  // botão com o nome da tabela:
  // apenas ativa o "resumo" da tabela no Config
 const handleOpenSelectedTable = React.useCallback(() => {
  if (!tableName) return;

    dispatch({ type: "nametable", payload: tableName });
    resetTableActions();

    dispatch({ type: "regtable", payload: true });

    // 👇 CHAMA O RESUMO DIRETO
    if (onLoadSummary) {
      onLoadSummary();
    }

  }, [dispatch, resetTableActions, tableName, onLoadSummary]);
  

  const handleRefresh = React.useCallback(() => {
    if (!tableName) return;

    dispatch({ type: "nametable", payload: tableName });

    if (onRefresh) {
      onRefresh();
    }
  }, [dispatch, onRefresh, tableName]);

  const handleSelectOperation = React.useCallback(
    (value: string) => {
      if (!tableName) return;

      dispatch({ type: "nametable", payload: tableName });
      resetTableActions();

      switch (value) {
        case "visualizar_sem_filtro":
          dispatch({ type: "regtable", payload: true });
          dispatch({ type: "vistable", payload: true });
          break;

        case "visualizar_filtra":
          dispatch({ type: "regtable", payload: true });
          dispatch({ type: "vistable", payload: false });
          dispatch({ type: "filttable", payload: true });
          break;

        case "listar_simples":
        case "listar_detalhada":
        case "listar_impressao":
          dispatch({ type: "regtable", payload: true });
          dispatch({ type: "listtable", payload: true });
          break;

        case "incluir":
          dispatch({ type: "regtable", payload: true });
          dispatch({ type: "inctable", payload: true });
          break;

        case "alterar":
          dispatch({ type: "regtable", payload: true });
          dispatch({ type: "alttable", payload: true });
          break;

        case "excluir":
          dispatch({ type: "regtable", payload: true });
          dispatch({ type: "exctable", payload: true });
          break;

        default:
          break;
      }
    },
    [dispatch, resetTableActions, tableName]
  );

  const handleSelectUtility = React.useCallback(
    (value: string) => {
      if (onUtilitySelect) {
        onUtilitySelect(value);
      }
    },
    [onUtilitySelect]
  );

  React.useEffect(() => {
    if (isMenuOpen) return;

    setTableName("");
    dispatch({ type: "nametable", payload: "" });
    resetTableActions();
  }, [dispatch, isMenuOpen, resetTableActions]);

  const operationOptions = React.useMemo<DropdownOption[]>(
  () => [
    {
      label: "Visualizar",
      value: "visualizar",
      subOptions: [
        { label: "Sem Filtro", value: "visualizar_sem_filtro" },
        { label: "Filtra", value: "visualizar_filtra" },
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
        value: "util-tabelas",
        subOptions: [
          { label: "Exe.Resete.", value: "reset_table_current" },
          { label: "Exe.Seed.", value: "seed_table_current" },
          { label: "Sincroniza.", value: "sync_table_current" },
          { label: "Gerenciador.", value: "sync_systables" },
        ],
      },
      {
        label: "Sistema",
        value: "util-servicos",
        subOptions: [
          { label: "Checkout.", value: "check_system" },
          { label: "Seeds.", value: "run_seeds" },
          { label: "Reproc.Imgs", value: "reprocess_images" },
          { label: "Sincronização.", value: "sync_services" },
        ],
      },
      {
        label: "Segurança",
        value: "util-seguranca",
        subOptions: [
          { label: "Logoff Master.", value: "logoff_master" },
          { label: "Limpar Sessão.", value: "clear_session" },
          { label: "Verifica Acessos.", value: "check_access" },
        ],
      },
    ],
    []
  );

  const isDropdownOpen = isMenuOpen;
  const showTableButton = isMenuOpen && tableName !== "";
  const showActionControls = isMenuOpen && tableName !== "";

  return (
    <ContentSBMain>
      <ContentSBMenuSide $onoff={true}>
        <ContentSBButtonMenu
          img={!isMenuOpen ? btn_cmenuon : btn_cmenuoff}
          titbtn={!isMenuOpen ? "Abre Menu..." : "Fecha Menu..."}
          onClick={handleToggleMenu}
        />
      </ContentSBMenuSide>

      
        <S.ContainerMenuSB $open={isDropdownOpen}>
          <Dropdown
            pxheight="30px"
            pxwidth="200px"
            labelbtn={
              loading ? "Carregando..." : error ? "Erro no Sistema" : "Arq.Sistema."
            }
            options={dropdownOptions}
            onSelect={handleSelectTable}
          />
        </S.ContainerMenuSB>
      

      
        <S.ContainerMenuSB $open={showTableButton}>
          <ContentSBButtonItemMenu>
            <S.ButtomSBButtonItem
              $isborder={true}
              title="Tabela Selecionada..."
              onClick={handleOpenSelectedTable}
            >
              <label>{tableName}</label>
            </S.ButtomSBButtonItem>

          </ContentSBButtonItemMenu>
        </S.ContainerMenuSB>
      
      
        <ContentSBMain>
          <ContentSBItensButtonOnOff $open={showActionControls}>
      
            <S.ButtomSBButtonItem
              $isborder={true}
              title="Refrescar Grid..."
              onClick={handleRefresh}
            >
              <label>Refrescar.</label>
            </S.ButtomSBButtonItem>
      
      
            <S.ContainerMenuSB $open={true}>
              <Dropdown
                pxheight="30px"
                pxwidth="180px"
                labelbtn="Operações"
                options={operationOptions}
                onSelect={handleSelectOperation}
              />
            </S.ContainerMenuSB>

            <S.ContainerMenuSB $open={true}>
              <Dropdown
                pxheight="30px"
                pxwidth="180px"
                labelbtn="Util"
                options={utilOptions}
                onSelect={handleSelectUtility}
              />
            </S.ContainerMenuSB>
        
        </ContentSBItensButtonOnOff>

        </ContentSBMain>
      
    </ContentSBMain>
  );
};