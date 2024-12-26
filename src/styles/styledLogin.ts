import styled from 'styled-components';

import semimg from '../assets/svgs/semimg.svg';

// export const ContainerCardPage = styled.div`
//   border: none;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   width: 100%;
//   display: flex;
//   min-height: 50px;
//   flex-wrap: wrap;
//   justify-content: center;
//   color:  ${props => props.theme.colors.textColor};
//   background: ${props => props.theme.colors.backgroundColor};
// `;
// type ContainerCardMainFlexType = {
//   pwidth? : string;
// };
// export const ContainerCardPageFlex = styled.div<ContainerCardMainFlexType>`
//   border: 3px double;
//   border-radius: 10px;
//   border-color: ${props => props.theme.colors.textColor};
//   padding: 0px 0px 0px 0px;
//   margin: 5px 0px 5px 0px;
//   width: ${({ pwidth }) => pwidth || '65%'};
//   display: flex;
//   flex-flow: row;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-content: center;
// `;


// type TypeContainerCardMain = {
//   pheight?: string;
// };
// export const ContainerCardMain = styled.div<TypeContainerCardMain>`
//   border: none;
//   padding: 0px 0px 0px 0px;
//   margin: 5px 5px 5px 5px;
//   min-height: ${({ pheight }) => pheight || '20px'};
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   flex-flow: row;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
// `;


// type TypeContainerCardCenter = {
//   pwidth? : string;
//   open?: boolean;
// }
// export const ContainerCardCenter = styled.div<TypeContainerCardCenter>`
//   border: none;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   min-height: 50px;
//   min-width: ${({ pwidth }) => pwidth || '32%'};
//   color:  ${props => props.theme.colors.textColor};
//   background-color: ${props => props.theme.colors.backgroundColor};
//   display: ${props => (props.open ? 'flex' : 'none')};
//   flex-wrap: wrap;
//   justify-content: center;
// `;

// export const ContainerCardCenterFlex = styled.div`
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   border: 3px double;
//   border-color: ${props => props.theme.colors.textColor};
//   border-radius: 10px;
//   width: 100%;
//   min-height: 60px;
//   display: flex;
//   flex-flow: row;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-content: center;
// `;

// export const ContainerInput = styled.div`
//   border: none;/* 1px solid green;*/
//   padding: 2px 2px 2px 2px;
//   margin: 0px 0px 0px 0px;
//   width: 100%;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: left;
//   align-items: center;
//   align-content: center;

// `;
export const ContainerCardTitlePanel = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 60px;
  width: 100%;
  background: transparent;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
//////////////////////////////

export const ContainerTitleLogin = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 3px double;
  border-color: ${props => props.theme.colors.textColor};
  background-color: #bbbbbb;

  min-height: 35px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  
`;

type ContainerMainLoginType = {
  isopen?: boolean;
};
export const ContainerMainLogin = styled.div<ContainerMainLoginType>`
  border: 1px solid red;
  padding: 0px 0px 0px 0px;
  margin: 5px 5px;
  width: 100%;
  min-height: 60px;
  display: ${props => (props.isopen ? 'flex' : 'none')};
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
////////////////////////////////////////
type ContainerCollFormCenterType = {
  pwidth? : string;
  isopen?: boolean;
};
export const ContainerCollFormCenter = styled.div<ContainerCollFormCenterType>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
  min-width: ${({ pwidth }) => pwidth || '200px'};
  display: ${props => (props.isopen ? 'flex' : 'none')};
  flex-flow: row;
  flex-wrap: wrap;
  //justify-content: left;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
//////////////////////////////////////

type ContainerPainelCollunsOpcType = {
  pheight?: string;
  pwidth? : string;
};
export const ContainerPainelCollunsOpc = styled.div<ContainerPainelCollunsOpcType>`
  border: 1px dashed yellow;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
  width: ${({ pwidth }) => pwidth || '200px'};
  min-height: ${({ pheight }) => pheight || '60px'};
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
///////////////////////////////////////

export const DivisionPgHztal = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 1px 0px 1px 0px;
  height: 3px;
  width: 100%;
  display: flex;
  background-color: #9c9c9c;
`;

