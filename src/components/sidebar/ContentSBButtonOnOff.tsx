//import React from "react";

import * as S from './stylesSidebar';

type TypeContentSBButtonOnOff = {
  img?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentSBButtonOnOff = ({
  titbtn,
  img,
  onClick
}: TypeContentSBButtonOnOff) => {
  return (
    <S.ContainerSideOnOffButton>
      <S.ButtonOnOffImg img={img} title={titbtn} onClick={onClick}/>
    </S.ContainerSideOnOffButton>
  );
};
