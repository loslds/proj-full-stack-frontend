
import styled from 'styled-components';

import btn_def_q_default from '../../assets/defaults/btn/btn_def_q_default.svg';

// Container -> ContainerHeaderBtnImgLoginOn Main para Botão Login
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
export const ButtonHeaderImgLoginOn = styled.button<PropsButtonHeaderImgLoginOn>`
  border: none;
  margin: 2px 5px 2px 5px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ $imgbtnloginon }) => $imgbtnloginon || btn_def_q_default});
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

// Content -> ContentHeaderBtnImgLoginOn botão Login
interface PropsContentHeaderBtnImgLoginOn {
  imgbtnloginon?: string;
  titbtnloginon?: string;
  disabledloginon?: boolean;
  onClickbtnloginon?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderBtnImgLoginOn = ({
  imgbtnloginon,
  titbtnloginon,
  disabledloginon = false,
  onClickbtnloginon,
}: PropsContentHeaderBtnImgLoginOn) => {
  return (
    <ContainerHeaderBtnImgLoginOn>
      <ButtonHeaderImgLoginOn
        type="button"
        $imgbtnloginon={imgbtnloginon}
        title={titbtnloginon}
        disabled={disabledloginon}
        onClick={onClickbtnloginon}
      />
    </ContainerHeaderBtnImgLoginOn>
  );
};
export default ContentHeaderBtnImgLoginOn;
///////////////