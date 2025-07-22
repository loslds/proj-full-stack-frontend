import styled from 'styled-components';

import semimg from "../../assets/svgs/semimg.svg"

export const ContainerSBMain = styled.div`
  border: 2px solid red;
  margin: 10px 10px 10px 10px;
  padding: 0px 0px 0px 0px;
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  font-family: 'Courier New', 'Courier', 'monospace';
  color: ${props => props?.theme?.colors?.textColor || 'inherit'};
`;



//container Butto Side lado direito
export const ContainerButtonSRigth = styled.div`
  border: 2px solid;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 10px 2px 0px 2px;
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
//container Butto Side lado esquero
export const ContainerButtonSLeft = styled.div`
  border-left: 3px solid red ;
  padding: 0px 0px 0px 0px;
  margin: 2px 5px 2px 5px;
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
/// rotina do botão para menu principal

// ContainerSideButton
export const ContainerSideButton = styled.div`
  border: 2px;
  border-color: red;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 0px 5px 0px 5px;
  background: transparent;
  width: 40px;
  height: 40px;
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
// Botão Menu Principal
export const ButtonSideBarImg = styled.button<{ img?: string }>`
  border: none;
  margin: 5px 5px 5px 5px;
  color:  ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
  outline: none;
  width: 40px;
  min-height: 37px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
//////////////////////////////
// Rotina para botôes Itens do Menu Principal
// Container para botões dos Itens 
type PropsContainerButtonMnItens = {
  open?: boolean;
};
export const ContainerButtonMnItens = styled.div<PropsContainerButtonMnItens>`
  border-color: ${props => props.theme.colors.textColor};
  border-left: 4px solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 2px 0px 2px;
  background: transparent;
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
  color:  ${props => props?.theme?.colors?.textColor};
  `;

//container Butto Side lado esquero
// usa o mesmo div











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
export const ContainerButtonMn = styled.div`
  border: 5px solid red ;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 0px 2px 10px 2px;
  background: transparent;
  font-size: 18px;
  min-height: 40px;
  display: flex; 
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const ButtonItemMn = styled.button`
  border: 2px;
  border-color: ${props => props.theme.colors.primary};
  border-radius: 3px;
  margin: 2px 5px 2px 15px;
  color:  ${props => props.theme.colors.textColor};
  font-size: 18px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  min-width: 37px;
  display: flex;
  flex-flow: nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  &:active {
    border: 2px solid; 
    border-radius: 3px;
    margin: 2px 5px 2px 15px;
    color:  ${props => props.theme.colors.secundary};
  }
`;








///////////////////////////////////////////////


//container Butto Side lado direito
interface PropsContainerSBItensModulo {
  open?: boolean;
};
export const ContainerSBItensMenu = styled.div<PropsContainerSBItensModulo>`
  border: 1px solid;
  border-color:  ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  background: transparent;
  max-height: fit-content;
  display: ${({open}) => open ? 'flex' : 'none' };
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  color:  ${props => props.theme.colors.textColor};
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
  border: 1px solid;
  border-radius: 10px;
  margin: 0px 0px 0px 8px;
  padding: 0px 0px 0px 0px;
  min-height: 50px;
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Courier New', 'Courier', 'monospace';
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
  
`;

export const ContainerButtonSMnLeft = styled.div`
  border: 1px solid;
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

  
export const ContainerDivBtnMn = styled.div`
  border: 3px solid ;
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

/////////////////////////////////////////////
interface PropsContainerMainDropdownUl {
  pxheight?: string;
  pxwidth?: string;
  label?: string;
}

export const ContainerMainDropdownUl = styled.div<PropsContainerMainDropdownUl>`
  border: 2px solid;
  border-radius: 10px;
  border-color: ${(props) => props.theme.colors.textColor};
  padding: 0px;
  margin: 5px 0px;
  min-height: ${({ pxheight }) => pxheight || '30px'};
  width: ${({ pxwidth }) => pxwidth || '100%'};
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: left;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  background-color: #007bff;
  font-size: 20px;
  line-height: 22px;
  font-family: 'Courier New', Courier, monospace;

  ul {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 5px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    list-style: none;
    padding: 0;
    min-width: 150px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    z-index: 1000;
    font-size: 20px;
    line-height: 22px;
    font-family: 'Courier New', Courier, monospace;
    li {
      padding: 10px;
      cursor: pointer;
      border-bottom: 1px solid #ddd;
      position: relative;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #f5f5f5;
      }

      ul {
        position: absolute;
        top: 0;
        left: 100%;
        margin-left: 5px;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 5px;
        list-style: none;
        padding: 0;
        min-width: 150px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        pointer-events: none;
        z-index: 2000;
      }

      &:hover > ul {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }
    }
  }
`;
interface PropsContainerButtonDropdown {
  pxheight?: string;
}
export const ContainerButtonDropdown = styled.div<PropsContainerButtonDropdown>`
  border: 1px solid;
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  min-height: ${({ pxheight }) => pxheight || '30px'};
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 22px;
  font-family: 'Courier New', Courier, monospace;
  &:hover, &:active {
    border-color: #fc0303;
  }
`;

export const ButtonDropdown = styled.button`
  border: none;
  border-radius: 5px;
  margin: 2px 5px 2px 5px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 20px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: #007bff;
  cursor: pointer;
  outline: none;
  height: 30px;
  min-width: 30px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
  &:hover,
  &:active {
    border-color: #fc0303;
  }
`;

interface PropsMenuSB {
  open: boolean;
}

export const ContainerMenuSB = styled.div<PropsMenuSB>`
  //position: fixed;
  //top: 0;
  //right: 0;
  //width: 180px;
  min-height: 50px;
  background-color: white;
  border-left: 2px solid #ccc;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  padding: 10px 2x 10px 2px;
  transition: transform 0.3s ease-in-out;
  font-size: 20px;
  line-height: 22px;

  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  display: ${(props) => (props.open ? "block" : "none")};
`;

/////////////////////////////////////





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

/////////////////////////////////////////////
