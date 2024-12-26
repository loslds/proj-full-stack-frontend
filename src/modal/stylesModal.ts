
import styled from 'styled-components';

import semimg from '../assets/svgs/semimg.svg';

export const ContainerModalCenter = styled.div`
  border: none; //1px solid blue;
  padding: 0px 5px 0px 0px;
  margin: 2px 10px 2px 10px;
  width: 100%;
  min-height: auto;
  overflow-y: auto;
  display: flex row;
  flex-wrap: wrap;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  background-color: rgba(211,211,211,.3);
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
`;
//*
export const ContainerTextoModulos = styled.div`
  border: none; // solid red;
  padding: 0px 25px 0px 0px;
  margin: 2px 10px 2px 10px;
  min-height: 40px;
  width: 100%;
  overflow-y: auto;
  display: flex row;
  flex-wrap: wrap;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
`;
//*
export const ContainerModalAround = styled.div`
  border: 0px ;
  height: 100%;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  background-color: rgba(211,211,211,.3);
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  color: black;
`;
//*
// modal
export const Content = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 100vh;
  position: absolute;
  border: 0px;
  top: 0px;
  left: 0px;
  z-index: 1000;
  color: white;
  background-color: rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: normal;
  font-family: 'Courier New', Courier, monospace;
  h1,
  h2,
  h3,
  h4 {
    margin: 2px 2px 2px 2px;
    padding: 2px 2px 2px 2px;
    text-decoration-color: #727272;
  }
  h1 {
    text-decoration: 3px underline;
  }
  h2 {
    text-decoration: 2px underline;
  }
  h3 {
    text-decoration: 1.5px underline;
  }
  h4 {
    text-decoration: 1px underline;
  }
  li {
    list-style-type: none;
    margin-left: 15px;
  }
`;
//*
interface PropsContainerModal {
  ptop?: string;
  pheight?: string;
  pwidth?: string;
  onClick?: () => void;
};
export const ContainerModal = styled.div<PropsContainerModal>`
  border: 3px double #727272;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 8px 10px 8px 10px;
  color: black;
  top: ${({ ptop }) => ptop ||'62px'};
  position: fixed;
  width: ${({ pwidth }) => pwidth || '66.3%'};
  height: ${({ pheight }) => pheight || '85%'};
  min-height: auto;
  overflow-y: auto;
  display: flex row;
  flex-wrap: nowrap;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  background-color: #fcfceb;
`;
//*
// content card modal
interface PropsContainerCard {
  id?: string;
}
export const ContainerCard = styled.div<PropsContainerCard>`
  border-bottom: 3px double #727272;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 30px;
  background-color: #e3e3e3;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 16px;
  font-style: normal;
  color: black;
`;
//*
export const ContainerCardFlex = styled.div`
  border: 3px silver groove ;
  height: 100%;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  background-color: transparent; //* black;*/
  display: flex;
  flex-flow: wrap;
  justify-content: center; /*space-around;*/
  align-content: center;
  align-items: center;
  color: black;
