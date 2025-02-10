import * as Pg from './stylePages';

interface PropsContentSidePageBottonEnabled {
  pxheight?: string;
  img?: string;
  titbtn?: string;
  disabled?: boolean;
  onclick?: () => void;
};
export const ContentSidePageBottonEnabled = ({
  pxheight,
  img,
  titbtn,
  disabled,
  onclick
}: PropsContentSidePageBottonEnabled) => {
  return (
    <Pg.ContainerCustonBtnPage pxheight={pxheight}>
      <Pg.ButtonDefImgEnabledPage img={img} title={titbtn} disabled={disabled} onClick={onclick} />
    </Pg.ContainerCustonBtnPage>
  );
};
