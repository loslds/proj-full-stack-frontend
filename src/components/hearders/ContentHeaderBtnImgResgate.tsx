
import styled from 'styled-components';

import btn_def_q_default from '../../assets/defaults/btn/btn_def_q_default.svg';

// Conteiner -> ContainerHeaderBtnImgResgate -> Main botão Resgate das paginas
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
  background-image: url(${({ $imgbtnresgate }) => $imgbtnresgate || btn_def_q_default});
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
// Content ->  ContentHeaderBtnImgResgate botão Resgate das paginas
interface PropsContentHeaderBtnImgResgate {
  imgbtnresgate?: string;
  titbtnresgate?: string;
  onClickbtnresgate?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderBtnImgResgate = ({
  imgbtnresgate,
  titbtnresgate,
  onClickbtnresgate,
}: PropsContentHeaderBtnImgResgate) => {
  return (
    <ContainerHeaderBtnImgResgate>
      <ButtonHeardImgResgate
        type="button"
        $imgbtnresgate={imgbtnresgate}
        title={titbtnresgate}
        onClick={onClickbtnresgate}
      />
    </ContainerHeaderBtnImgResgate>
  );
};

export default ContentHeaderBtnImgResgate;
/////////////////////////