

import * as Pg from '../stylePages';

interface PropsContentSidePageBottonButton {
  pxheight?: string;
  img?: string;
  titbtn?: string;
  onClick?: () => void;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentSidePageBottonButton = ({
  pxheight,
  img,
  titbtn,
  onClick,
  onMouseEnter,
  onMouseLeave
}: PropsContentSidePageBottonButton) => {
  return (
    <Pg.ContainerCustonBtnPage pxheight={pxheight}>
      <Pg.ButtonDefaulImgPage img={img} title={titbtn} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
    </Pg.ContainerCustonBtnPage>
  );
};

