
import * as S from './stylesSidebar';
import { useNavigate } from "react-router-dom";
import bt_menucirc from '../../assets/pngs/bt_menucirc.png';
import { ContainerSBMain } from './ContainerSBMain';
import { ContainerSBButton } from './ContainerSBButton';
import React from 'react';
import { Dropdown } from './Dropdown';

export const BarSideMenuConfig = () => {

  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  
  const [isitensmenu, setIsItensMenu] = React.useState(false);

  

  const handlerClickItensMenu = React.useCallback(() => {
    setIsItensMenu((oldState) => !oldState);
  }, []);



  const handleSelectOption = (value: string) => {
    if (value === 'chechkMySq') { () => goto('/config/mysql') }
    
    if (value === 'sub2') { alert('clicou Sub-2')}
    if (value === 'backup') { alert('clicou Backup')}
    if (value === 'restore') { alert('clicou Restore')}
    if (value === 'explorerbd') { alert('clicou Explore DB')}
    
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
          pxheight='30px'
          pxwidth='200px'
          labelbtn='Ferramentas.'
          options={[
            { 
              label: 'Checking DB', 
              value: 'checkingdb',
              subOptions: [
                { label: 'Sub-item 1', value: 'sub1' },
                { label: 'Sub-item 2', value: 'sub2' },
              ]
            },
            { 
              label: 'Manutenção DB', 
              value: 'keepingdb',
              subOptions: [
                { label: 'Backup', value: 'backup' },
                { label: 'Restore', value: 'restore' },
              ]
            },
            { label: 'Explorer DB', value: 'explorerbd' },
          ]}
          onSelect={handleSelectOption}
        />
      </S.ContainerMenuSB>
    </ContainerSBMain>
  );
};
