//import React from "react";

import * as S from './stylesSidebar';

interface PropsContentBarButtonGreeMenu {
  $open?: boolean;
  $width?: string;
  $isCor?: boolean;
  $img?: string;
  titbtn?: string;
  titulo?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const ContentBarButtonGreenMenu = ({
  $open,
  $width,
  $isCor,
  titbtn,
  titulo,
  onClick,
}: PropsContentBarButtonGreeMenu) => {
  return (
    <S.ContainerButtonGreenMenu $open={$open} $width={$width} $isCor={$isCor}>
      <S.ButtonGreenDefault title={titbtn} onClick={onClick}>
        <label>{titulo}</label>
      </S.ButtonGreenDefault> 
    </S.ContainerButtonGreenMenu>
      
      
  );
};
