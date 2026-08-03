//import React from "react";

import * as Sy from './stylesSystem';

interface PropsContentButtonImgLogin {
  imgbtn?: string;
  titbtn?: string;
  onClickbtn?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnterbtn?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeavebtn?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentButtonImgLogin = ({
  titbtn,
  imgbtn,
  onClickbtn,
  onMouseEnterbtn,
  onMouseLeavebtn
}: PropsContentButtonImgLogin) => {
  return (
    <Sy.ContainerButtonLoginImg>
      <Sy.ButtonLoginImg 
        $img={imgbtn} 
        title={titbtn} 
        onClick={onClickbtn} 
        onMouseEnter={onMouseEnterbtn}
        onMouseLeave={onMouseLeavebtn}
      />
    </Sy.ContainerButtonLoginImg>
  );
};
