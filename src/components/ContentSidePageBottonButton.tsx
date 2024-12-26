import * as Pg from './stylePages';

interface PropsContentSidePageBottonButton {
  pxheight?: string;
  img?: string;
  titbtn?: string;
  onclick?: () => void;
};
export const ContentSidePageBottonButton = ({
  pxheight,
  img,
  titbtn,
  onclick
}: PropsContentSidePageBottonButton) => {
  return (
    <Pg.ContainerCustonBtnPage pxheight={pxheight}>
      <Pg.ButtonDefaulImgPage img={img} title={titbtn} onClick={onclick} />
    </Pg.ContainerCustonBtnPage>
  );
};
