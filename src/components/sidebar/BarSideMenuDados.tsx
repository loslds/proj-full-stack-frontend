//import servicos from '../../assets/svgs/servicos.svg';
import React from 'react';

import { useNavigate } from 'react-router-dom';

import avatar001 from '../../assets/svgs/avatar001.svg';
import portaon from '../../assets/svgs/portaon.svg';

import { ContainerSBMain } from './ContainerSBMain';
import { ContainerSBButton } from './ContainerSBButton';
import { ContainerSBItensLogado } from './ContainerSBItensLogado';

import { PageModal } from '../Modal/PageModal';

import { CardAbortarSys } from '../contentHelp/CardAbortarSys';

type TypeBarSideMenuDados = {
  open?: boolean;
};
export const BarSideMenuDados = ({ open }: TypeBarSideMenuDados) => {
  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const [isabortar, setIsAbortar] = React.useState(false);

  const handlerAbortar = React.useCallback(() => {
    setIsAbortar((oldState) => !oldState);
  }, []);

  return (
    <ContainerSBMain>
      <ContainerSBItensLogado open={open}>
        <ContainerSBButton
          img={avatar001}
          titbtn="Minha Conta..."
          onClick={goto('/MyAccount')}
        />
        <ContainerSBButton
          titbtn="Meus Acesso..."
          onClick={goto('/MyAccount')}
        />
        <ContainerSBButton
          img={portaon}
          titbtn="Fazerlogo-off..."
          onClick={handlerAbortar}
        />
      </ContainerSBItensLogado>
      {isabortar ? (
        <PageModal
          ptop="111px"
          pwidth="60%"
          pheight="75%"
          titulo='" A T E N Ç Ã O "'
          onclose={() => {
            setIsAbortar(false);
          }}
        >
          <CardAbortarSys />
        </PageModal>
      ) : null}
    </ContainerSBMain>
  );
};
