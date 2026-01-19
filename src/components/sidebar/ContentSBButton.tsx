//import React from "react";

import * as S from './stylesSidebar';

type TypeContentSBButton = {
  img?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentSBButton = ({
  titbtn,
  img,
  onClick,
  onMouseEnter,
  onMouseLeave
}: TypeContentSBButton) => {
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
