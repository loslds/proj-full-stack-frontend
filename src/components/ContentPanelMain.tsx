

import { ReactNode } from 'react';

import * as Pg from './stylePages';

interface PropsContentPanelMain {
  bordas?: string;
  open?: boolean;
  pwidth?: string;
  children?: ReactNode;
};
export const ContentPanelMain = ({
  open,
  pwidth,
  children
}: PropsContentPanelMain) => {
  return (
    <Pg.ContainerPanelPage open={open} pwidth={pwidth}>
      <Pg.ContainerPanelFlex>
        {children}
      </Pg.ContainerPanelFlex>
    </Pg.ContainerPanelPage>
  );
};

