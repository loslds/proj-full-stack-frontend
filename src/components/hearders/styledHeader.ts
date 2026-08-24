import styled from "styled-components";

import semimg from '../../assets/defaults/btn/btn_def_q_default.svg';



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
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
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
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
`;

/////////////////////////////////////////////////
// Container imagem Logo das paginas //
export const ContainerHearderImgLogo = styled.div`
  border: none;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 7px 7px 7px 7px;
  background: #fff;
  display: flex;
  justify-content: left;
  align-items: center;
  align-content: center;
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
`;
// Imagem do Botão Logo Pagina
interface PropsButtonHearderLogo  {
  $imgbtnlogo?: string;
}
export const ButtonHearderImgLogo = styled.button<PropsButtonHearderLogo>`
  border: none;
  margin: 0px 0px 0px 0px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  cursor: pointer;
  outline: none;
  width: 120px;
  height: 60px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
  background-image: url(${({ $imgbtnlogo }) => $imgbtnlogo || semimg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

///////////////////////////////////////////////////
// constitue no ContentHeaderTituloPg
// Container CENTRO (Titulo da Pagina )
export const ContainerHeaderTitle = styled.div`
  border: none; 
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  min-height: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
`;
///////////////////////////////////////////////////
// constitue no ContentHeaderBtnImgHlpPg
// Conteiner do Heard botão help das paginas
export const ContainerHeaderBtnImgHlpPg = styled.div`
  border: none;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  min-height: 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
  &:hover {
    background-color: #e4e4e4;
   }
`;
// Botão do Heard botão help das paginas
interface PropsButtonHeaderImgHlpPg {
  $imgbtnhlppg?: string;
}
export const ButtonHearderImgHlpPg = styled.button<PropsButtonHeaderImgHlpPg>`
  border: none;
  margin: 2px 5px 2px 5px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ $imgbtnhlppg }) => $imgbtnhlppg || semimg});
  background-repeat: no-repeat;
  background-size: contain;
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
////////////////////////////////////////////////////////
// constitue no ContentHeaderBtnImgLoginOn
// Container do Header — botão Login
export const ContainerHeaderBtnImgLoginOn = styled.div`
  border: none;
  border-radius: 5px;
  padding: 0;
  margin: 2px;
  min-height: 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  &:hover {
    background-color: #e4e4e4;
  }
`;
// Botão do Heard botão Login (pode ficar disabled quando estiver logado com senha master
interface PropsButtonHeaderImgLoginOn {
 $imgbtnloginon?: string;
}
// Botão do Header — Login
export const ButtonHeaderImgLoginOn =
  styled.button<PropsButtonHeaderImgLoginOn>`
  border: none;
  margin: 2px 5px 2px 5px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ $imgbtnloginon }) => $imgbtnloginon || semimg});
  background-repeat: no-repeat;
  background-size: contain;
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
////////////////////////////////////////////////////////////////////
// constitue no ContentHeaderBtnImgResgate
// Conteiner do Heard botão Resgate das paginas
export const ContainerHeaderBtnImgResgate = styled.div`
  border: none;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  min-height: 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
  &:hover {
    background-color: #e4e4e4;
   }
`;
// Botão do Heard botão Resgate das paginas
interface PropsButtonHeaderImgResgate {
  $imgbtnresgate?: string;
}
export const ButtonHeardImgResgate = styled.button<PropsButtonHeaderImgResgate>`
  border: none;
  margin: 2px 5px 2px 5px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ $imgbtnresgate }) => $imgbtnresgate || semimg});
  background-repeat: no-repeat;
  background-size: contain;
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
////////////////////////////////////////////////////////////////////
// constitue no ContentHeaderBtnImgHome
// Conteiner do Heard botão Home das paginas
export const ContainerHeaderBtnImgHome = styled.div`
  border: none;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  min-height: 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
  &:hover {
    background-color: #e4e4e4;
   }
`;
// Botão do Heard botão Resgate das paginas
interface PropsButtonHeaderImgHome {
  $imgbtnhome?: string;
}
export const ButtonHeardImgHome = styled.button<PropsButtonHeaderImgHome>`
  border: none;
  margin: 2px 5px 2px 5px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ $imgbtnhome }) => $imgbtnhome || semimg});
  background-repeat: no-repeat;
  background-size: contain;
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

/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////


