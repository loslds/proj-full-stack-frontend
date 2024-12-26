import styled from 'styled-components';
//import { darken } from 'polished';
import semimg from '../assets/svgs/semimg.svg';

interface PropsButtonCustonImg {
  pheight?: string;
  pwidth?: string;
  img?: string;
}
export const ButtonCustonImg = styled.button<PropsButtonCustonImg>`
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
  min-height: ${({ pheight }) => pheight || '45px'};
  width: ${({ pwidth }) => pwidth || '45px'};
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;

// interface ButtonProps {
//   bgColor?: string; // Cor de fundo
//   color?: string;   // Cor do texto
//   padding?: string; // Espaçamento interno
//   fontSize?: string; // Tamanho da fonte
//   borderRadius?: string; // Arredondamento das bordas
//   pxheight?: string; // Altura-> ou 50px
//   pxwidth?: string; // lagura
// }
// export const Button = styled.button<ButtonProps>`
//   background-color: ${(props) => props.bgColor || "#007BFF"};
//   color: ${(props) => props.color || "#000"};
//   padding: ${(props) => props.padding || "5px 20px 5px 20px"};
//   margin: ${(props) => props.padding || "5px 5px"};
//   font-size: ${(props) => props.fontSize || "16px"};
//   border: none;
//   border-radius: ${(props) => props.borderRadius || "4px"};
//   min-height: ${({ pxheight }) => pxheight || '35px'};
//   width: ${({ pxwidth }) => pxwidth || '35px'};
//   display: flex;
//   flex-wrap: wrap;
//   cursor: pointer;
//   outline: none;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: ${(props) => props.bgColor ? darken(0.1, props.bgColor) : "#0056b3"};
//   }

//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;

// containers do conteudo para paginas
// Conatiner INICIAL
export const ContainerPg = styled.div`
  border: 5px #d2d2d0 double;
  top: 0px;
  left: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
  
`;
/** quota da flexão do corpo  sem Borda */
export const ContainerFlexPg = styled.div`
  border: none; // solid;
  margin: 3px 5px 3px 5px;
  padding: 0px 0px 0px 0px;
  width: 980px;
  justify-content: space-between;
  // background-color: transparent;
`;
// fim Container INICIAL
///////////// HEADER /////////////////////////
// Container Header
export const ContainerHearder = styled.div`
  top: 0px;
  border: none; 
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;
// Container para ITENS no HEADER
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
interface PropsButtonPagesImgSys {
  img?: string;
}
export const ButtonPagesImgSys = styled.button<PropsButtonPagesImgSys>`
  border: none;
  margin: 0px 0px 0px 0px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
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
// termino do painel Esquerdo HEARD

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
// Container Botões HEADER Right
export const ContainerHeaderButton = styled.div`
  border: 2px;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: transparent;
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
// Botão HEADER Imagem Right
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
  min-height: 40px;
  width: 40px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
///////////container do swith/////////////////////
// interface proprio do switch
/////////////////////////////////////////////

/////////////////////////// fim HEADER ///////////////////////
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
  //background: transparent;
`;

// Conteiner de botões das paginas
export const ContainerPagesButton = styled.div`
  border: 2px red;
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
interface PropsButtonPagesImg {
  img?: string;
}
export const ButtonPagesImg = styled.button<PropsButtonPagesImg>`
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

///////////// FOOTER /////////////////////////
export const ContainerFooter = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 5px 5px 5px 5px;
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;


///////////container do swith/////////////////////

/////////////////////////////////////////////
// Container Main Pages
export const ContainerBodyItensPage = styled.div`
  top: 0px;
  border: none;
  padding: 5px 5px 5px 5px;
  margin: 5px 5px 5px 5px;
  max-width: 100%;
  //min-height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  //background: transparent;
`;
/////////////// antes
// export const ContainerCustonImagem = styled.div<TypeContainerCustonImagem>`
//
interface PropsContainerCustonImgPage {
  pxheight? : string;
  open?: boolean;
}
export const ContainerCustonImgPage = styled.div<PropsContainerCustonImgPage>`
  border: none;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  min-height: ${({ pxheight }) => pxheight || '50px'};
  background: transparent;
  color: ${props => props.theme.colors.textColor};
  display: ${props => (props.open ? 'flex' : 'none')};
`;





