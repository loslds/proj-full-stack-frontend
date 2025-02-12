

import * as Pg from './stylePages';

interface PropsContentSidePageBottonButton {
  pxheight?: string;
  img?: string;
  titbtn?: string;
  onclick?: () => void;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentSidePageBottonButton = ({
  pxheight,
  img,
  titbtn,
  onclick,
  onMouseEnter,
  onMouseLeave
}: PropsContentSidePageBottonButton) => {
  return (
    <Pg.ContainerCustonBtnPage pxheight={pxheight}>
      <Pg.ButtonDefaulImgPage img={img} title={titbtn} onClick={onclick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
    </Pg.ContainerCustonBtnPage>
  );
};