// Botão do Heard botão Logoff Master das paginas
interface PropsContainerHeaderBtnImgLogoffMaster {
  $masteroff?: boolean;
}
export const ContainerHeaderBtnImgLogoffMaster = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "$masteroff",
})<PropsContainerHeaderBtnImgLogoffMaster>`
  border: none;
  border-color: ${(props) => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px;
  margin: 2px;
  min-height: 40px;
  display: ${({ $masteroff }) => ($masteroff ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
  &:hover {
    background-color: #e4e4e4;
  }
`;
// Botão do Heard botão Logoff Master das paginas
interface PropsButtonHeaderImgLogoffMaster {
  $imgbtnmasteroff?: string;
}
export const ButtonHeardImgMasterOff = styled.button<PropsButtonHeaderImgLogoffMaster>`
  border: none;
  margin: 2px 5px 2px 5px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ $imgbtnmasteroff }) => $imgbtnmasteroff || semimg});
  background-repeat: no-repeat;
  background-size: contain;
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

/////////////////////////////////////////////////////////////
// Botão do Heard botão Logoff Login das paginas
interface PropsContainerHeaderBtnImgLoginOff {
  $loginoff?: boolean;
}
export const ContainerHeaderBtnImgLoginOff = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "$loginoff",
})<PropsContainerHeaderBtnImgLoginOff>`
  border: none;
  border-color: ${(props) => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px;
  margin: 2px;
  min-height: 40px;
  display: ${({ $loginoff }) => ($loginoff ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
  &:hover {
    background-color: #e4e4e4;
  }
`;
// Botão do Heard botão Logoff Login das paginas
interface PropsButtonHeaderImgLoginOff {
  $imgbtnloginoff?: string;
}
export const ButtonHeardImgLoginOff = styled.button<PropsButtonHeaderImgLoginOff>`
  border: none;
  margin: 2px 5px 2px 5px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ $imgbtnloginoff }) => $imgbtnloginoff || semimg});
  background-repeat: no-repeat;
  background-size: contain;
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

//////////////////////////////////////////////////////
// Conteiner do Header Switch das paginas
export const ContainerHeaderImgSwitch = styled.div`
  border: none;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  min-height: 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
  &:hover {
    background-color: #e4e4e4;
   }
`;
//////////////////////////// termino de HOME ///////////////////////




// Conteiner do Heard botão Resgate das paginas
export const ContainerBtnImgSair = styled.div`
  border: none;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  min-height: 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
  &:hover {
    background-color: #e4e4e4;
   }
`;
// Botões Sair nas paginas com Imagens
interface PropsButtonImgSair {
  $imgbtnsair?: string;
}
export const ButtonImgSair = styled.button<PropsButtonImgSair>`
  border: none;
  margin: 2px 5px 2px 5px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ $imgbtnsair }) => $imgbtnsair || semimg});
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

////////////////////////////////////////////////////////////////////////////
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
  max-width: 100%;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;
////////////////////////////////////////////////////////////

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






// Conteiner de botões das paginas Header Botão Logoff Master Right
interface PropsContainerHeaderButtonLogin {
  logonoff?: boolean;
}
export const ContainerHeaderButtonLogin = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "logonoff",
})<PropsContainerHeaderButtonLogin>`
  border: none;
  border-color: ${(props) => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px;
  margin: 2px;
  min-height: 40px;
  display: ${({ logonoff }) => (logonoff ? "flex" : "none")};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  &:hover {
    background-color: #e4e4e4;
  }
`;


// Botões das paginas com Imagens
interface PropsButtonHeaderImg {
  $imgbtnbg?: string;
}
export const ButtonHeaderImg = styled.button<PropsButtonHeaderImg>`
  border: none;
  margin: 2px 5px 2px 5px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ $imgbtnbg }) => $imgbtnbg || semimg});
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
interface PropsContainerHeaderCardIsmaster {
  mston?: boolean;
  pxheight?: string;
}
export const ContainerHeaderCardIsmaster = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "mston",
})<PropsContainerHeaderCardIsmaster>`
  border: 1px;
  border-color: ${(props) => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px;
  margin: 2px;
  min-height: ${({ pxheight }) => pxheight || '40px'};
  
  display: ${({ mston }) => (mston ? "flex" : "none")};

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
`;

interface PropsBullettIsmaster {
  strcor?: string;
}
export const BullettIsmaster = styled.div<PropsBullettIsmaster>`
  border: 3px;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 45px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: ${({ strcor }) => strcor || 'transparent'};
  height: 15px;
  width: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
`;



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

////////////////////////////////////////
interface PropsContainerHeaderButtonLgOnOff {
  $logonoff?: boolean;
}
export const ContainerHeaderButtonLgOnOff = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "$logonoff",
})<PropsContainerHeaderButtonLgOnOff>`
  border: none;
  border-color: ${(props) => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px;
  margin: 2px;
  min-height: 45px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  color: ${(props) => props.theme.colors.textColor};

  &:hover {
    background-color: #e4e4e4;
  }
`;

interface PropsButtonDefImgLgOnOff {
  $imglgoff?: string;
  $imglgon?: string;
  $logonoff?: boolean;
}
export const ButtonDefImgLgOnOff = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "$imglgoff" &&
    prop !== "$imglgon" &&
    prop !== "$logonoff",
})<PropsButtonDefImgLgOnOff>`
  border: none;
  margin: 2px 5px;
  padding: 0px;

  color: ${(props) => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;

  background-color: transparent;
  background-image: url(${(props) =>
    props.$logonoff ? props.$imglgon : props.$imglgoff});
  background-repeat: no-repeat;
  background-size: contain;
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