import React from 'react';
import * as S from './stylesSidebar';
import { ContentSBMain } from './ContentSBMain';
import { ContentSBItensMenu } from './ContentSBItensMenu';

// import { ContentSBButtonOnOff } from './ContentSBButtonOnOff';
import { ContentSBButton } from './ContentSBButton';


import btn_cmenuoff from '../../assets/defaut/botao/btn_def_c_menuoff.svg';
import btn_cmenuon from '../../assets/defaut/botao/btn_def_c_menuon.svg';




// import { Dropdown } from './Dropdown';

// interface BarMenuConfigProps {
//   setActiveComponent: (component: string | null) => void;
// }
// export const BarSideMenuConfig: React.FC<BarSideMenuConfigProps> = ({ setActiveComponent }) => {

export const BarMenuConfig = () => {  
  
  //const [ msgpanelbottom , setMsgPanelBottom ] = React.useState('');
  
  
  // abre ou fecha Menu Principal
  
  

  //const [isitensmenu, setIsItensMenu] = React.useState(false);
  
  const [ismenu, setIsMenu] = React.useState(false);
  const handlerClickIsMenu = React.useCallback(() => {
    setIsMenu( (oldState) => !oldState);
  }, []);

  return (
    /** CONTEINER SIBER */
    <ContentSBMain>
      
      <S.ContainerButtonSRigth>
        <ContentSBButton
          img={ !ismenu ? ( btn_cmenuon ) : (btn_cmenuoff) } 
          titbtn= { ismenu ? ( "Abre Menu..." ) : ("Fecha Menu...") }
          onClick={handlerClickIsMenu}
        />
      </S.ContainerButtonSRigth> 

      <S.ContainerMenuSB open={ismenu}>
        
        <S.ContainerSBItensMenu open={ismenu}>

          <ContentSBButton
            img={''} 
            titbtn= { '111111' }
            onClick={ () =>{} }
          />
        </S.ContainerSBItensMenu>


<S.ContainerSBItensMenu open={ismenu}>

          <ContentSBButton
            img={''} 
            titbtn= { '222222' }
            onClick={ () =>{} }
          />
        </S.ContainerSBItensMenu>
        

      </S.ContainerMenuSB>
      {/** BOTÃO MENU */}

{/* 
       <ContentSBButtonOnOff 
        titbtn='Menu.' 
        img={ismenu ? btn_cmenuon : btn_cmenuoff} 
        onClick={handlerClickIsMenu}
      >
        <ContentSBItensMenu onoff={ismenu}>
          <ContentSBButton
            img={''}
            titbtn='Menu.'  
            onClick={handlerClickIsMenu }
          />

        </ContentSBItensMenu>  
      </ContentSBButtonOnOff> 
 
      <ContentMenuSide open={ismenu}>
        <S.ButtonItemMn>
          Ferramentas.
        </S.ButtonItemMn>
        
        <S.ContainerButtonMnItens open={true}>
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
       </ContentMenuSide> 
       */}

      
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
