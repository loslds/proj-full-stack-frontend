import styled from 'styled-components';

import semimg from "../../assets/svgs/semimg.svg"

// ContainerBarSideMain
export const ContainerSPanelMain = styled.div`
  /*border: 2px solid;*/
  margin: 2px 0px 2px 8px;
  padding: 0px 0px 0px 0px;
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  border-color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', 'Courier', 'monospace';
  color:  ${props => props.theme.colors.textColor};


`;
//container Butto Side lado direito

export const ContainerButtonSRigth = styled.div`
  border: 2px solid;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
  &:hover {
    background-color: #e4e4e4;
  }
`;
export const ContainerButtonSDadosLeft = styled.div`
  border: 2px solid;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
  &:hover {
    background-color: #e4e4e4;
  }
`;

export const ContainerBtnMnSRigth = styled.div`
  //border: 1px solid;
  //border-color: ${props => props.theme.colors.textColor};
  //border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 5px 2px 5px;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
`;

//container Butto Side lado direito
type TypeSBItensModulo = {
  open?: boolean;
};
export const ContainerItensModulo = styled.div<TypeSBItensModulo>`
  border: 1px solid white;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 0px 5px 0px 10px;
  background: transparent;
  max-height: fit-content;
  display: ${({open}) => open ? 'flex' : 'none' };
  //  display: ${({open}) => open ? 'flex' : 'none' };
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-around;
`;

type TypeSBContainerItensLogon = {
  open?: boolean;
};
export const ContainerItensLogon = styled.div<TypeSBContainerItensLogon>`
  border: 1px solid white;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 0px 5px 0px 10px;
  background: transparent;
  max-height: fit-content;
  display: ${({open}) => open ? 'flex' : 'none' };
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-around;
`;


type PropsItensBntMn = {
  open?: boolean;
};
export const ContainerItensModBntMn = styled.div<PropsItensBntMn>`
  //border: 1px solid red;
  //border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  background: transparent;
  max-height: fit-content;
  display: ${({open}) => open ? 'flex' : 'none' };
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-around;
`;


// ContainerSideButton
export const ContainerSideButton = styled.div`
  border: 2px;
  border-color: red;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: transparent;
  min-height: 45px;
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

export const ButtonSideBarImg = styled.button<{ img?: string }>`
  border: none;
  margin: 2px 5px 2px 5px;
  color: white;
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
//////////////////////////////
// botão para o titulo do submenu
/////////////////////////////

export const ContainerSideOnOffButton = styled.div`
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
    background-color: #e4e4e4;
   }
`;

export const ButtonOnOffImg = styled.button<{ img?: string }>`
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
/////////////////////////////////////////////
/////////////////////////////////////////////
//container Butto Side lado direito a
type PropsMenuSide = {
  open?: boolean;
};
export const ContainerMenuSide = styled.div<PropsMenuSide>`
  margin: 0px 0px 0px 8px;
  padding: 0px 0px 0px 0px;
  min-height: 50px;
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;

  //border: 1px solid;
  //border-color: ${props => props.theme.colors.textColor};
  //border-radius: 5px;

  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', 'Courier', 'monospace';
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;

export const ContainerButtonSLeft = styled.div`
  border: 1px solid;
  //border-color: #ff8040;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 0px 2px 0px 2px;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
  //&:hover {
  //  background-color: #e4e4e4;
  //}
  label {
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 10px;
    font-style: normal;
    font-family: Verdana, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Courier New', 'Courier', 'monospace';
    color:  ${props => props.theme.colors.textColor};
  } 
`;

export const ContainerButtonMnItens = styled.div`
  border: none;
  border-color: #ff8040;
  //border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 0px 2px 0px 2px;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
  //&:hover {
  //  background-color: #e4e4e4;
  //}
  label {
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 10px;
    font-style: normal;
    font-family: Verdana, Tahoma, sans-serif;
    font-weight: bold;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Courier New', 'Courier', 'monospace';
    color:  ${props => props.theme.colors.textColor};
  } 
`;





export const ContainerDivBtnMn = styled.div`
  border: 1px solid ;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 0px 5px 0px 5px;
  background: transparent;
  //font-size: 28px;
  height: 40px;
  width: 40px;
  //max-height: 40px; /* fit-content; */
  display: flex; 
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  &:hover {
    background-color: #e4e4e4;
  }
`;


  
//   border: 1px solid red;
//   border-radius: 5px;
//   padding: 0px 0px 0px 0px;
//   margin: 2px 5px 2px 10px;
//   background: transparent;
//   max-height: left;
//   display: ${props => (props.open ? 'flex' : 'none')};
//   flex-wrap: wrap;
//   align-items: center;
//   align-content: center;
//   justify-content: space-around;
// `;

export const ContainerSideButtonSpan = styled.div`
  border: 1px solid green;
  //border-color: #ffffff;
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: transparent;
  min-height: 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  border-radius: 5px;
  color: #000;
  &:hover {
    background-color: #e4e4e4;
   }
`;
export const ContainerSideButtonSpanLeft = styled.div`
  border: 1px yellow;
  border-color: #ffffff;
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: transparent;
  min-height: 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
  border-radius: 5px;
  color: #000;
  &:hover {
    background-color: #e4e4e4;
   }
`;



// type PropsImgSys = {
//   img?: string;
//   onff?: boolean;
//   onClick?: () => void;
// };
// export const ContainerSideImgMenu = styled.div<PropsImgSys>`
//   border: none;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 10px;
//   background: transparent;
//   background-position: center;
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: pointer;
//   min-height: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
// `;










type PropsBtn = {
  img?: string;
  title?: string;
}
export const ButtonSItenModulo = styled.button<PropsBtn>`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 0px 5px 0px 5px;
  color: red;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', 'Courier', 'monospace';
  background: transparent;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  min-height: 45px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;

