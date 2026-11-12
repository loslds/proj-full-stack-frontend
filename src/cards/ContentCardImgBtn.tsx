
import styled from 'styled-components';

/** Logo com botão  */ 
import btn_def_q_default from '../assets/defaults/btn/btn_def_q_default.svg';

//* Containers -> ContentCardImgBtn (Main do Logo)
interface PropsContainerCardImgBtn {
  $height? : string;
  $width? : string;
}
export const ContainerCardImgBtn = styled.div<PropsContainerCardImgBtn>`
  border: none;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  height: ${({$height }) => $height || '50px'};
  width: ${({ $width }) => $width || '120px'};
  background: transparent;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  display: 'flex';
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
////////////////////
//* ButtonCardImgBtn -> Botão imagem da Logo (Button do Logo)

interface PropsButtonCardImgBtn {
  $img?: string;
}
export const ButtonCardImgBtn = styled.button<PropsButtonCardImgBtn>`
  border: none;
  margin: 2px 5px 2px 5px;
  height: 100%;
  width: 100%;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ $img }) => $img || btn_def_q_default});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
/////////////////////////

//* Content -> ContentItensImgPnlPageHome
interface PropsContentCardImgBtn {
  heightbtn?: string;
  widthbtn?: string;
  imgbtn?: string;
  titlebtn?: string;
  onClickbtn?: ()=> void; // Agora aceita um parâmetro opcional
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentCardImgBtn = ({
  heightbtn,
  widthbtn,
  imgbtn,
  titlebtn,
  onClickbtn,
  onMouseEnter,
  onMouseLeave
}: PropsContentCardImgBtn) => {
  return (
    <ContainerCardImgBtn $height={heightbtn} $width={widthbtn}>
      <ButtonCardImgBtn
        $img={imgbtn}
        title={titlebtn}
        onClick={onClickbtn} // Passando `num` ao clicar
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </ContainerCardImgBtn>
  );
};

export default ContentCardImgBtn;
///////////////////////


