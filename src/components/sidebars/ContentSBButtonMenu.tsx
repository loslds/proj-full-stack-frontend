//import React from "react";

import * as S from './stylesSidebar';

type TypeContentSBButtonMenu = {
  img?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentSBButtonMenu = ({
  titbtn,
  img,
  onClick,
  onMouseEnter,
  onMouseLeave
}: TypeContentSBButtonMenu) => {
  return (
    <S.ContainerSideButton>
      <S.ButtonSideBarImg 
        img={img} 
        title={titbtn} 
        onClick={onClick} 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </S.ContainerSideButton>
  );
};
