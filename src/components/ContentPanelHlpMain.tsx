

import { ReactNode } from 'react';

import * as Pg from './stylePages';

interface PropsContentPanelHlpMain {
  pwidth?: string;
  isbodas?: boolean;
  bordas?: string;
  children?: ReactNode;
};
export const ContentPanelHlpMain = ({
  isbodas,
  pwidth,
  children
}: PropsContentPanelHlpMain) => {
  return (
    <Pg.ContainerPanelHlp pwidth={pwidth}>
      <Pg.ContainerPanelHlpFlex isborda= {isbodas}>
        {children}
      </Pg.ContainerPanelHlpFlex>
    </Pg.ContainerPanelHlp>
  );
};

