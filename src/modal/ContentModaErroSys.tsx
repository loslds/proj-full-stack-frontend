import React from 'react';
import * as MD from './stylesModal';

interface PropsContentModaErroSys {
  ppwidth?: string;
  bordas?: string;
  children?: React.ReactNode;
}
export const ContentModaErroSys = ({ppwidth, bordas,children }: PropsContentModaErroSys) => {
  return (
    <MD.ContainerModalPanelErroPage ppwidth={ppwidth}>
      <MD.ContainerModalPanelErroFlex bordas={bordas}>
        {children}
      </MD.ContainerModalPanelErroFlex>
    </MD.ContainerModalPanelErroPage>
  );
};

