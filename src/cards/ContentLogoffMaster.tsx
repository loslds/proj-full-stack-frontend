import React from 'react';
import * as Sy from './stylesSys';

interface PropsContentLogoffMaster {
  pptop? : string;
  ppwidth?: string;
  bordas?: string;
  children?: React.ReactNode;
}
export const ContentLogoffMaster = ({ pptop, ppwidth, bordas, children }: PropsContentLogoffMaster) => {
  return (
    <Sy.ContainerLogoffBtnImgMaster $pptop={pptop} $ppwidth={ppwidth}>
      <Sy.ContainerLogoffMasterFlex $bordas={bordas}>
        {children}
      </Sy.ContainerLogoffMasterFlex>
    </Sy.ContainerLogoffBtnImgMaster>
  );
};
