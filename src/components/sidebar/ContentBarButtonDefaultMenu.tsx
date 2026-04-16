//import React from "react";

import * as S from './stylesSidebar';

interface TypeContentBarButtonDefaultMenu {
  $width?: string;
  titulo?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const ContentBarButtonDefaultMenu = ({
  $width,
  titulo,
  titbtn,
  onClick,
}: TypeContentBarButtonDefaultMenu) => {
  return (
    <S.ContainerButtonMenu $width={$width}>
      <S.ButtonBarDefault
        title={titbtn} 
        onClick={onClick} 
        > 
        {titulo}
      </S.ButtonBarDefault>
    </S.ContainerButtonMenu>
  );
};