//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////
// box column sem borda 100%
////////////////////////////////
export const ContainerCardBoxColumnPg = styled.div`
  border: 1px solid blue;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: '100%';
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-flow: row;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;
//
export const ContainerCardBoxColumnPgFlex = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 5px 5px 5px 5px;
  border: none;
  width: 100%;
  min-height: 40px;
  display: flex;
  //flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;
/////////////////////////////////////////////
//////////////////////////////
// box column com borda pwidth || '150px'
////////////////////////////////
interface PropsContainerCardBoxBorderPg {
  pwidth? : string;
}
export const ContainerCardBoxBorderPg = styled.div<PropsContainerCardBoxBorderPg>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: ${({ pwidth }) => pwidth || '150px'};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-flow: row;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;
export const ContainerCardBoxBorderPgFlex = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 5px 5px 5px 5px;
  border: 3px double;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 10px;
  width: 100%;
  min-height: 40px;
  display: flex;
  //flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;
//////////////////////////////////////
// fim do ContainerCardBoxTitle
// inicio do ContentCardBoxTitle - ContainerCardBoxTitle
///////////////////////////////////////
export const ContainerCardBoxTitle = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 3px double;
  border-color: ${props => props.theme.colors.textColor};
  background-color: #bbbbbb;
  min-height: 25px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
//
//////////////////////////////////////
// fim do ContainerCardBoxTitle
// inicio ContainerCardBoxInput
///////////////////////////////////////
export const ContainerCardBoxInput = styled.div`
  border: none;
  padding: 2px 2px 2px 2px;
  margin: 3px 5px 0px 0px;
  min-width: 35%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  label {
    padding: 2px 2px 2px 2px;
    margin: 0px 5px 0px 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    align-content: center;
    font-size: 18px;
    font-weight: normal;
    line-height: normal;
  }
  /* input {
    padding: 2px 2px 2px 2px;
    margin: 0px 0px 0px 0px;
    min-width: 48%;
    display: flex;
    //flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    align-content: center;
 } */
  img {
    padding: 2px 2px 2px 2px;
    margin: 0px 0px 0px 0px;
    height: 40px;
    height: 40px;
  }
  button {
    padding: 2px 2px 2px 2px;
    margin: 0px 0px 0px 0px;
    height: 40px;
    height: 40px;
  }
`;
//////////////////////////////////////
// fim do Container-> ContainerCardBoxInput
// inicio do Styled -> Select Option 
///////////////////////////////////////
// Estilo para o contêiner que envolve o select
export const SelectMainContainer = styled.div`
  border: 1px solid skyblue;
  display: flex;
  align-content: space-between;
  align-items: flex-start;
  margin: 0px 0px;
`;
export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin: 10px 10px;
`;
// Estilo para o select
export const StyledSelect = styled.select`
  width: 100%;
  max-width: 300px;
  padding: 8px 12px;
  font-size: 18px;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  appearance: none;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;
// Estilo para as opções dentro do select
export const StyledOption = styled.option`
  font-size: 16px;
  color: #333;
`;
//////////////////////////////////////
// fim do Styled -> Option 
// inicio do EmailInput
///////////////////////////////////////
export const EmailInput = styled.input.attrs({ type: 'email' })`
  width: 100%;
  max-width: 400px;
  padding: 10px 15px;
  font-size: 16px;
  color: #333;
  background-color: #f9f9f9;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  &::placeholder {
    color: #aaa;
    font-style: italic;
  }
  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
    opacity: 0.7;
  }
  &:hover:not(:disabled) {
    border-color: #888;
  }
`;

export const FoneInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
  max-width: 200px;
  padding: 8px 12px;
  font-size: 16px;
  color: #333;
  background-color: #f9f9f9;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  &::placeholder {
    color: #aaa;
    font-style: italic;
  }
  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
    opacity: 0.7;
  }
  &:hover:not(:disabled) {
    border-color: #888;
  }
`;

export const CpfInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
  max-width: 200px;
  padding: 10px 15px;
  margin: 10px 10px ;
  font-size: 16px;
  color: #333;
  background-color: #f9f9f9;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  &::placeholder {
    color: #aaa;
    font-style: italic;
  }
  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
    opacity: 0.7;
  }
  &:hover:not(:disabled) {
    border-color: #888;
  }
`;
//////////////////////////////////////
// fim do EmailInput 
// inicio do ContentSidePageBottomLabel -> ContainerBtnSRigthPage
///////////////////////////////////////
export const ContainerBtnSRigthPage = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 2px 5px 2px 5px;
  min-width: 35px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
 `;
