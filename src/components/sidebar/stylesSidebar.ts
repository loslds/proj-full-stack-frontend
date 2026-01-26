import styled from 'styled-components';

import semimg from "../../assets/svgs/btn_def_q_semimg.svg"
import React from 'react';

export const ContainerSBMain = styled.div`
  //border: 2px solid red;
  //border: none;
  margin: 5x 5px 5px 5px;
  padding: 0px 0px 0px 0px;
  min-height: 45px;
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
//container Butto Side lado esquero
export const ContainerButtonSLeft = styled.div`
  border-left: 3px solid violet ;
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
// botão defaul para Label como titulo interno
export const ContainerSideButtonLabel = styled.div`
  border: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
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
export const ButtonSideBarLabel = styled.button`
  border: none;
  margin: 5px 5px 5px 5px;
  color:  ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;


/// rotina do botão para menu principal

// ContainerSideButton
export const ContainerSideButton = styled.div`
  //border: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  background: transparent;
  width: 50px;
  height: 50px;
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
  min-width: 40px;
  min-height: 40px;
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
type TypeContainerSBItensButtonOnOff = {
  open?: boolean;
}
export const ContainerSBItensButtonOnOff = styled.div<TypeContainerSBItensButtonOnOff>`
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  border-radius: 5px;
  background: transparent;
  display: ${({open}) => open ? 'flex' : 'none' };
  flex-flow: row wrap;
  justify-content: left;
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
  border: 2px;
  border-style: solid;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin:  8px 10px 10px 10px;
  background: transparent;
  font-size: 20px;
  height: 40px;
  display: flex; 
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const ButtonItemMn = styled.button`
  border: 2px;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 0px 2px 10px 2px;
  color:  ${props => props.theme.colors.textColor};
  font-size: 20px;
  font-weight: bold;
  font-family: 'Courier', monospace;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  height: 40px;
  display: flex;
  //flex-wrap: nowrap;
  flex-flow: nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
`;


////////////==================
type TypeContainerSideButtonItem = {
  isbrder?: boolean;
};
export const ContainerSideButtonItem = styled.div<TypeContainerSideButtonItem>`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border: 1px;
  border-style: ${props => (props.isbrder ? 'solid' : 'none')};
  border-radius: 10px;
  border-color: red;
  //border-color: ${props => props.theme.colors.textColor};
  background: transparent;
  display: 'flex';
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
  color:  ${props => props?.theme?.colors?.textColor};
  `;

type TypeButtomSBButtonItem = {
  isborder?: boolean;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ButtomSBButtonItem = styled.button<TypeButtomSBButtonItem>`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border: 2px;
  border-style: ${props => (props.isborder ? 'solid' : 'none')};
  border-radius: 10px;
  border-color: ${props => props.theme.colors.textColor};
  margin: 5px 5px 5px 5px;
  color:  ${props => props.theme.colors.textColor};
  font-size: 20px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #91a888;
   }

`;






///////////////////////////////////////////////


//container Butto Side lado direito
interface PropsContainerSBItensModulo {
  open?: boolean;
};
export const ContainerSBItensMenu = styled.div<PropsContainerSBItensModulo>`
  border: 1px solid blueviolet;
  border: none;
  border-color:  ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 5px 0px 5px;
  margin: 5px 10px 5px 10x; 
  background: transparent;
  min-height: 48px;
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
  max-height: 50px;
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
  padding: 0px 10px 0px 10px;
  margin: 5px 10px 5px 10px;
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
  background-color: transparent;
  font-size: 20px;
  line-height: 22px;
  font-family: 'Courier New', Courier, monospace;

  ul {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 5px;
    background-color: #7ca7f5;
    border: 1px solid #3e3e3f;
    border-radius: 5px;
    list-style: none;
    padding: 0;
    min-width: 200px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.8);
    z-index: 1000;
    font-size: 20px;
    line-height: 22px;
    font-family: 'Courier New', Courier, monospace;
    li {
      padding: 10px;
      cursor: pointer;
      border-bottom: 1px solid #918e8e;
      position: relative;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: #e05252;
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
        box-shadow: 0 2px 5px rgba(0,0,0,0.8);
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
  background-color: transparent;
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
  /* border: 1px gree solid;
  border-radius: 5px;
  margin: 2px 5px 2px 5px; */
  color: ${(props) => props.theme.colors.textColor};
  font-size: 20px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;

  min-height: 50px;
  background-color: transparent;

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
