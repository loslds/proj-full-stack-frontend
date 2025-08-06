import React from 'react';
import * as S from './stylesSidebar';
import { ContentSBMain } from './ContentSBMain';
import { ContainerSBButton } from './ContainerSBButton';
import bt_menucirc from '../../assets/pngs/bt_menucirc.png';




// import { Dropdown } from './Dropdown';

// interface BarMenuConfigProps {
//   setActiveComponent: (component: string | null) => void;
// }
// export const BarSideMenuConfig: React.FC<BarSideMenuConfigProps> = ({ setActiveComponent }) => {

export const BarMenuConfig = () => {  
  
  // abre ou fecha Menu Principal
  
  const [isopc, setIsOpc] = React.useState(false);
  const [ismenu, setIsMenu] = React.useState(false);
  
  const handlerClickMenu = React.useCallback(() => {
    setIsMenu((oldState) => !oldState);
  }, []);

  return (
    <ContentSBMain>
      <S.ContainerButtonSRigth>
        <ContainerSBButton
          img={bt_menucirc}
          titbtn={"Menu..."}
          onClick={handlerClickMenu}
        />
      </S.ContainerButtonSRigth>
      <S.ContainerMenuSide open={ismenu}>
        <S.ButtonItemMn>
          Ferramentas.
        </S.ButtonItemMn>
        
        <S.ContainerButtonMnItens open={isopc}>
          <S.ContainerButtonSLeft>
            <S.ButtonItemMn title='Ferramentas.' onClick={() => alert('Opcbnt-1')} >
              btnItem-1
            </S.ButtonItemMn>
          </S.ContainerButtonSLeft>
          <S.ContainerButtonSLeft>
            <S.ButtonItemMn title='Ferramentas.' onClick={() => alert('Opcbnt-2')} >
              btnItem-2
            </S.ButtonItemMn>
          </S.ContainerButtonSLeft>
          <S.ContainerButtonSLeft>
            <S.ButtonItemMn title='Ferramentas.' onClick={() => alert('Opcbnt-3')} >
              btnItem-3
            </S.ButtonItemMn>
          </S.ContainerButtonSLeft>

      
          

          
        </S.ContainerButtonMnItens>
      </S.ContainerMenuSide>
      

      
    </ContentSBMain>
  );
};



/* {

  // const handleSelectOption = (value: string) => {
  //   setActiveComponent(value);
  // };

  // const handleSelectOption = (value: string) => {
  //   if (value === "checkdb") setActiveComponent("CheckDB");
  //   if (value === "backupdb") setActiveComponent("BackupDB");
  //   if (value === "restoredb") setActiveComponent("RestoreDB");
  //   if (value === "explorerdb") setActiveComponent("ExplorerDB");
  // };


<Dropdown
  pxheight="30px"
  pxwidth="200px"
  labelbtn="Ferramentas."
  options={[
  {
    label: "Checking DB", value: "Checking DB",
    // label: "Checking DB", value: "heckingdb",
    //subOptions: [{ label: "Check DB", value: "checkdb" }],
  },
  {
    label: "Manutenção DB", value: "Manutenção DB",
    // label: "Manutenção DB", value: "keepingdb",
    // subOptions: [
    //   { label: "Backup", value: "backupdb" },
    //   { label: "Restore", value: "restoredb" },
    // ],
  },
  { label: "Explorer DB", value: "explorerdb" },
]}
onSelect={handleSelectOption}
/>
 }*/
