
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

import { useAcessoContext, UseAcessoActions } from "../contexts/ContextAcesso";
import { useSystemTables } from "../../funcs/funcs/useSystemTables";

export const BarMenuConfig: React.FC = () => {
  const { dispatch } = useAcessoContext();

  const { options, loading, error } = useSystemTables();
  const dropdownOptions = React.useMemo(() => options ?? [], [options]);

  // menu principal
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // tabela selecionada
  const [tableName, setTableName] = React.useState("");

  // manutenção ativa
  const [isMaintOpen, setIsMaintOpen] = React.useState(false);

  // ---------------- handlers ----------------

  const handleToggleMenu = React.useCallback(() => {
    setIsMenuOpen((v) => !v);
  }, []);

  const handleSelectOption = React.useCallback(
    (name: string) => {
      setTableName(name);
      setIsMaintOpen(false);

      dispatch({ type: UseAcessoActions.set_NAME_TABLE, payload: name });
      dispatch({ type: UseAcessoActions.set_INC_TABLE, payload: false });
      dispatch({ type: UseAcessoActions.set_ALT_TABLE, payload: false });
      dispatch({ type: UseAcessoActions.set_EXC_TABLE, payload: false });
      dispatch({ type: UseAcessoActions.set_REL_TABLE, payload: false });
    },
    [dispatch]
  );

  // clica no botão com nome da tabela
  const handleOpenTable = React.useCallback(() => {
    if (!tableName) return;

    setIsMaintOpen(true);

    dispatch({ type: UseAcessoActions.set_INC_TABLE, payload: true });
    dispatch({ type: UseAcessoActions.set_ALT_TABLE, payload: true });
    dispatch({ type: UseAcessoActions.set_EXC_TABLE, payload: true });
    dispatch({ type: UseAcessoActions.set_REL_TABLE, payload: true });
  }, [dispatch, tableName]);

  // ---------------- effects ----------------

  // ao fechar menu: reseta tudo
  React.useEffect(() => {
    if (isMenuOpen) return;

    setTableName("");
    setIsMaintOpen(false);
    dispatch({ type: UseAcessoActions.set_NAME_TABLE, payload: "" });
    dispatch({ type: UseAcessoActions.set_INC_TABLE, payload: false });
    dispatch({ type: UseAcessoActions.set_ALT_TABLE, payload: false });
    dispatch({ type: UseAcessoActions.set_EXC_TABLE, payload: false });
    dispatch({ type: UseAcessoActions.set_REL_TABLE, payload: false });
  }, [isMenuOpen, dispatch]);


  // ---------------- render helpers ----------------

  const isDropdownOpen = isMenuOpen;
  const showTableButton = isMenuOpen && tableName !== "";
  const showMaintButtons = isMenuOpen && isMaintOpen;

  // ---------------- render ----------------

  return (
    <ContentSBMain>
      {/* Botão Menu */}
      <ContentSBMenuSide onoff={true}>
        <ContentSBButtonMenu
          img={!isMenuOpen ? btn_cmenuon : btn_cmenuoff}
          titbtn={!isMenuOpen ? "Abre Menu..." : "Fecha Menu..."}
          onClick={handleToggleMenu}
        />
      </ContentSBMenuSide>

      {/* Dropdown */}
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

      {/* Botão da Tabela */}
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

      {/* Botões de Manutenção */}
      {showMaintButtons && (
        <ContentSBMain>
        {/* <ContentSBButtonItemMenu> */}
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

          <ContentSBItensButtonOnOff open={true}>
            <S.ButtomSBButtonItem isborder title="Listagem Reg...">
              <label>Listar.</label>
            </S.ButtomSBButtonItem>
          </ContentSBItensButtonOnOff>
        {/* </ContentSBButtonItemMenu> */}
        </ContentSBMain>
      )}
    </ContentSBMain>
  );
};

