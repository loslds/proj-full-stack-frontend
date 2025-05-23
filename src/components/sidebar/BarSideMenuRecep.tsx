import * as S from './stylesSidebar';

//import semimg from "../../assets/svgs/semimg.svg";
import bt_menu from '../../assets/svgs/bt_menu.svg';
//import bt_tabprc from '../../assets/svgs/bt_tabprc.svg';
//import bt_tabcor from '../../assets/svgs/bt_tabcor.svg';

//import producao from "../../assets/svgs/producao.svg";
//import acabamento from "../../assets/svgs/acabamento.svg";
//import expedicao from "../../assets/svgs/expedicao.svg";
//import administracao from "../../assets/svgs/administracao.svg";
//import master from "../../assets/svgs/master.svg";
//import config from "../../assets/svgs/config.svg";

import { ContainerSBMain } from './ContainerSBMain';
import { ContainerSBButton } from './ContainerSBButton';

//import { ContainerSBItensModMn } from './ContainerSBItensModMn';
//import { ContentSBButtonTitleMenu } from './ContentSBButtonTitleMenu';

import React from 'react';
//import PageModal from "../Modal/PageModal";
//import { CardModuloRecep } from "../contentHelp/CardModuloRecep";


export const BarSideMenuRecep = () => {
  const [isitensmenu, setIsItensMenu] = React.useState(false);
  
  // const [ismntab, setIsMnTab] = React.useState(false);
  // const [istabprc, setIsTabPrc] = React.useState(false);
  // const [istabcor, setIsTabCor] = React.useState(false);

  // const [ismncad, setIsMnCad] = React.useState(false);
  // const [isos, setIsOs] = React.useState(false);
  // const [isentidades, setIsentidades] = React.useState(false);
  // const [isclie, setIsCadCli] = React.useState(false);
  // const [iscaddia, setIsCadDia] = React.useState(false);

  //const [ismnsetor, setIsMnSetor] = React.useState(false);
  //const [issetdesg, setIsSetDesg] = React.useState(false);
  //const [issetprod, setIsSetProd] = React.useState(false);
  //const [issetacab, setIsSetAcab] = React.useState(false);
  //const [issetexpe, setIsSetExpe] = React.useState(false);

  //const [ismdadmin, setIsMdAdmin] = React.useState(false);
  //const [ismdmaste, setIsMdMaste] = React.useState(false);
  //const [ismdconfi, setIsMdConfi] = React.useState(false);

  const handlerClickItensMenu = React.useCallback(() => {
    setIsItensMenu((oldState) => !oldState);
  }, []);

  // const handlerClickMnTab = React.useCallback(() => {
  //   setIsMnTab((oldState) => !oldState);
  // }, []);

  
  // const handlerClickMnCad = React.useCallback(() => {
  //   setIsMnCad((oldState) => !oldState);
  // }, []);
  // const handlerClickMnSetor = React.useCallback(() => {
  //   setIsMnSetor((oldState) => !oldState);
  // }, []);

  return (
    <ContainerSBMain>
      <S.ContainerButtonSRigth>
        <ContainerSBButton
          img={bt_menu}
          titbtn={'Menu...'}
          onClick={handlerClickItensMenu}
        />
      </S.ContainerButtonSRigth>
      <S.ContainerMenuSide open={isitensmenu}>
        
{/* 
        Tabelas
        <S.ContainerButtonSLeft>
          <ContainerSBItensModMn onoff={ismntab}>
            <ContainerSBButton
              img={bt_tabprc}
              titbtn="Tab.Preços..."
              onClick={() => {
                setIsTabCor(true);
              }}
            />
            <ContainerSBButton
              img={bt_tabcor}
              titbtn="Tab.Cores..."
              onClick={() => {
                setIsTabPrc(true);
              }}
            />
          </ContainerSBItensModMn>

          <S.ContainerButtonMnItens>
            <ContentSBButtonTitleMenu
              isimg={ismntab}
              title={'Tabelas.'}
              // onclick={handlerClickMnTab}
            />
          </S.ContainerButtonMnItens>
        </S.ContainerButtonSLeft>

        entidades : Clientes, Consumidores  
        
        <S.ContainerButtonSLeft>
          <ContainerSBItensModMn onoff={ismncad}>
            <ContainerSBButton
              titbtn="O.Serviço..."
              onClick={() => {
                setIsCadOs(true);
              }}
            />
            <ContainerSBButton
              titbtn="Cliêntes..."
              onClick={() => {
                setIsCadCli(true);
              }}
            />
            <ContainerSBButton
              titbtn="Diario..."
              onClick={() => {
                setIsCadDia(true);
              }}
            />
          </ContainerSBItensModMn>
          <S.ContainerButtonMnItens>
            <ContentSBButtonTitleMenu
              isimg={ismncad}
              title={'Cadastros.'}
              onclick={handlerClickMnCad}
            />
          </S.ContainerButtonMnItens>
        </S.ContainerButtonSLeft>

        
         abrea aqui  Tabela Preço, Tabela de Cores
        


         Setores  
        <S.ContainerButtonSLeft>
          <ContainerSBItensModMn onoff={ismnsetor}>
            <ContainerSBButton
              titbtn="Design..."
              onClick={() => {
                setIsSetDesg(true);
              }}
            />
            <ContainerSBButton
              titbtn="Produção..."
              onClick={() => {
                setIsSetProd(true);
              }}
            />
            <ContainerSBButton
              titbtn="Produção..."
              onClick={() => {
                setIsSetAcab(true);
              }}
            />
            <ContainerSBButton
              titbtn="Expedição..."
              onClick={() => {
                setIsSetExpe(true);
              }}
            />
          </ContainerSBItensModMn>
          <S.ContainerButtonMnItens>
            <ContentSBButtonTitleMenu
              isimg={ismnsetor}
              title={'Setores.'}
              onclick={handlerClickMnSetor}
            />

          </S.ContainerButtonMnItens>
        </S.ContainerButtonSLeft>
 */}        
      </S.ContainerMenuSide>
    </ContainerSBMain>
  );
};
