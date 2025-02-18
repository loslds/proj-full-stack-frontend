import * as S from './stylesSidebar';
import bt_menucirc from '../../assets/pngs/bt_menucirc.png';
import { ContainerSBMain } from './ContainerSBMain';
import { ContainerSBButton } from './ContainerSBButton';
import { Dropdown } from './Dropdown';
import React from 'react';

interface BarMenuRecepcaoProps {
  setActiveComponent: (component: string | null) => void;
}
export const BarMenuRecepcao = React.FC<BarMenuRecepcaoProps> = ({ setActiveComponent }) => { 
  // Estado para abrir/fechar o menu principal
  const [isMenuPri, setIsMenuPri] = React.useState(false);
  const handlerClickMenuPri = React.useCallback(() => {
    setIsMenuPri((prevState) => !prevState);
  }, []);
  // Lista das Opções para abrir/fechar o seleçoes
  const handleSelectOption = (value: string) => {
    setActiveComponent(value);
    if (value === "O.Serviços") setActiveComponent("CheckDB");
    if (value === "backupdb") setActiveComponent("BackupDB");
    if (value === "restoredb") setActiveComponent("RestoreDB");
    if (value === "explorerdb") setActiveComponent("ExplorerDB");

  };
  

  return (
    <ContainerSBMain>
      <S.ContainerButtonSRigth>
        <ContainerSBButton
          img={bt_menucirc}
          titbtn="Menu..."
          onClick={handlerClickMenuPri}
        />
      </S.ContainerButtonSRigth>
      <S.ContainerMenuSide open={isMenuPri}>
        <Dropdown
          pxheight="30px"
          pxwidth="200px"
          labelbtn="O.Serviços"
          options={[
            {
              label: "Incluir Reg.", value: "CadIncOs",
            },
            {
              label: "Alrerar Reg.", value: "CadAltOs",
            },
            {
              label: "Excluir Reg.", value: "CadExcOs",
            },
          ]}
          onSelect={handleSelectOption}
        />

      </S.ContainerMenuSide>
    </ContainerSBMain>
  );
};

{/*

// Estados dos itens do menu
  const [activeItem, setActiveItem] = React.useState<string | null>(null);
  const handlerClickItemMenu = React.useCallback((item: string) => {
    setActiveItem((prevItem) => (prevItem === item ? null : item));
  }, []);

<S.ButtonItemMn onClick={() => handlerClickItemMenu('O. Serviço.')}>
O. de Serviço.
</S.ButtonItemMn>
{activeItem === 'O. Serviço.' && <h3>O. de Serviço.</h3>}

<S.ButtonItemMn onClick={() => handlerClickItemMenu('Ferramentas.')}>
Ferramentas.
</S.ButtonItemMn>
{activeItem === 'Ferramentas.' && <h3>Ferramentas.</h3>}

<S.ButtonItemMn onClick={() => handlerClickItemMenu('Pesquisas.')}>
Pesquisas.
</S.ButtonItemMn>
{activeItem === 'Pesquisas.' && <h3>Pesquisas.</h3>}





 
         
        <S.ContainerButtonMnItens open={isitemmenu}>
          <S.ContainerButtonSLeft>
            <S.ButtonItemMn title='O. de Seviço.' onClick={() => alert('Opcbnt-1')} >
            O. de Seviço.
            </S.ButtonItemMn>
          </S.ContainerButtonSLeft>
          <S.ContainerButtonSLeft>
            <S.ButtonItemMn title='Tabela de Cores.' onClick={() => alert('Opcbnt-2')} >
            Tabela de Cores.
            </S.ButtonItemMn>
          </S.ContainerButtonSLeft>
          <S.ContainerButtonSLeft>
            <S.ButtonItemMn title='Tabela de Preço.' onClick={() => alert('Opcbnt-3')} >
            Tabela de Preço.
            </S.ButtonItemMn>
          </S.ContainerButtonSLeft>
 
        </S.ContainerButtonMnItens>





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
 */}
