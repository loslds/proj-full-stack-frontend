
//
import React from 'react';
import * as Pg from './stylePages';

interface PropsContentMainPage {
  pborder?: string;
  open?: boolean;
  pwidth?: string;
  children?: React.ReactNode;
};
export const ContentMainPage = ( {
  open,
  pborder,
  pwidth,
  children
}: PropsContentMainPage ) => {
  return (
    <Pg.ContainerMainPage open={open} pwidth={pwidth}>
      <Pg.ContainerMainlPageFlex bordas={pborder} >
        {children}
      </Pg.ContainerMainlPageFlex>
    </Pg.ContainerMainPage>
  );
};

