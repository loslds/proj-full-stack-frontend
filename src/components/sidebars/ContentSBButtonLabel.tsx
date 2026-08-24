//import React from "react";

import * as S from './stylesSidebar';

type TypeContentSBButtonLabel = {
  titulo?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentSBButtonLabel = ({
  titbtn,
  onClick,
  onMouseEnter,
  onMouseLeave
}: TypeContentSBButtonLabel) => {
  return (
    <S.ContainerSideButtonLabel>
      <S.ButtonSideBarLabel
        title={titbtn} 
        onClick={onClick} 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </S.ContainerSideButtonLabel>
  );
};
