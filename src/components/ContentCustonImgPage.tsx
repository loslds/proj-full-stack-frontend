
import * as Pg from './stylePages';

interface ContentCustonImgPage {
  num?: number;
  pxheight?: string;
  pheight?: string;
  pwidth?: string;
  imgbtn?: string;
  titlebtn?: string;
  onclick?: (num?: number) => void; // Agora aceita um parâmetro opcional
  open?: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentCustonImgPage = ({
  num,
  pxheight,
  pheight,
  pwidth,
  imgbtn,
  onclick,
  titlebtn,
  open,
  onMouseEnter,
  onMouseLeave
}: ContentCustonImgPage) => {
  // Se open for false, retorna null para não renderizar nada
  if (!open) return null;

  return (
    <Pg.ContainerCustonImgPage open={open} pxheight={pxheight}>
      <Pg.ButtonCustonImg
        pheight={pheight}
        pwidth={pwidth}
        img={imgbtn}
        onClick={() => onclick?.(num)} // Passando `num` ao clicar
        title={titlebtn}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </Pg.ContainerCustonImgPage>
  );
};

