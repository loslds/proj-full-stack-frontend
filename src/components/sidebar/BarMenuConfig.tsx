

// C:\repository\proj-full-stack-frontend\src\components\sidebar\BarMenuConfig.tsx
import React from "react";
import * as S from "./stylesSidebar";

import { ContentSBMain } from "./ContentSBMain";
import { ContentSBMenuSide } from "./ContentSBMenuSide";
import { ContentSBButtonMenu } from "./ContentSBButtonMenu";
import { ContentSBButtonItemMenu } from "./ContentSBButtonItemMenu";
import { ContentSBItensButtonOnOff } from "./ContentSBItensButtonOnOff";
import { Dropdown, DropdownOption } from "./Dropdown";

import btn_cmenuoff from "../../assets/defaut/botao/btn_def_c_menuoff.svg";
import btn_cmenuon from "../../assets/defaut/botao/btn_def_c_menuon.svg";

import { useAcessoContext } from "../contexts/ContextAcesso";
import { useSystemTables } from "../../funcs/funcs/useSystemTables";

type BarMenuConfigProps = {
  onRefresh?: () => void;
  onUtilitySelect?: (value: string) => void;
};

export const BarMenuConfig: React.FC<BarMenuConfigProps> = ({
  onRefresh,
  onUtilitySelect,
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

  const handleOpenSelectedTable = React.useCallback(() => {
    if (!tableName) return;

    dispatch({ type: "nametable", payload: tableName });
    resetTableActions();

    dispatch({ type: "vistable", payload: true });
    dispatch({ type: "regtable", payload: true });
  }, [dispatch, resetTableActions, tableName]);

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
        case "visualizar":
          dispatch({ type: "vistable", payload: true });
          dispatch({ type: "regtable", payload: true });
          break;

        case "listar":
          dispatch({ type: "listtable", payload: true });
          break;

        case "incluir":
          dispatch({ type: "inctable", payload: true });
          break;

        case "alterar":
          dispatch({ type: "alttable", payload: true });
          break;

        case "excluir":
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
      { label: "Visualizar", value: "visualizar" },
      { label: "Listar", value: "listar" },
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
          { label: "Resetar Tabela Atual", value: "reset_table_current" },
          { label: "Seed da Tabela Atual", value: "seed_table_current" },
          { label: "Sincronizar Tabela Atual", value: "sync_table_current" },
          { label: "Atualizar Systables", value: "sync_systables" },
        ],
      },
      {
        label: "Serviços",
        value: "util-servicos",
        subOptions: [
          { label: "Checar Sistema", value: "check_system" },
          { label: "Executar Seeds", value: "run_seeds" },
          { label: "Reprocessar Imagens", value: "reprocess_images" },
          { label: "Sincronizar Serviços", value: "sync_services" },
        ],
      },
      {
        label: "Segurança",
        value: "util-seguranca",
        subOptions: [
          { label: "Logoff Master", value: "logoff_master" },
          { label: "Limpar Sessão", value: "clear_session" },
          { label: "Verificar Acesso", value: "check_access" },
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
      <ContentSBMenuSide onoff={true}>
        <ContentSBButtonMenu
          img={!isMenuOpen ? btn_cmenuon : btn_cmenuoff}
          titbtn={!isMenuOpen ? "Abre Menu..." : "Fecha Menu..."}
          onClick={handleToggleMenu}
        />
      </ContentSBMenuSide>

      {isDropdownOpen && (
        <S.ContainerMenuSB open={true}>
          <Dropdown
            pxheight={"30px"}
            pxwidth={"200px"}
            labelbtn={
              loading ? "Carregando..." : error ? "Erro no Sistema" : "Arq.Sistema."
            }
            options={dropdownOptions}
            onSelect={handleSelectTable}
          />
        </S.ContainerMenuSB>
      )}

      {showTableButton && (
        <S.ContainerMenuSB open={true}>
          <ContentSBButtonItemMenu>
            <S.ButtomSBButtonItem
              $isborder={true}
              title={"Tabela Selecionada..."}
              onClick={handleOpenSelectedTable}
            >
              <label>{tableName}</label>
            </S.ButtomSBButtonItem>
          </ContentSBButtonItemMenu>
        </S.ContainerMenuSB>
      )}

      {showActionControls && (
        <ContentSBMain>
          <ContentSBItensButtonOnOff open={true}>
            <S.ButtomSBButtonItem
              $isborder
              title={"Refrescar Grid..."}
              onClick={handleRefresh}
            >
              <label>Refrescar.</label>
            </S.ButtomSBButtonItem>
          </ContentSBItensButtonOnOff>

          <S.ContainerMenuSB open>
            <Dropdown
              pxheight={"30px"}
              pxwidth={"180px"}
              labelbtn={"Operações"}
              options={operationOptions}
              onSelect={handleSelectOperation}
            />
          </S.ContainerMenuSB>

          <S.ContainerMenuSB open={true}>
            <Dropdown
              pxheight={"30px"}
              pxwidth={"180px"}
              labelbtn={"Util"}
              options={utilOptions}
              onSelect={handleSelectUtility}
            />
          </S.ContainerMenuSB>
        </ContentSBMain>
      )}
    </ContentSBMain>
  );
};
