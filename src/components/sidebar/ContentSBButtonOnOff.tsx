//import React from "react";

import * as S from './stylesSidebar';

type TypeContainerSBButtonOnOff = {
  img?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContainerSBButtonOnOff = ({
  titbtn,
  img,
  onClick
}: TypeContainerSBButtonOnOff) => {
  return (
    <S.ContainerSideOnOffButton>
      <S.ButtonOnOffImg img={img} title={titbtn} onClick={onClick} />
    </S.ContainerSideOnOffButton>
  );
};
