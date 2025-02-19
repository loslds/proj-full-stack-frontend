import React from 'react';
import * as S from './stylesSidebar';

import bt_menucirc from '../../assets/pngs/bt_menucirc.png';
import { ContainerSBMain } from './ContainerSBMain';
import { ContainerSBButton } from './ContainerSBButton';

import { Dropdown } from './Dropdown';

interface BarSideMenuConfigProps {
  setActiveComponent: (component: string | null) => void;
}
export const BarSideMenuConfig: React.FC<BarSideMenuConfigProps> = ({ setActiveComponent }) => {
  
  const [isitensmenu, setIsItensMenu] = React.useState(false);

  const handlerClickItensMenu = React.useCallback(() => {
    setIsItensMenu((oldState) => !oldState);
  }, []);
  const handleSelectOption = (value: string) => {
    setActiveComponent(value);
  };
  
  return (
    <ContainerSBMain>
      <S.ContainerButtonSRigth>
        <ContainerSBButton
          img={bt_menucirc}
          titbtn={"Menu..."}
          onClick={handlerClickItensMenu}
        />
      </S.ContainerButtonSRigth>
      <S.ContainerMenuSB open={isitensmenu}>

      <Dropdown
          pxheight="30px"
          pxwidth="200px"
          labelbtn="Ferramentas."
          options={[
            {
              label: "O. Serviços", value: "O. Serviços",
              subOptions: [
                { label: "Inclusão", value: "inclos" },
                { label: "Alteração", value: "altlos" },
                { label: "Exclusão", value: "exclos" },
              ],
            },
            {
              label: "Ferramentas", value: "Ferramentas",
              subOptions: [
                { label: "Tab. Cores", value: "tabcor" },
                { label: "Tab. Preço", value: "tabprc" },
              ],
            },
            { label: "Pesquisas", value: "Pesquisas",
              subOptions: [
                { label: "Ordem Serv.", value: "ospesq" },
                { label: "Cliêntes", value: "clipesq" },
                { label: "Consumidor", value: "conspesq" },
              ],
            },
          ]}
          onSelect={handleSelectOption}
        />
      </S.ContainerMenuSB>
    </ContainerSBMain>
  );
};

