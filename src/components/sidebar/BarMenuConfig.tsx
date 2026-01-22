   
/////////////////////////////////
// C:\repository\proj-full-stack-frontend\src\components\sidebar\BarMenuConfig.tsx
import React from "react";
import * as S from "./stylesSidebar";
import { ContentSBMain } from "./ContentSBMain";
import { ContentSBMenuSide } from "./ContentSBMenuSide";
import { ContentSBButtonMenu } from "./ContentSBButtonMenu";

import { ContentSBButtonItemMenu } from './ContentSBButtonItemMenu';
import { ContentSBItensModMn } from './ContentSBItensModMn';
import { Dropdown } from "./Dropdown";

import btn_cmenuoff from "../../assets/defaut/botao/btn_def_c_menuoff.svg";
import btn_cmenuon from "../../assets/defaut/botao/btn_def_c_menuon.svg";

import { useAcessoContext, UseAcessoActions } from "../contexts/ContextAcesso";
import { useSystemTables } from "../../funcs/funcs/useSystemTables";

export const BarMenuConfig: React.FC = () => {
  const { dispatch } = useAcessoContext();

  // abre/fecha menu
  const [ismenu, setIsMenu] = React.useState(false);
  const handlerClickIsMenu = React.useCallback(() => {
    setIsMenu((old) => !old);
  }, []);

  // abre/fecha dropdown junto com menu mostando ou não o grid
  const [isdrop, setIsDrop] = React.useState(ismenu);
  const [nometabela, setNomeTabela] = React.useState('');
  
 
  // lista de tabelas do backend (existentes/faltantes)
  const { options, loading, error } = useSystemTables();

  // controle do botão para abrir/fechar Menu Manutenção 
  const [isgrid, setIsGrid] = React.useState(false);
  
  const handleSelectOption = React.useCallback(
    (tableName: string) => {
      console.log("[BarMenuConfig] tabela selecionada:", tableName);
      dispatch({ type: UseAcessoActions.set_NAME_TABLE, payload: tableName });
      setIsGrid(true);
      setNomeTabela(tableName)
    }, [ dispatch ]
  );
  const dropdownOptions = React.useMemo(() => {
    // options já devem ser DropdownOption[]
    return options;
  }, [options]);
  
  // abre/fecha Menu Manutenção junto com menu
  const [ismanut, setIsManut] = React.useState(false);
  const handleClickMenuManut = React.useCallback( () => {
    setIsManut((oldState) => !oldState);
  }, []);

  // abre/fecha Manutenção de Inclusão de registro em Tabela do selecionada
  const [ismanutinc, setIsManutInc] = React.useState(false);
  const handleClickMenuInc = React.useCallback( () => {
    setIsManutInc((oldState) => !oldState);
  }, []);


  // abre/fecha Manutenção de Alteração de registro em Tabela do selecionada
  const [ismanutalt, setIsManutAlt] = React.useState(false);
  const handleClickMenuAlt = React.useCallback( () => {
    setIsManutAlt((oldState) => !oldState);
  }, []);

  // abre/fecha Manutenção de Exclusão de registro em Tabela do selecionada
  const [ismanutexc, setIsManutExc] = React.useState(false);
  const handleClickMenuExc = React.useCallback( () => {
    setIsManutExc((oldState) => !oldState);
  }, []);

  // abre/fecha Manutenção de Listagem com opçao de visualizar/imprimir registro em Tabela do selecionada
  const [ismanutrel, setIsManutRel] = React.useState(false);
  const handleClickMenuRel = React.useCallback( () => {
    setIsManutRel((oldState) => !oldState);
  }, []);

  // caso fechar o menu principal fecha todos os menu
  React.useCallback( () => {
    if (!ismenu) {
      setIsDrop(false);
      setIsGrid(false);
      setIsManutInc(false);
      setIsManutAlt(false);
      setIsManutExc(false);
      setIsManutRel(false);
      //////////////////  DISPARA O dispatch PARA ATUALIZAR O CONFIG
      dispatch({ type: UseAcessoActions.set_INC_TABLE, payload: ismanutinc });
      dispatch({ type: UseAcessoActions.set_ALT_TABLE, payload: ismanutalt });
      dispatch({ type: UseAcessoActions.set_EXC_TABLE, payload: ismanutexc });
      dispatch({ type: UseAcessoActions.set_REL_TABLE, payload: ismanutrel });
    } else {
      if (ismanutinc) {
        setIsManutAlt(false);
        setIsManutExc(false);
        setIsManutRel(false);
      } else if (ismanutalt) {
        setIsManutInc(false);
        setIsManutExc(false);
        setIsManutRel(false);
      } else if (ismanutexc) {
        setIsManutInc(false);
        setIsManutAlt(false);
        setIsManutRel(false);
      } else if (ismanutrel) {
        setIsManutInc(false);
        setIsManutAlt(false);
        setIsManutExc(false);
      }
      //////////////////  DISPARA O dispatch PARA ATUALIZAR O CONFIG
      dispatch({ type: UseAcessoActions.set_INC_TABLE, payload: ismanutinc });
      dispatch({ type: UseAcessoActions.set_ALT_TABLE, payload: ismanutalt });
      dispatch({ type: UseAcessoActions.set_EXC_TABLE, payload: ismanutexc });
      dispatch({ type: UseAcessoActions.set_REL_TABLE, payload: ismanutrel });
      }
    }, [ismenu, ismanutinc, ismanutalt, ismanutexc, ismanutrel, dispatch ]
  );



  return (
    <ContentSBMain>
      {/* Botão Menu */}
      <ContentSBMenuSide onoff={true}>
        <ContentSBButtonMenu
          img={!ismenu ? btn_cmenuon : btn_cmenuoff}
          titbtn={!ismenu ? "Abre Menu..." : "Fecha Menu..."}
          onClick={handlerClickIsMenu}
        />
      </ContentSBMenuSide>

      {/* Dropdown */}
      {isdrop ? (
        <S.ContainerMenuSB open={isdrop}>
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
      ) : null}

      {isgrid ? (
        <S.ContainerMenuSB open={isdrop}>
          <ContentSBButtonItemMenu>
            <S.ButtomSBButtonItem
              isborder={true}
              title={'Tabela Selecionada...'} 
              onClick={ handleClickMenuManut } 
            >
          <label>{nometabela}</label>
          </S.ButtomSBButtonItem>
        </ContentSBButtonItemMenu>
        </S.ContainerMenuSB>
      ) : null }

      {ismanut ? (
        <ContentSBButtonItemMenu>
          <ContentSBItensModMn onoffitem={ismanut}>
            <S.ButtomSBButtonItem
              isborder={true}
              title={'Inclusão Reg...'} 
              onClick={ () => handleClickMenuInc } 
            >
            <label>Inclusão.</label>
            </S.ButtomSBButtonItem>
          </ContentSBItensModMn>

          <ContentSBItensModMn onoffitem={ismanut}>
            <S.ButtomSBButtonItem
              isborder={true}
              title={'alteração Reg...'} 
              onClick={ () => handleClickMenuAlt } 
            >
            <label>Alteração.</label>
            </S.ButtomSBButtonItem>
          </ContentSBItensModMn>

          <ContentSBItensModMn onoffitem={ismanut}>
            <S.ButtomSBButtonItem
              isborder={true}
              title={'exclusão Reg...'} 
              onClick={ () => handleClickMenuExc } 
            >
            <label>Exclusão.</label>
            </S.ButtomSBButtonItem>
          </ContentSBItensModMn>

          <ContentSBItensModMn onoffitem={ismanut}>
            <S.ButtomSBButtonItem
              isborder={true}
              title={'Listagem Reg...'} 
              onClick={ () => handleClickMenuRel } 
            >
            <label>Listagem.</label>
            </S.ButtomSBButtonItem>
          </ContentSBItensModMn>

        </ContentSBButtonItemMenu>
      ) : null }


    </ContentSBMain>
  );
};

