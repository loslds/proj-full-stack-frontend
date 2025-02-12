import * as Pg from './stylePages';

interface ContentCustonImgPage {
  pxheight?: string;
  pheight?: string;
  pwidth?: string;
  imgbtn?: string;
  titlebtn?: string;
  onclick?: () => void;
  open?: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentCustonImgPage = ({
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
  return (
    <Pg.ContainerCustonImgPage open={open} pxheight={pxheight}>
      <Pg.ButtonCustonImg
        pheight={pheight}
        pwidth={pwidth}
        img={imgbtn}
        onClick={onclick}
        title={titlebtn}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </Pg.ContainerCustonImgPage>
  );
};