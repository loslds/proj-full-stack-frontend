
import styled from 'styled-components';

import btn_def_q_default from '../../assets/defaults/btn/btn_def_q_default.svg';

// Container -> ContainerHeaderBtnImgLogoffMaster -> Botão Logoff Master das paginas
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
// Button -> ButtonHeaderImgLogoffMaster -> Botão Logoff Master das paginas
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
  background-image: url(${({ $imgbtnmasteroff }) => $imgbtnmasteroff || btn_def_q_default});
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

////////////////////////
// Content ->  ContentHeaderBtnImgMasterOff botão LOGO-OFF Master das paginas
interface PropsContentHeaderBtnImgMasterOff {
  masteroff?: boolean;
  imgbtnmasteroff?: string;
  titbtnmasteroff?: string;
  onClickbtnmasteroff?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderBtnImgMasterOff = ({
  masteroff,
  imgbtnmasteroff,
  titbtnmasteroff,
  onClickbtnmasteroff,
}: PropsContentHeaderBtnImgMasterOff) => {
  return (
    <ContainerHeaderBtnImgLogoffMaster $masteroff={masteroff ?? false}>
      <ButtonHeardImgMasterOff
        $imgbtnmasteroff={imgbtnmasteroff}
        title={titbtnmasteroff}
        onClick={onClickbtnmasteroff}
      />
    </ContainerHeaderBtnImgLogoffMaster>
  );
};

export default ContentHeaderBtnImgMasterOff;
////////////////