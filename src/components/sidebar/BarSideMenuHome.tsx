import * as S from './stylesSidebar';
import React from 'react';

import close from '../../assets/svgs/close.svg';
import negado from '../../assets/svgs/negado.svg';
import menuh from '../../assets/svgs/menuh.svg';
import servicos from '../../assets/svgs/servicos.svg';
import design from '../../assets/svgs/design.svg';
import producao from '../../assets/svgs/producao.svg';
import acabamento from '../../assets/svgs/acabamento.svg';
import expedicao from '../../assets/svgs/expedicao.svg';
import administracao from '../../assets/svgs/administracao.svg';
import master from '../../assets/svgs/master.svg';
import config from '../../assets/svgs/config.svg';

import { ContainerSBMain } from './ContainerSBMain';
import { ContainerSBButton } from './ContainerSBButton';
import { ContainerSBItensMenu } from './ContainerSBItensMenu';
import { PageModal } from '../Modal/PageModal';
import { CardSBHlpRecep } from '../contentHelp/CardSBHlpRecep';
import { CardDesemvolver } from '../contentHelp/CardDesenvolver';

export const BarSideMenuHome = () => {
  const [isitensmenu, setIsItensMenu] = React.useState(false);
  const [ismdrecep, setIsMdRecep] = React.useState(false);
  const [ismddesig, setIsMdDesig] = React.useState(false);
  const [ismdprodu, setIsMdProdu] = React.useState(false);
  const [ismdacaba, setIsMdAcaba] = React.useState(false);
  const [ismdexped, setIsMdExped] = React.useState(false);
  const [ismdadmin, setIsMdAdmin] = React.useState(false);
  const [ismdmaste, setIsMdMaste] = React.useState(false);
  const [ismdconfi, setIsMdConfi] = React.useState(false);

  const handlerClickItensMenu = React.useCallback(() => {
    setIsItensMenu((oldState) => !oldState);
  }, []);

  return (
    <ContainerSBMain>
      <S.ContainerButtonSRigth>
        <ContainerSBButton
          img={menuh}
          titbtn={'Menu Help...'}
          onClick={handlerClickItensMenu}
        />
      </S.ContainerButtonSRigth>

      <ContainerSBItensMenu onoff={isitensmenu}>
        <ContainerSBButton
          img={servicos}
          titbtn="Help Recepção..."
          onClick={() => {
            setIsMdRecep(true);
          }}
        />
        <ContainerSBButton
          img={design}
          titbtn="Help Design..."
          onClick={() => {
            setIsMdDesig(true);
          }}
        />
        <ContainerSBButton
          img={producao}
          titbtn="Help Produção..."
          onClick={() => {
            setIsMdProdu(true);
          }}
        />
        <ContainerSBButton
          img={acabamento}
          titbtn="Help Acabamento..."
          onClick={() => {
            setIsMdAcaba(true);
          }}
        />
        <ContainerSBButton
          img={expedicao}
          titbtn="Help Expedição..."
          onClick={() => {
            setIsMdExped(true);
          }}
        />
        <ContainerSBButton
          img={administracao}
          titbtn="Help Administração..."
          onClick={() => {
            setIsMdAdmin(true);
          }}
        />
        <ContainerSBButton
          img={master}
          titbtn="Help Master..."
          onClick={() => {
            setIsMdMaste(true);
          }}
        />
        <ContainerSBButton
          img={config}
          titbtn="Help Config..."
          onClick={() => {
            setIsMdConfi(true);
          }}
        />
      </ContainerSBItensMenu>

      {ismdrecep ? (
        <PageModal
          ptop={'1%'}
          pwidth={'61%'}
          pheight={'70%'}
          titulo={'Help  : Recepção.'}
          imgbm={close}
          titbm={'Fechar...'}
          onclose={() => {
            setIsMdRecep(false);
          }}
        >
          <CardSBHlpRecep imgcard={servicos} />
        </PageModal>
      ) : null}
      {ismddesig ? (
        <PageModal
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'50%'}
          titulo={'Help  : Design.'}
          imgbm={close}
          titbm={'Fechar...'}
          onclose={() => {
            setIsMdDesig(false);
          }}
        >
          <CardDesemvolver imgcard={negado} />
        </PageModal>
      ) : null}
      {ismdprodu ? (
        <PageModal
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'50%'}
          titulo={'Help  : Produção.'}
          imgbm={close}
          titbm={'Fechar...'}
          onclose={() => {
            setIsMdProdu(false);
          }}
        >
          <CardDesemvolver imgcard={negado} />
        </PageModal>
      ) : null}
      {ismdacaba ? (
        <PageModal
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'50%'}
          titulo={'Help  : Acabamento.'}
          imgbm={close}
          titbm={'Fechar...'}
          onclose={() => {
            setIsMdAcaba(false);
          }}
        >
          <CardDesemvolver imgcard={negado} />
        </PageModal>
      ) : null}
      {ismdexped ? (
        <PageModal
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'50%'}
          titulo={'Help  : Expedição.'}
          imgbm={close}
          titbm={'Fechar...'}
          onclose={() => {
            setIsMdExped(false);
          }}
        >
          <CardDesemvolver imgcard={negado} />
        </PageModal>
      ) : null}
      {ismdadmin ? (
        <PageModal
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'50%'}
          titulo={'Help  : Administração.'}
          imgbm={close}
          titbm={'Fechar...'}
          onclose={() => {
            setIsMdAdmin(false);
          }}
        >
          <CardDesemvolver imgcard={negado} />
        </PageModal>
      ) : null}
      {ismdmaste ? (
        <PageModal
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'50%'}
          titulo={'Help  : Master.'}
          imgbm={close}
          titbm={'Fechar...'}
          onclose={() => {
            setIsMdMaste(false);
          }}
        >
          <CardDesemvolver imgcard={negado} />
        </PageModal>
      ) : null}
      {ismdconfi ? (
        <PageModal
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'50%'}
          titulo={'Help  : Config.'}
          imgbm={close}
          titbm={'Fechar...'}
          onclose={() => {
            setIsMdConfi(false);
          }}
        >
          <CardDesemvolver imgcard={negado} />
        </PageModal>
      ) : null}
    </ContainerSBMain>
  );
};
