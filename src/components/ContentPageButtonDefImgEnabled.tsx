import * as Pg from './stylePages';

interface PropsContentPageButtonDefImgEnabled {
  pxheight?: string;
  img?: string;
  titbtn?: string;
  disabled?: boolean;
  onclick?: () => void;
};
export const ContentPageButtonDefImgEnabled = ({
  pxheight,
  img,
  titbtn,
  disabled,
  onclick
}: PropsContentPageButtonDefImgEnabled) => {
  return (
    <Pg.ContainerCustonBtnPage pxheight={pxheight}>
      <Pg.ButtonDefImgEnabledPage img={img} title={titbtn} disabled={disabled} onClick={onclick} />
    </Pg.ContainerCustonBtnPage>
  );
};
