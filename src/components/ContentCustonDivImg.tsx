
import * as Pg from './stylePages';

interface PropsContentCustonDivImg {
  status:  2 | 1 | 0;
  pxheight?: string;
  pxh?: string;
  pxw?: string;
  img?: string;
};
export const ContentCustonDivImg = ({
  status,
  pxheight,
  pxh,
  pxw,
  img
}: PropsContentCustonDivImg) => {
    
  return (
    <Pg.ContainerDivCstImg status={status} pxheight={pxheight} >
      <Pg.ContainerDivImgCst  pxh={pxh} pxw={pxw} img={img}/>
    </Pg.ContainerDivCstImg>
  );
};

