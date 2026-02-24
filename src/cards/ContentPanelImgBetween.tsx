//import React from 'react';

import * as Sy from './stylesSystem';

interface PropsContentPanelImgBetween {
  pxheight?: string;
  pxwidth?: string;
  imgpnl?: string;
  onclickpnl?: () => void;
}
export const ContentPanelImgBetween = ({
  pxheight,
  pxwidth,
  imgpnl,
  onclickpnl,

}: PropsContentPanelImgBetween) => {
  return (
    <Sy.ContainerPanelImgBetween>
      <Sy.ContainerPanelImg
        pxheight={pxheight}
        pxwidth={pxwidth}
        img={imgpnl}
        onClick={onclickpnl}
      />
    </Sy.ContainerPanelImgBetween>
  );
};