`;
//*
interface PropsContainerModalImg {
  pminheight?: string;
  pwidth?: string;
  img?: string;
  onClick?: () => void;
};
export const ContainerModalImg = styled.div<PropsContainerModalImg>`
  border: 6px silver groove ;
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  min-height: ${({ pminheight }) => pminheight || '10%'};// min-height: 130px;
  width: ${({ pwidth }) => pwidth || '10%'}; // width: 150px;
  display: flex;
  flex-flow: wrap;
  justify-content: center; /*space-around;*/
  align-content: center;
  align-items: center;
  background-color: transparent;
  background-image: url(${ (  { img } ) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  color: black;
`;
//*
export const ContainerModalTitle = styled.div`
  border: none; /*1px green dashed;*/
  padding: 0px auto;
  margin: 0px auto;
  min-height: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: black;
`;
//*
///////////////// fim CardModal



interface PropsButtonModal {
  img?: string
}
export const ButtonImgModal = styled.button<PropsButtonModal>`
  border: none; /*1 red solid;*/
  padding: 0px 0px 0px 0px;
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
  min-height: 35px;
  width: 35px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
///

export const ContainerModalColumn = styled.div`
  border: none;
  height: 100%;
  width: 100%;
  padding: 10px;
  margin: 0px;
  background-color: transparent; 
  display: flex;
  flex-direction: column;  /* Garantir que os itens sejam dispostos em coluna */
  flex-wrap: wrap;
  text-align: left; /* Alinhar o texto à esquerda */
  font-size: 16px;
  font-style: normal;
  color: #000000; /* Garantir que o texto tenha a cor definida */
  
  h1, h2, h3, h4, h5 {
    margin: 10px 10px 10px 10px; /* Margem para separar os títulos */
    padding: 0px 0px 0px 0px;
    //color: #fff;
    font-style: normal;
    text-decoration-color: #727272;
  }
  
  h1 {
    font-size: 20px;
    line-height: 20px;
    text-decoration: underline 3px;
  }
  
  h2 {
    font-size: 18px;
    line-height: 18px;
    text-decoration: underline 2px;
  }
  
  h3 {
    font-size: 16px;
    line-height: 16px;
    text-decoration: underline 1.5px;
  }
  
  h4 {
    font-size: 14px;
    line-height: 14px;
    text-decoration: underline 1px;
  }
  
  h5 {
    font-size: 12px;
    line-height: 12px;
    text-decoration: underline 0.5px;
  }
  
  p {
    margin: 0px 0px 10px 0px;  /* Margem para separar os parágrafos */
    padding: 0px;
  }

  link {
    font-size: 20px;
    line-height: 20px;
    font-style: normal;

  }
`;
///////////////
interface PropsContainerModalErro {
  pminheight?: string;
  pwidth?: string;
};
export const ContainerModalErro = styled.div<PropsContainerModalErro>`
  border: 0px;
  padding: 0px 5px 0px 0px;
  margin: 2px 10px 2px 10px;
  min-height: ${({ pminheight }) => pminheight || '10%'};// min-height: 130px;
  width: ${({ pwidth }) => pwidth || '10%'}; // width: 150px;
  overflow-y: auto;
  display: flex row;
  flex-wrap: wrap;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
`;
///////////////////////////////////////////////////




// export const DivPanel = styled.div`
//   border: 0px;
//   padding: 0px 0px 0px 0px;
//   margin: 1px 0px 1px 0px;
//   height: 3px;
//   width: 100%;
//   display: flex;
//   background-color: #9c9c9c;
// `;
// /////////////// inicio MainModal



// type PropsModulosSys = {
//   ptop?: string;
//   pheight?: string;
//   pwidth?: string;
//   onClick?: () => void;
// };
// export const ContainerModulosSys = styled.div<PropsModulosSys>`
// border: 2px red solid;
// padding: 0px 0px 0px 0px;
// margin: 0px 0px 0px 0px;
// color: black;
// top: ${({ ptop }) => ptop || '62px'};
// position: fixed;
// width: ${({ pwidth }) => pwidth || '66.3%'};
// // height: ${({ pheight }) => pheight || '87%'};
// display: flex row;
// flex-wrap: nowrap;
// flex-direction: center;
// justify-content: center;
// align-items: center;
// background-color: #fcfceb;
// `;

// ///////////////////////////////////////////////////


// export const ContainerModalImgModulo = styled.div`
//   border: none;
//   padding: 0px 0px 0px 0px;
//   margin: 5px 5px 5px 10px;
//   width: 97%;
//   display: flex row;
//   flex-wrap: wrap;
//   flex-direction: center;
//   justify-content: space-around;
//   align-items: center;
//   background-color: transparent;
//   font-size: 12px;
//   font-family: Verdana, Geneva, Tahoma, sans-serif;
//   font-style: normal;
// `;

// /////////////// fim MainModal
// /////////////// inicio CardMocal

// ///////////////// inicio TitleModal
// ////////////////// fim TitleModal

// ///////////////// inicio ButtonModal
// export const ContainerButtonModal = styled.div`
//   border: 0px;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 10px 0px 10px;
//   min-width: 15%;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: right;
//   align-items: center;
//   align-content: center;
//   background-color: transparent;
//   color: ${props => props.theme.colors.textColor};
//   font-size: 12px;
//   font-weight: bold;
//   font-family: 'Courier New', Courier, monospace;
// `;

// ////////////////////////////////////////
// type TypeContainerModalButtonImgCard = {
//   ptop?: string;
//   pminheight?: string;
//   pwidth?: string;
//   onClick?: () => void;
//   ishlp?: boolean;
// };
// export const ContainerModalButtonImgCard = styled.div<TypeContainerModalButtonImgCard>`
  
//   top: ${({ ptop }) => ptop ||  '0px'};
//   border: 6px silver groove ;
//   padding: 0px 0px 0px 0px;
//   margin: 5px 10px 5px 10px;
//   min-height: ${({ pminheight }) => pminheight || '45px'};
//   width: ${({ pwidth }) => pwidth || '45px'};
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center; 
//   //align-content: center;
//   align-items: center;
//   background-color: transparent;
//   color: ${props => props.theme.colors.textColor};
//   cursor: pointer;
//   outline: none;
// `;
// type TypeButtonModalImgCard ={
//   img?: string;
//   pxminheight?: string;
//   pxwidth?: string;
// }
// export const ButtonModalImgCard = styled.button<TypeButtonModalImgCard>`
//   border: none; /*1 red solid;*/
//   padding: 0px 0px 0px 0px;
//   margin: 2px 5px 2px 5px;
//   color: white;
//   font-size: 12px;
//   font-weight: bold;
//   font-family: 'Courier New', Courier, monospace;
//   background-color: transparent;
//   background-image: url(${({ img }) => img || semimg});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   cursor: pointer;
//   outline: none;
//   min-height: ${({ pxminheight }) => pxminheight || '35px'};// min-height: 130px;
//   width: ${({ pxwidth }) => pxwidth || '35px'}; // width: 150px;
//   display: flex;
//   flex-flow: nowrap;
//   justify-content: center;
//   align-items: center;
// `;

// // ++++++++++++++++++++++++++++++++++

// export const FFlexCard = styled.div`
//   border: none;
//   min-height: 40px;
//   width: 100%;
//   padding: 2px 5px 2px 5px;
//   margin: 0px 0px 0px 0px;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: space-around;
//   align-content: center;
//   align-items: center;
//   background-color: transparent;
//   div {
//     padding: 0px 5px 0px 5px;
//     margin: 0px 0px 0px 0px;
//   }
// `;

// export const CCardTitle = styled.div`
//   padding: 0px auto;
//   margin: 0px auto;
//   min-width: 85%;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   color: white;
//   font-size: 18px;
// `;

// export const CContainerButton = styled.div`
//   padding: 0px auto;
//   margin: 0px auto;
//   min-width: 6%;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: flex-end;
//   align-items: center;
//   align-content: center;
// `;

// export const BButtonModal = styled.button<{ img?: string }>`
//   margin: 2px 4px 2px 4px;
//   padding: 2px auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   width: 30px;
//   height: 30px;
//   cursor: pointer;
//   outline: none;
//   background-color: transparent;
//   background-image: url(${({ img }) => img || semimg});
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
// `;


// export const ContentDivOpc = styled.div`
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   border: 0px;
//   top: 0px;
//   left: 0px;
//   z-index: 1100;
//   color: white;
//   background-color: rgba(0,0,0,0.1);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 12px;
//   font-weight: normal;
//   font-family: 'Courier New', Courier, monospace;
//   h1,
//   h2,
//   h3,
//   h4,
//   h5 {
//     margin: 0px 5px 0px 5px;
//     padding: 0px 0px 0px 5px;
//     color: #fff;
//     font-style: normal;
//   }
//   h1 {
//     font-size: 20px;
//     line-height: 22px;
//   }
//   h2 {
//     font-size: 18px;
//     line-height: 20px;
//   }
//   h3 {
//     font-size: 16px;
//     line-height: 18px;
//   }
//   h4 {
//     font-size: 12px;
//     line-height: 14px;
//   }
//   h5 {
//     font-size: 10px;
//     line-height: 12px;
//   }
//   ul {
//     margin-left: 10px ;
//   }
//   li {
//     margin-left: 20px ;
//   }
// `;


// type PropsDivModalMain = {
//   open?: boolean;
//   ptop?: string;
//   pleft?: string;
//   pheight?: string;
//   pwidth?: string;
// };
// export const ContainerDivOpcModal = styled.div<PropsDivModalMain>`
//   border: 2px #727272 solid;
//   border-radius: 10px;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 2px 0px 5px;
//   color: black;
//   top: ${({ ptop }) => ptop || '62px'};
//   left: ${({ pleft }) => pleft || '20%'};
//   position: relative;
//   width: ${({ pwidth }) => pwidth || '66.3%'};
//   height: ${({ pheight }) => pheight || '87%'};
//   display: ${props => ( props.open ? 'flex row' : 'none')};
//   flex-wrap: nowrap;
//   flex-direction: center;
//   justify-content: center;
//   align-items: center;
//   background-color: white;
// `;
// export const ContainerDivOpcTexto = styled.div`
//   border: 1px black dashed;
//   padding: 0px 0px 0px 0px;
//   margin: 5px 5px 5px 5px;
//   width: 98%;
//   // height: 85%;
//   display: flex row;
//   flex-wrap: wrap;
//   flex-direction: center;
//   justify-content: center;
//   align-items: center;
//   background-color: transparent;
//   font-size: 12px;
//   font-family: Verdana, Geneva, Tahoma, sans-serif;
//   font-style: normal;
// `;
// export const ContainerDivOpcTitle = styled.div`
//   border: 1px green dashed;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   min-width: 100%;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
// `;
// /////////////////////////////
// // Heard do Modal com Buttom Menu
// ///////////////////////////
// export const ContainerHeardImgMain = styled.div`
//   border: 3px silver solid ;
//   height: 100%;
//   width: 100%;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   background-color: transparent; //* black;*/
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
// `;


// type PropsModalModal = {
//   ptop?: string;
//   pminheight?: string;
//   pwidth?: string;
//   img?: string;
//   onClick?: () => void;
// };
// export const ContentModalModal = styled.div<PropsModalModal>`
//   border: 1px red solid ;
//   padding: 0px 0px 0px 0px;
//   margin: 5px 10px 5px 10px;
//   min-height: ${({ pminheight }) => pminheight || '30%'};
//   width: ${({ pwidth }) => pwidth || '66.3%'};
//   display: flex;
//   flex-flow: wrap;
//   justify-content: space-around;
//   align-content: center;
//   align-items: center;
//   background-color: transparent;
// `;

// type PropsModalMenu = {
//   img?: string;
//   sizer?: string;
//   onClick: () => void;
// };
// export const ButtonModalMenu = styled.button<PropsModalMenu>`
//   border: none;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   color: white;
//   font-size: 12px;
//   font-weight: bold;
//   font-family: 'Courier New', Courier, monospace;
//   background-color: transparent;
//   background-image: url(${({ img }) => img || semimg});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   cursor: pointer;
//   outline: none;
//   min-height: ${({ sizer }) => sizer || '100px'};
//   width: ${({ sizer }) => sizer || '100px'};
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
// `;

// type PropsContainerDivModalItemsMenu = {
//   open?: boolean;
// };
// export const ContainerDivModalItemsMenu = styled.div<PropsContainerDivModalItemsMenu>`
//   border-left: 3px red solid;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 10px;
//   min-height: 50px;
//   width: 200px;
//   background-color: transparent; //* black;*/
//   display: ${props => ( props.open ? 'flex row' : 'none')};
//   flex-flow: wrap;
//   justify-content: center; /*space-around;*/
//   align-content: center;
//   align-items: center;
//   font-size: 12px;
//   font-family: Verdana, Geneva, Tahoma, sans-serif;
//   font-style: normal;
// `;

// export const ContainerActionItemDivMenu = styled.div`
//   border: 1px silver solid;
//   min-height: 38px;
//   width: 100%;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center;/* space-between;*/
//   align-content: center;
//   align-items: center;
//   background-color: #baeeff;
//   :hover {
//     border: 1px blue solid;
//     //background-color: #00c0ff;
//   }
//  `;
// type PropsContainerActClickModalItemMenu = {
//   onClick?: () => void;
//   path?: string;
// };
// export const ContainerActClickModalItemMenu = styled.div<PropsContainerActClickModalItemMenu>`
// border: none; /*3px yellow solid;*/
// min-height: 38px;
// width: 100%;
// padding: 0px 0px 0px 0px;
// margin: 0px 0px 0px 0px;
// display: flex;
// flex-flow: wrap;
// justify-content: space-between;
// align-items: center;
// `;

// type PropsContainerCenterImgDiv = {
//   img? : string;
// };

// export const ContainerCenterImgDiv = styled.div<PropsContainerCenterImgDiv>`
//   border: none; /*1px green solid;*/
//   padding: 0px 0px 0px 0px;
//   margin: 2px 0px 0px 2px;
//   width: 19%;
//   min-height: 35px;
//   direction: left;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   font-size: 14px;
//   font-style: normal;
//   background-color: transparent;
//   background-image: url(${({ img }) => img || semimg});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
// `;

// export const ContainerCenterDiv = styled.div`
//   border: none;/*1px yellow solid;*/
//   padding: 0px 0px 0px 0px;
//   margin: 2px 0px 0px 2px;
//   width: 55%;
//   min-height: 30px;
//   background-color: transparent;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   font-size: 14px;
//   font-style: normal;
// `;

// export const ButtonItemDivModalMenu = styled.button`
//   border: none;/*1px red solid;*/
//   margin: 0px 0px 0px 0px;
//   padding: 0px 0px 0px 0px;
//   width: 100%;
//   min-height: 35px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   cursor: pointer;
//   outline: none;
//   color: black;
//   font-size: 12px;
//   font-weight: bold;
//   font-family: 'Courier New', Courier, monospace;
//   background-color: transparent;
// `;



// ///////////////////////////////////// erros
// export const ContentInfoErro = styled.div`
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   width: 100%;
//   height: 100vh;
//   position: absolute;
//   border: 0px;
//   top: 0px;
//   left: 0px;
//   z-index: 1000;
//   color: white;
//   background-color: rgba(0,0,0,0.2);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 12px;
//   font-weight: normal;
//   font-family: 'Courier New', Courier, monospace;
// `;

// type TypeContainerInfoErroModal = {
//   ptop?: string;
//   pheight?: string;
//   pwidth?: string;
//   onClick?: () => void;
// };
// export const ContainerInfoErroModal = styled.div<TypeContainerInfoErroModal>`
//   border: 5px double;
//   border-color: #e30005;
//   border-radius: 15px;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 10px 0px 10px;
//   background-color: #efef94;
//   color: #0000ff;
//   top: ${({ ptop }) => ptop || '62px'};
//   position: fixed;
//   max-width: ${({ pwidth }) => pwidth || '66.3%'};
//   height: ${({ pheight }) => pheight || '90%'};
//   overflow-y: auto;
//   display: flex row;
//   flex-wrap: nowrap;
//   flex-direction: center;
//   justify-content: center;
//   align-items: center;
// `;
// //////////////////////////

// export const ContainerCardInfoModalHeader = styled.div`
//   top: 0;
//   border-bottom: 5px double;
//   border-color: #e30005;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   width: 100%;
//   min-height: 30px;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   background-color: #040404;
// `;

// export const ContainerCardInfoModalFooter = styled.div`
//   bottom: 0;
//   border-top: 5px double;
//   border-color: #e30005;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   width: 100%;
//   min-height: 30px;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   background-color: #040404;
// `;

// export const ContainerCardInfoModalFlex = styled.div`
//   border: 0;
//   height: 100%;
//   width: 100%;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   background-color: transparent; //* black;*/
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center; /*space-around;*/
//   align-content: center;
//   align-items: center;
//   color: #000000;
//   font-size: 16px;
//   font-style: normal;
  
//   h1,
//   h2,
//   h3,
//   h4,
//   h5 {
//     margin: 0px 5px 0px 5px;
//     padding: 0px 0px 0px 5px;
//     color: #fff;
//     font-style: normal;
//     text-decoration-color: #727272;
//   }
//   h1 {
//     font-size: 20px;
//     line-height: 20px;
//     text-decoration: 3px underline;
//   }
//   h2 {
//     font-size: 18px;
//     line-height: 18px;
//     text-decoration: 2px underline;
//   }
//   h3 {
//     font-size: 16px;
//     line-height: 16px;
//     text-decoration: 1.5px underline;
//   }
//   h4 {
//     font-size: 14px;
//     line-height: 14px;
//     text-decoration: 1px underline;
//   }
//   h5 {
//     font-size: 12px;
//     line-height: 12px;
//     text-decoration: 0.5px underline;
//   }
// `;


// ///////////////// inicio TitleModal
// export const ContainerInfoErroModalTitle = styled.div`
//   border: 0px; 
//   padding: 0px auto;
//   margin: 0px auto;
//   min-height: 30px;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   color: #000000;
// `;
