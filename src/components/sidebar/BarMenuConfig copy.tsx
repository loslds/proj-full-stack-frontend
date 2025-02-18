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
    if (value === "checkdb") setActiveComponent("CheckDB");
    if (value === "backupdb") setActiveComponent("BackupDB");
    if (value === "restoredb") setActiveComponent("RestoreDB");
    if (value === "explorerdb") setActiveComponent("ExplorerDB");
  };

  // const handleSelectOption = (value: string) => {
  //   if (value === "checkdb") setActiveComponent("CheckDB");
  //   if (value === "backupdb") setActiveComponent("BackupDB");
  //   if (value === "restoredb") setActiveComponent("RestoreDB");
  //   if (value === "explorerdb") setActiveComponent("ExplorerDB");
  // };

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
              // label: "Checking DB", value: "heckingdb",
              //subOptions: [{ label: "Check DB", value: "checkdb" }],
            },
            {
              label: "Ferramentas", value: "Ferramentas",
              // label: "Manutenção DB", value: "keepingdb",
              // subOptions: [
              //   { label: "Backup", value: "backupdb" },
              //   { label: "Restore", value: "restoredb" },
              // ],
            },
            { label: "Pesquisas", value: "Pesquisas" },
          ]}
          onSelect={handleSelectOption}
        />
      </S.ContainerMenuSB>
    </ContainerSBMain>
  );
};