//////////////////////////////////////
// fim do ContentSidePageBottomLabel
// inicio do ContentSidePageBottonButtom -> ContainerCustonBtnPage-> ButtonDefaulImgPage
///////////////////////////////////////
interface PropsContainerCustonBtnPage {
  pxheight?: string;
}
export const ContainerCustonBtnPage = styled.div<PropsContainerCustonBtnPage>`
  border: 1px solid;
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  min-height: ${({ pxheight }) => pxheight || '50px'};
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  &:hover {
    background: #e4e4e4;
   }
`;
type TypeButtonDefaulImgPage = {
  img?: string;
};
export const ButtonDefaulImgPage = styled.button<TypeButtonDefaulImgPage>`
  border: 2px;
  border-radius: 3px;
  margin: 2px 5px 2px 5px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url( ${ ( {img} ) => img ? img : semimg });
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  height: 30px;
  min-width: 30px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
//////////////////////////////////////
// fim do ContentSidePageBottonButtom
// inicio do  
///////////////////////////////////////



//////////////////////////////////////
export const ContainerBody = styled.div`
  border: none; /* 1px dashed red;*/
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 60px;
  display: flex;
`;

export const ContainerMenu = styled.div`
  border: 1px dashed blue;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 100%;
  display: flex;
`;

export const ContainerPage = styled.div`
  border: 2px dashed grey;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const DivisionPgHztal = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 1px 0px 1px 0px;
  height: 3px;
  width: 100%;
  display: flex;
  background-color: #9c9c9c;
`;

////////////////////////////////////////////////
// Conainer do Botão Custon
interface PropsContainerCustonButton {
  pxheight : string;
}
export const ContainerCustonButton = styled.div<PropsContainerCustonButton>`
  border: 1px red;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: transparent;
  min-height: ${({ pxheight }) => pxheight || '50px'};
  display: flex;
  flex-wrap: wrap;
  color:  ${props => props.theme.colors.textColor};
  &:hover {
    background-color: #e4e4e4;
   }
`;
////////////////////////////////////////////////////////
// inicio
// ContentCardPage -> {ContainerCardPage,ContainerCardPageFlex}
/////////////////////////////////////////////////////////
export const ContainerCardPage = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;
interface PropsContainerCardMainFlex {
  pwidth? : string;
};
export const ContainerCardPageFlex = styled.div<PropsContainerCardMainFlex>`
  border: 3px double;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  width: ${({ pwidth }) => pwidth || '65%'};
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;
////////////////////////////////////////////////////////
// fim ContentCardPage
// inicio ContentCardPageTitle -> ContainerCardPageTitle
/////////////////////////////////////////////////////////
export const ContainerCardPageTitle = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 3px double;
  border-color: ${props => props.theme.colors.textColor};
  background-color: #bbbbbb;
  min-height: 25px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
////////////////////////////////////////////////////////
// fim ContentCardPageTitle
// ContentCardPageMain -> {ContainerCardPageMain,ContainerCardPageMainFlex}
/////////////////////////////////////////////////////////
interface PropsContainerCardMain {
  open?: boolean;
}
export const ContainerCardPageMain = styled.div<PropsContainerCardMain>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  //min-height: 20px;
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: center;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;
interface PropsContainerCardMainFlex {
  pwidth? : string;
};
export const ContainerCardPageMainFlex = styled.div<PropsContainerCardMainFlex>`
  border: 2px solid red;
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  width: ${({ pwidth }) => pwidth || '100%'};
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;
////////////////////////////////////////////////////////
// fim ContentCardPageMain







export const ContainerCardBoxPage = styled.div`
  border: 2px solid #1116f2;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 150px;
  //display: flex;
  //flex-wrap: wrap;
  //justify-content: center;
  //align-content: center;
  //align-items: center;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;
interface PropsContainerCardBoxFlexPage {
  pwidth? : string;
};
export const ContainerCardBoxPageFlex = styled.div<PropsContainerCardBoxFlexPage>`
  border: 1px dashed red;
  //border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  width: ${({ pwidth }) => pwidth || '65%'};
  display: flex;
  //flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

interface PropsContainerDivManRed {
  pxheight?: string;
  pxwidth?: string;
  label?: string;
  statedata?: string;
}
export const ContainerDivManRed = styled.div<PropsContainerDivManRed>`
  border: 2px solid;
  border-radius: 10px;
  border-color: ${(props) => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  min-height: ${({ pxheight }) => pxheight || '30px'};
  width: ${({ pxwidth }) => pxwidth || '100%'};
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: left;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  background: transparent;
  &:hover {
    border-color: #fc0303;
  }
  p {
    color: #fc0303;
  }
`;

interface PropsContainerDivMainOffRed {
  pxheight?: string;
  pxwidth?: string;
  label?: string;
  statedata?: string;
}
export const ContainerDivMainOffRed = styled.div<PropsContainerDivMainOffRed>`
  border: 2px solid;
  border-radius: 10px;
  border-color: red;
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  min-height: ${({ pxheight }) => pxheight || '30px'};
  width: ${({ pxwidth }) => pxwidth || '100%'};
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: left;
  align-items: center;
  align-content: center;
  color: red;
  background: transparent;
`;