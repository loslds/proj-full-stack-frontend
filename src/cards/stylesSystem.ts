
import styled from 'styled-components';

import btn_def_q_semimg from '../assets/defaut/botao/btn_def_q_semimg.svg'

// inicio do ContentMainSystem 
export const ContainerMainSystem = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 50px;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;
interface PropsContainerCardBoxFlexPage {
  pwidth? : string;
};
export const ContainerMainSystemFlex = styled.div<PropsContainerCardBoxFlexPage>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  width: ${({ pwidth }) => pwidth || '100%'};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;
// fim do ContentMainSystem

// inicio do ContentMainFilter
export const ContainerMainFilter = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 50px;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;

interface PropsContainerFilterlex {
  pwidth? : string;
};
export const ContainerMainFilterFlex = styled.div<PropsContainerFilterlex>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  width: ${({ pwidth }) => pwidth || '100%'};
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: center;
  align-content: center;
`;

export const ContainerHeaderFilter = styled.div`
  border:1px solid red;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  font-size: 16px;
  line-height: 18px;
`;
// fim do ContentMainFilter


export const ContainerSysMainItens = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  width: '100%';
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  font-size: 14px;
`;

export const DivMessageLine = styled.div`
  margin-bottom: 6px;
  font-size: 14px;
`;

interface PropsDivStatus {
  $success?: boolean;
}
export const DivStatus = styled.div<PropsDivStatus>`
  margin-top: 12px;
  font-weight: bold;
  color: ${({ $success }) => ($success ? 'green' : 'red')};
`;

/////////////////////////////
/////// contente para LogoffMaster
interface PropsContainerLogoffMaster {
  pptop? : string;
  ppwidth? : string;
}
export const ContainerLogoffMaster = styled.div<PropsContainerLogoffMaster>`
  top: ${({ pptop }) => pptop || '1%'};
  border: 4px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 40px;
  min-width: ${({ ppwidth }) => ppwidth || '28%'};
  display: flex;
  min-height: 50px;
  flex-wrap: wrap;
  justify-content: center;
  color: ${props => props.theme.colors.textColor};
`;

interface PropsContainerLogoffMasterFlex {
  bordas?: string;
}
export const ContainerLogoffMasterFlex = styled.div<PropsContainerLogoffMasterFlex>`
  border: ${({ bordas }) => bordas || 'none'};
  border-style: double;
  border-radius: 10px;
  border-color: red;
  padding: 0px 0px 0px 0px;
  margin: 5px 5px 5px 5px;
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  color: ${props => props.theme.colors.textColor};
    
  h1, h2, h3, h4, h5 {
    margin: 10px 10px 10px 10px; /* Margem para separar os títulos */
    padding: 0px 0px 0px 0px;
    font-style: normal;
    text-decoration-color: #ff0000ff;
    color: ${props => props.theme.colors.textColor};
  }
  label {
    font-size: 12px;
    line-height: 12px;
    //font-style: normal;
    text-decoration: underline 0.5px;
    color: ${props => props.theme.colors.textColor};
  }
`;

export const ContainerPanelImgBetween = styled.div`
  border: none; 
  padding: 0px auto;
  margin: 0px auto;
  min-height: 40px;
  width: '100%';
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  color: ${props => props.theme.colors.textColor};
`;

interface PropsContainerPanellImg {
  pxheight?: string;
  pxwidth?: string;
  img?: string;
  onClick?: () => void;
};
export const ContainerPanelImg = styled.div<PropsContainerPanellImg>`
  border: 6px silver groove ;
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  min-height: ${({ pxheight }) => pxheight || '10%'};// min-height: 130px;
  width: ${({ pxwidth }) => pxwidth || '10%'}; // width: 150px;
  display: flex;
  flex-flow: wrap;
  justify-content: center; /*space-around;*/
  align-content: center;
  align-items: center;
  background-color: transparent;
  background-image: url(${ (  { img } ) => img || btn_def_q_semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  color: black;
`;

interface PropsContainerPanellImg {
  isEnabled?: boolean;
};
export const MasterInput = styled.input.attrs({ type: 'password' })`
  margin: 0px 10px 0px 10px;
  padding: 8px 12px;
  max-width: 100%;
  font-size: 12px;
  line-height: 14px;
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
//////////////////////////////////////////////
interface PropsContainerMainCollumMaster {
  open?: boolean;
  width? : string;
  height? : string;
};
export const ContainerMainCollumMaster = styled.div<PropsContainerMainCollumMaster>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 10px 0px;
  min-height: ${({ height }) => height || '30%'};
  width: ${({ width }) => width || '100%'};
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
`;
///////////////////
export const ContainerMainTitleMaster = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 0px 0px;
  min-height: 25px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};

  h1, h2, h3, h4, h5 {
    margin: 10px 10px 10px 10px; /* Margem para separar os títulos */
    padding: 0px 0px 0px 0px;
    font-style: normal;
    text-decoration-color: #ff0000ff;
    color: ${props => props.theme.colors.textColor};
  }
  label {
    font-size: 12px;
    line-height: 12px;
    font-style: normal;
    text-decoration: underline 0.7px;
    color: ${props => props.theme.colors.textColor};
  }
`;
//////////////////////////////
export const ContainerPanelButtonMaster = styled.div`
  border: none; 
  padding: 0px auto;
  margin: 0px auto;
  min-height: 40px;
  width: '100%';
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
`;
/////////////////////
export const ContainerButtonMasterImg = styled.div`
  border: 1px;
  border-style: solid;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 30px;
  height: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
  &:hover {
    background-color: #c0c0c0;
   }
`;
// Botão Menu Principal
interface PropsButtonMasterImg {
  img?: string;
}
export const ButtonMasterImg = styled.button<PropsButtonMasterImg>`
  border: none;
  margin: 5px 5px 5px 5px;
  color:  ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ img }) => img || btn_def_q_semimg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
  outline: none;
  min-width: 35px;
  min-height: 35px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;