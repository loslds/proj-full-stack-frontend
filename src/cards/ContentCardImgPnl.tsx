
import styled from 'styled-components';

/** component ação limpar Login (logoff modal) */ 
import pnl_def_ope_default from '../assets/defaults/pnl/pnl_def_ope_default.svg';

//* Containers -> ContentItensImgPnlPageHome
interface PropsContainerCardImgPnl {
  $height? : string;
  $width? : string;
}
export const ContainerCardImgPnl = styled.div<PropsContainerCardImgPnl>`
  border: none;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  height: ${({$height }) => $height || '62px'};
  width: ${({ $width }) => $width || '130px'};
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

interface PropsButtonCardImgPnl {
  $img?: string;
}
export const ButtonCardImgPnl = styled.button<PropsButtonCardImgPnl>`
  border: none;
  margin: 2px 5px 2px 5px;
  height: 100%;
  width: 100%;
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
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
/////////////////////////

//* Content -> ContentItensImgPnlPageHome
interface PropsContentCardImgPnl {
  heightpnl?: string;
  widthpnl?: string;
  imgpnl?: string;
  titlepnl?: string;
  onClickpnl?: ()=> void; // Agora aceita um parâmetro opcional
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentCardImgPnl = ({
  heightpnl,
  widthpnl,
  imgpnl, 
  titlepnl,
  onClickpnl,
  onMouseEnter,
  onMouseLeave
}: PropsContentCardImgPnl) => {
  return (
    <ContainerCardImgPnl $height={heightpnl} $width={widthpnl}>
      <ButtonCardImgPnl
        $img={imgpnl}
        title={titlepnl}
        onClick={onClickpnl} // Passando `num` ao clicar
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </ContainerCardImgPnl>
  );
};

export default ContentCardImgPnl;
//////////////////////


