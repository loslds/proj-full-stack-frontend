//import React from "react";

import * as S from './stylesSidebar';

type TypeContainerSBButton = {
  img?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContainerSBButton = ({
  titbtn,
  img,
  onClick
}: TypeContainerSBButton) => {
  return (
    <S.ContainerSideButton>
      <S.ButtonSideBarImg img={img} title={titbtn} onClick={onClick} />
    </S.ContainerSideButton>
  );
};
