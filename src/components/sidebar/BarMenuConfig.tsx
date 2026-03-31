import React from "react";
import * as S from "./stylesSidebar";

import { ContentSBMain } from "./ContentSBMain";
import { ContentSBMenuSide } from "./ContentSBMenuSide";
import { ContentSBButtonMenu } from "./ContentSBButtonMenu";
import { ContentSBButtonItemMenu } from "./ContentSBButtonItemMenu";
import { ContentSBItensButtonOnOff } from "./ContentSBItensButtonOnOff";
import { Dropdown } from "./Dropdown";

import btn_cmenuoff from "../../assets/defaut/botao/btn_def_c_menuoff.svg";
import btn_cmenuon from "../../assets/defaut/botao/btn_def_c_menuon.svg";

import { useAcessoContext } from "../contexts/ContextAcesso";
import { useSystemTables } from "../../funcs/funcs/useSystemTables";

export const BarMenuConfig: React.FC = () => {
  const { dispatch } = useAcessoContext();

  const { options, loading, error } = useSystemTables();
  const dropdownOptions = React.useMemo(() => options ?? [], [options]);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [tableName, setTableName] = React.useState("");
  const [isMaintOpen, setIsMaintOpen] = React.useState(false);

  const resetTableActions = React.useCallback(() => {
    dispatch({ type: "vistable", payload: false });
    dispatch({ type: "listtable", payload: false });
    dispatch({ type: "inctable", payload: false });
    dispatch({ type: "alttable", payload: false });
    dispatch({ type: "exctable", payload: false });
  }, [dispatch]);

  const handleToggleMenu = React.useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleSelectOption = React.useCallback(
    (name: string) => {
      setTableName(name);
      setIsMaintOpen(false);

      dispatch({ type: "nametable", payload: name });
      resetTableActions();
    },
    [dispatch, resetTableActions]
  );

  const handleOpenTable = React.useCallback(() => {
    if (!tableName) return;

    setIsMaintOpen(true);

    dispatch({ type: "vistable", payload: true });
    dispatch({ type: "listtable", payload: true });
    dispatch({ type: "inctable", payload: true });
    dispatch({ type: "alttable", payload: true });
    dispatch({ type: "exctable", payload: true });
  }, [dispatch, tableName]);

  React.useEffect(() => {
    if (isMenuOpen) return;

    setTableName("");
    setIsMaintOpen(false);

    dispatch({ type: "nametable", payload: "" });
    resetTableActions();
  }, [isMenuOpen, dispatch, resetTableActions]);

  const isDropdownOpen = isMenuOpen;
  const showTableButton = isMenuOpen && tableName !== "";
  const showMaintButtons = isMenuOpen && isMaintOpen;

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
        <S.ContainerMenuSB open>
          <Dropdown
            pxheight="30px"
            pxwidth="170px"
            labelbtn={
              loading ? "Carregando..." : error ? "Erro no Sistema" : "Arq.Sistema."
            }
            options={dropdownOptions}
            onSelect={handleSelectOption}
          />
        </S.ContainerMenuSB>
      )}

      {showTableButton && (
        <S.ContainerMenuSB open>
          <ContentSBButtonItemMenu>
            <S.ButtomSBButtonItem
              isborder
              title="Tabela Selecionada..."
              onClick={handleOpenTable}
            >
              <label>{tableName}</label>
            </S.ButtomSBButtonItem>
          </ContentSBButtonItemMenu>
        </S.ContainerMenuSB>
      )}

      {showMaintButtons && (
        <ContentSBMain>
          <ContentSBItensButtonOnOff open={true}>
            <S.ButtomSBButtonItem isborder title="Visualização Reg...">
              <label>Visualizar.</label>
            </S.ButtomSBButtonItem>
          </ContentSBItensButtonOnOff>

          <ContentSBItensButtonOnOff open={true}>
            <S.ButtomSBButtonItem isborder title="Listagem Reg...">
              <label>Listar.</label>
            </S.ButtomSBButtonItem>
          </ContentSBItensButtonOnOff>

          <ContentSBItensButtonOnOff open={true}>
            <S.ButtomSBButtonItem isborder title="Inclusão Reg...">
              <label>Incluir.</label>
            </S.ButtomSBButtonItem>
          </ContentSBItensButtonOnOff>

          <ContentSBItensButtonOnOff open={true}>
            <S.ButtomSBButtonItem isborder title="Alteração Reg...">
              <label>Alterar.</label>
            </S.ButtomSBButtonItem>
          </ContentSBItensButtonOnOff>

          <ContentSBItensButtonOnOff open={true}>
            <S.ButtomSBButtonItem isborder title="Exclusão Reg...">
              <label>Excluir.</label>
            </S.ButtomSBButtonItem>
          </ContentSBItensButtonOnOff>
        </ContentSBMain>
      )}
    </ContentSBMain>
  );
};