
import styled from 'styled-components';

import btn_def_q_default from '../../assets/defaults/btn/btn_def_q_default.svg';

// containers -> ContentHearderImgLogo
// Container para imagem Logo -> ContainerHearderImgLogo //
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

// // Container para imagem Botão Logo -> ButtonHearderImgLogo
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
  background-image: url(${({ $imgbtnlogo }) => $imgbtnlogo || btn_def_q_default});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
///////////////////////////////////

// contente -> ContentHearderImgLogo
interface PropsContentHearderImgLogo {
  $imgbtnlogo?: string;
  titbtnlogo?: string;
  onClickbtnlogo?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHearderImgLogo = ({
  $imgbtnlogo,
  titbtnlogo,
  onClickbtnlogo,
}: PropsContentHearderImgLogo) => {
  return (
    <ContainerHearderImgLogo>
      <ButtonHearderImgLogo
        type="button"
        $imgbtnlogo={$imgbtnlogo}
        title={titbtnlogo}
        onClick={onClickbtnlogo}
      />
    </ContainerHearderImgLogo>
  );
};

export default ContentHearderImgLogo;


