
//
import React from 'react';
import * as Pg from './stylePages';

interface PropsContentMainPage {
  $border?: string;
  $open?: boolean;
  $width?: string;
  children?: React.ReactNode;
};
export const ContentMainGrid = ( {
  $border,
  $open,
  $width,
  children
}: PropsContentMainPage ) => {
  return (
    <Pg.ContainerMainGrid $open={$open} $width={$width}>
      <Pg.ContainerMainGrigFlex $border={$border} >
        {children}
      </Pg.ContainerMainGrigFlex>
    </Pg.ContainerMainGrid>
  );
};

