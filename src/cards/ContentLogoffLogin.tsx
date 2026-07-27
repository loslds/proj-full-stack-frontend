import React from 'react';
import * as Sy from './stylesSystem';

interface PropsContentLogoffLogin {
  pptop? : string;
  ppwidth?: string;
  bordas?: string;
  children?: React.ReactNode;
}
export const ContentLogoffLogin = ({ pptop, ppwidth, bordas, children }: PropsContentLogoffLogin) => {
  return (
    <Sy.ContainerLogoffLogin pptop={pptop} ppwidth={ppwidth}>
      <Sy.ContainerLogoffLoginFlex bordas={bordas}>
        {children}
      </Sy.ContainerLogoffLoginFlex>
    </Sy.ContainerLogoffLogin>
  );
};
