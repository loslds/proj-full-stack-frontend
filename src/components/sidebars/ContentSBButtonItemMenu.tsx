import React from "react";

import * as S from './stylesSidebar';

type TypeContentSBButtonItemMenu = {
  isbrder?: boolean;
  children?: React.ReactNode;
};
export const ContentSBButtonItemMenu = ({
  isbrder,
  children
}: TypeContentSBButtonItemMenu) => {
  return (
    <S.ContainerSideButtonItem isbrder={isbrder}>
      {children}
    </S.ContainerSideButtonItem>  
  );
};
