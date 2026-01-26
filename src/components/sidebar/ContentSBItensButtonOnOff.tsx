import React from "react";

import * as S from './stylesSidebar';

type TypeContentSBItensButtonOnOff = {
  open?: boolean;
  children?: React.ReactNode;
};
export const ContentSBItensButtonOnOff = ({
  open,
  children
}: TypeContentSBItensButtonOnOff) => {
  return (
    <S.ContainerSBItensButtonOnOff open={open}>
      {children}
    </S.ContainerSBItensButtonOnOff>  
  );
};
