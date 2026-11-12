
import styled from 'styled-components';

/** component ação limpar Login (logoff modal) */ 
import pnl_def_ope_default from '../../../assets/defaults/pnl/pnl_def_ope_default.svg';

//* Containers -> ContentItensImgPnlPageHome
interface PropsContainerImgPnlPage {
  $minheight? : string;
  $open?: boolean;
}
export const ContainerImgPnlPage = styled.div<PropsContainerImgPnlPage>`
  border: none;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  min-height: ${({$minheight }) => $minheight || '50px'};
  background: transparent;
  color: ${props => props.theme.colors.textColor};
  display: ${props => (props.$open ? 'flex' : 'none')};
`;
////////////////////

interface PropsButtonImgPnlPage {
  $height?: string;
  $width?: string;
  $img?: string;
}
export const ButtonItensImgPnlHome = styled.button<PropsButtonImgPnlPage>`
  border: none;
  margin: 2px 5px 2px 5px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ $img }) => $img || pnl_def_ope_default});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  min-height: ${({ $height }) => $height || '45px'};
  width: ${({ $width }) => $width || '45px'};
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
/////////////////////////

//* Content -> ContentItensImgPnlPageHome
interface PropsContentImgPnlPage {
  $num?: number;
  height?: string;

  heightbtn?: string;
  widthbtn?: string;
  imgbtn?: string;
  titlebtn?: string;
  onClickbtn?: ($num?: number) => void; // Agora aceita um parâmetro opcional
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentImgPnlPage = ({
  $num,
  height,
   
  heightbtn,
  widthbtn,
  titlebtn,
  imgbtn,
  onClickbtn,
  onMouseEnter,
  onMouseLeave
}: PropsContentImgPnlPage) => {
  return (
    <ContainerImgPnlPage $minheight={height}>
      <ButtonItensImgPnlHome
        $height={heightbtn}
        $width={widthbtn}
        $img={imgbtn}
        onClick={() => onClickbtn?.($num)} // Passando `num` ao clicar
        title={titlebtn}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </ContainerImgPnlPage>
  );
};

export default ContentImgPnlPage;
//////////////////////

