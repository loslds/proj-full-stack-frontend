//import React from "react";

import * as Sy from './stylesSystem';

interface PropsContentButtonImgMaster {
  $imgbtn?: string;
  titbtn?: string;
  onClickbtn?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnterbtn?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeavebtn?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentButtonImgMaster = ({
  titbtn,
  $imgbtn,
  onClickbtn,
  onMouseEnterbtn,
  onMouseLeavebtn
}: PropsContentButtonImgMaster) => {
  return (
    <Sy.ContainerButtonMasterImg>
      <Sy.ButtonMasterImg 
        $img={$imgbtn} 
        title={titbtn} 
        onClick={onClickbtn} 
        onMouseEnter={onMouseEnterbtn}
        onMouseLeave={onMouseLeavebtn}
      />
    </Sy.ContainerButtonMasterImg>
  );
};
