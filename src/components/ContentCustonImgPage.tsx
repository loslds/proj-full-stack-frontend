import * as Pg from './stylePages';

interface ContentCustonImgPage {
  pxheight?: string;
  pheight?: string;
  pwidth?: string;
  imgbtn?: string;
  titlebtn?: string;
  onclick?: () => void;
  open?: boolean;
};
export const ContentCustonImgPage = ({
  pxheight,
  pheight,
  pwidth,
  imgbtn,
  onclick,
  titlebtn,
  open
}: ContentCustonImgPage) => {
  return (
    <Pg.ContainerCustonImgPage open={open} pxheight={pxheight}>
      <Pg.ButtonCustonImg
        pheight={pheight}
        pwidth={pwidth}
        img={imgbtn}
        onClick={onclick}
        title={titlebtn}
      />
    </Pg.ContainerCustonImgPage>
  );
};