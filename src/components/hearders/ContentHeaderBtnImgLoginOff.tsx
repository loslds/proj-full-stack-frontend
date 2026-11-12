
import styled from 'styled-components';

import btn_def_q_default from '../../assets/defaults/btn/btn_def_q_default.svg';

// Container -> ContainerHeaderBtnImgLogoffLogin -> Botão Logoff Login das paginas
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
  background-image: url(${({ $imgbtnloginoff }) => $imgbtnloginoff || btn_def_q_default});
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

interface PropsContentHeaderBtnImgLoginOff {
  loginoff?: boolean;
  imgbtnloginoff?: string;
  titbtnloginoff?: string;
  onClickbtnloginoff?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderBtnImgLoginOff = ({
  loginoff,
  imgbtnloginoff,
  titbtnloginoff,
  onClickbtnloginoff,
}: PropsContentHeaderBtnImgLoginOff) => {
  return (
    <ContainerHeaderBtnImgLoginOff $loginoff={loginoff ?? false}>
      <ButtonHeardImgLoginOff
        type="button"
        $imgbtnloginoff={imgbtnloginoff}
        title={titbtnloginoff}
        onClick={onClickbtnloginoff}
      />
    </ContainerHeaderBtnImgLoginOff>
  );
};

export default ContentHeaderBtnImgLoginOff;
/////////////////////