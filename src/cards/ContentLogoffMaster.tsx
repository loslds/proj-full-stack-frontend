import React from 'react';
import * as Sy from './stylesSystem';

interface PropsContentLogoffMaster {
  pptop? : string;
  ppwidth?: string;
  bordas?: string;
  children?: React.ReactNode;
}
export const ContentLogoffMaster = ({ pptop, ppwidth, bordas, children }: PropsContentLogoffMaster) => {
  return (
    <Sy.ContainerLogoffMaster pptop={pptop} ppwidth={ppwidth}>
      <Sy.ContainerLogoffMasterFlex bordas={bordas}>
        {children}
      </Sy.ContainerLogoffMasterFlex>
    </Sy.ContainerLogoffMaster>
  );
};
