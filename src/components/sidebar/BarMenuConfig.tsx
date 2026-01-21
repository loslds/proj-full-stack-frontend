
// C:\repository\proj-full-stack-frontend\src\components\sidebar\BarMenuConfig.tsx
import React from "react";
import * as S from "./stylesSidebar";

import { ContentSBMain } from "./ContentSBMain";
import { ContentSBMenuSide } from "./ContentSBMenuSide";
import { ContentSBButtonMenu } from "./ContentSBButtonMenu";
import { Dropdown, DropdownOption } from "./Dropdown";
import { ContentSBItensMenu } from './ContentSBItensMenu';
// ✅ hook que monta a lista (existentes / faltantes)
import { useSystemTables } from "../../funcs/funcs/useSystemTAbles";

import btn_cmenuoff from "../../assets/defaut/botao/btn_def_c_menuoff.svg";
import btn_cmenuon from "../../assets/defaut/botao/btn_def_c_menuon.svg";
import { useAcessoContext, UseAcessoActions } from '../contexts/ContextAcesso';


interface BarMenuConfigProps {
  setActiveComponent: (component: string | null) => void;
}

export const BarMenuConfig: React.FC<BarMenuConfigProps> = ({ setActiveComponent }) => {
  // ação do context
  const { state, dispatch } = useAcessoContext();

  // abre/fecha Menu Principal
  const [ismenu, setIsMenu] = React.useState(false);

  // mostra/esconde dropdown quando menu está aberto
  const [isdrop, setIsDrop] = React.useState(false);
  const handlerClickIsMenu = React.useCallback(() => {
    setIsMenu((oldState) => !oldState);
  }, []);

  React.useEffect(() => {
    setIsDrop(ismenu);
  }, [ismenu]);

  // ✅ busca lista de tabelas só quando menu está aberto
  const { options, loading, error } = useSystemTables(ismenu);

  // ✅ converte para o formato exigido pelo Dropdown (DropdownOption[])
  const dropdownOptions: DropdownOption[] = React.useMemo(() => {
    return options.map((t) => ({
      label: t.label, // ex: "✅ systables" / "⚠️ pessoas"
      value: t.value, // ex: "systables" / "pessoas"
    }));
  }, [options]);


  const handleSelectOption = React.useCallback(
  (tableName: string) => {
    console.log('[BarMenuConfig] tabela selecionada:', tableName);

    dispatch({type: UseAcessoActions.set_NAME_TABLE, payload: tableName, });

    // opcional: se ainda quiser manter controle local
    if (setActiveComponent) {
      setActiveComponent(tableName);
    }
  }, [dispatch, setActiveComponent]);

  
  const [isgrigtable, setIsGrigTable] = React.useState(false);
  const handlerClickIsGrigTable = React.useCallback(() => {
    setIsGrigTable((oldState) => !oldState);
  }, []);


  React.useEffect(() => {
    console.log("[CONFIG] Name tabela : =>", state.nametable);
  }, [state.nametable]);

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

      {/* Dropdown lista de tabelas */}
      <S.ContainerMenuSB open={isdrop}>
        <Dropdown
          pxheight="30px"
          pxwidth="170px"
          labelbtn="Arq.Sistema."
          options={dropdownOptions}
          onSelect={handleSelectOption}
        />
       
          <ContentSBItensMenu onoff={isgrigtable}>
            <S.ContainerButtonMn>
              <S.ButtonItemMn 
                title="Tab.em Ação..."
                onClick={() => handlerClickIsGrigTable }
              >
                Nometable
              </S.ButtonItemMn>
            </S.ContainerButtonMn>
        
          </ContentSBItensMenu>

        
        {loading ? <small>Carregando...</small> : null}
        {error ? <small>{error}</small> : null}
      </S.ContainerMenuSB>  
    </ContentSBMain>
  );
};
