//import React from "react";

import * as S from './stylesSidebar';

interface TypeContentBarButtonMenu {
  $width?: string;
  $img?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const ContentBarButtonMenu = ({
  $width,
  $img,
  titbtn,
  onClick,
}: TypeContentBarButtonMenu) => {
  return (
    <S.ContainerButtonMenu $width={$width}>
      <S.ButtonBarImg 
        $img={$img} 
        title={titbtn} 
        onClick={onClick} 
      />
    </S.ContainerButtonMenu>
  );
};
