

import styled from 'styled-components';

import btn_def_q_default from '../../assets/defaults/btn/btn_def_q_default.svg';



// Container -> ContainerHeaderBtnImgHlpPg -> do Heard botão help das paginas
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
  background-image: url(${({ $imgbtnhlppg }) => $imgbtnhlppg || btn_def_q_default});
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
////////////////

// Content -> ContentHeaderBtnImgHlpPg -> do Heard botão help das paginas
interface PropsContentHeardBtnImgHlpPg {
  imgbtnhlppg?: string;
  titbtnhlppg?: string;
  onClickbtnhlppg?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHearderBtnImgHlpPg = ({
  imgbtnhlppg,
  titbtnhlppg,
  onClickbtnhlppg,
}: PropsContentHeardBtnImgHlpPg) => {
  return (
    <ContainerHeaderBtnImgHlpPg>
      <ButtonHearderImgHlpPg
        type="button"
        $imgbtnhlppg={imgbtnhlppg}
        title={titbtnhlppg}
        onClick={onClickbtnhlppg}
      />
    </ContainerHeaderBtnImgHlpPg>
  );
};

export default ContentHearderBtnImgHlpPg;
////////////////////