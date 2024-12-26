import styled from "styled-components";

import semimg from '../../assets/svgs/semimg.svg';

///////////// HEADER /////////////////////////
// Container Header
export const ContainerHearder = styled.div`
  top: 0px;
  border: 1px solid red; 
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  background: ${props => props.theme.colors.backgroundColor};
`;
// Container lado Esquerdo HEADER (imagem Sys)
export const ContainerHeaderItens = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border: 2px solid;
  border-radius: 8px;
  border-color: ${props => props.theme.colors.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
// Container imagem do Systema no inicio e após selecionar Empresa imagem da impresa //
export const ContainerImgSys = styled.div`
  border: none;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 3px 7px 3px 7px;
  background: #fff;
  display: flex;
  justify-content: left;
  align-items: center;
  align-content: center;
`;
// Botão com imagem do Systema no inicio
// Botão com imagem da Empresa após executando Empresa selecioda 
type TypeButtonPagesImgSys = {
  img?: string;
}
export const ButtonPagesImgSys = styled.button<TypeButtonPagesImgSys>`
  border: none;
  margin: 0px 0px 0px 0px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  //background-color: transparent;
  cursor: pointer;
  outline: none;
  width: 110px;
  height: 40px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
// Container CENTRO (Titulo da Pagina )
export const ContainerTitleHeader = styled.div`
  border: none; /*1px dashed red;*/
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  min-height: 40px;
  //background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
// Container lado Direito HEADER (Botões)
export const ContainerHeaderRight = styled.div`
  border: 2px solid;
  border-radius: 8px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 0px 2px 0px 2px;
  //background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
`;
export const ContainerHearderRightFlex = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;
// Container HEADER Itens BAR
export const ContainerHeaderItensBar = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 100%;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;

// Conteiner de botões das paginas Header Right
export const ContainerHeaderButton = styled.div`
  border: 2px;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  //background: transparent;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
  &:hover {
    background-color: #e4e4e4;
   }
`;
// Botões das paginas com Imagens
interface PropsButtonHeaderImg {
  img?: string;
}
export const ButtonHeaderImg = styled.button<PropsButtonHeaderImg>`
  border: none;
  margin: 2px 5px 2px 5px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  min-height: 45px;
  width: 45px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
///////////////////////






/////////////////////////// fim HEADER ///////////////////////


export const ContainerPagesButton = styled.div`
  border: 2px red;
  border-color: #ffffff;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  //background: transparent;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
  &:hover {
    background-color: #e4e4e4;
   }
`;

export const ButtonPagesImg = styled.button<{ img?: string }>`
  border: none;
  margin: 2px 5px 2px 5px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  min-height: 45px;
  width: 45px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;

// FIM content lado esquerdo HEADER (imagem swith e outras)

