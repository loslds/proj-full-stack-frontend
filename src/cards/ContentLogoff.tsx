import React from 'react';
import * as Sy from './stylesSystem';

interface PropsContentLogoff {
  pptop? : string;
  ppwidth?: string;
  bordas?: string;
  children?: React.ReactNode;
}
export const ContentLogoff = ({ pptop, ppwidth, bordas, children }: PropsContentLogoff) => {
  return (
    <Sy.ContainerLogoff pptop={pptop} ppwidth={ppwidth}>
      <Sy.ContainerLogoffFlex bordas={bordas}>
        {children}
      </Sy.ContainerLogoffFlex>
    </Sy.ContainerLogoff>
  );
};