type DivisionPgHztalOnOffType ={
  isopen?: boolean;
};
export const DivisionPgHztalOnOff = styled.div<DivisionPgHztalOnOffType>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 1px 0px 1px 0px;
  height: 3px;
  width: 100%;
  display: ${props => (props.isopen ? 'flex' : 'none')};
  background-color: #9c9c9c;
`;
//////////////////////////////////////

////////////////////////////////////
// opções
type ContainerLoginOpcType = {
  pwidth? : string;
  open?: boolean;
}
export const ContainerLoginOpc = styled.div<ContainerLoginOpcType>`
  border: 3px solid red;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 50px;
  min-width: ${({ pwidth }) => pwidth || '32%'};
  color:  ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContainerLoginFlexOpc = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border: 3px double;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 10px;
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;

export const ContainerTitleLoginOpc = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 3px double;
  border-bottom-color: ${props => props.theme.colors.textColor};
  background-color: #bbbbbb;

  min-height: 35px;
  min-width: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  align-content: center; 
`;
/////////////////////////////////

export const InputCenter = styled.div`
  border: none;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: left;
  align-content: center;
  align-items: center;
`;

export const InputPage = styled.input`
  border: none;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  display: flex;
  max-inline-size: 100%;
  background-color: transparent;
  outline: 0;
  color: #fff;
  size: 18px;
  line-height: 20px;
`;
/////////////////////////////////
// panel dos botões do formulário
/////////////////////////////////

type ContainerMainButtonsLoginType = {
  pwidth? : string;
};
export const ContainerMainButtonsLogin  = styled.div<ContainerMainButtonsLoginType>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: ${({ pwidth }) => pwidth || '32%'};
  min-height: 45px;
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
  display: flex;
  flex: content;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center ;
`;

export const ContainerMainButtonsLoginFlex = styled.div`
  border: 3px double;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 10px 0px 10px;
  margin: 5px 10px 5px 10px;
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center ;
`;

// botão

export const ContainerBtnLoginSRigth = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 2px 5px 2px 5px;
  background: transparent;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
`;

export const ContainerButtonOnImg = styled.div`
  border: 1px;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px;
  background: transparent;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
  &:hover {
    background: #3aff35;
   }
`;

export const ContainerButtonOffImg = styled.div`
  border: 1px;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px;
  background: transparent;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
  &:hover {
    background: #ff3737;
   }
`;

type ButtonOnOffImgType = {
  img?: string;
};
export const ButtonOnOffImg = styled.button<ButtonOnOffImgType>`
  border: 2px; 
  border-radius: 3px;
  margin: 2px 5px 2px 5px;
  color:  ${props => props.theme.colors.textColor};
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
  height: 30px;
  min-width: 30px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;

export const ContainerAreaText = styled.div`
  border: none;
  margin: 0px 10px 0px 10px;
  padding: 0px 0px 0px 0px;
  size: 16px;
  line-height: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: left;
  align-content: center;
  align-items: left;
 `;

export const ContainerFormColl = styled.div`
  border: 2px;
  border-color: #939393;
  border-radius: 5px;
  margin: 5px 5px;
  padding: 5px 5px;
  background: ${props => props.theme.colors.backgroundColor};
  min-height: 40px;
  display: flex;
  //flex-flow: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  //align-content: center;
  color:  ${props => props.theme.colors.textColor};
  &:hover {
    background: #ff3737;
   }
  label {
    margin: 2px 5px;
    padding: 2px 5px;
    color:  ${props => props.theme.colors.textColor};
    background: ${props => props.theme.colors.backgroundColor};
  } 
`;

type ContainerFormCenterType = {
  pwidth?: string;
};
export const ContainerFormCenter = styled.div<ContainerFormCenterType>`
  border: 3px double;
  border-color: greenyellow;
  border-radius: 10px;
  //border-color: ${props => props.theme.colors.textColor};
  padding: 5px 5px 5px 5px;
  margin: 5px 5px 5px 5px;
  width: ${({ pwidth }) => pwidth || '65%'};
  display: flex ;
  //justify-content: space-between;
  justify-content: center;
  align-items: center;
  align-content: center;
`;




