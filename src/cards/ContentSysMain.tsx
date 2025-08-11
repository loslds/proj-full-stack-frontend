// import React from 'react';
import * as Sy from './stylesSystem';
interface PropsContentSysMain {
  pwidth?: string;
  children?: React.ReactNode;
}
export const ContentSysMain = ({ pwidth, children }: PropsContentSysMain) => {
  return (
    <Sy.ContainerMainSystem>
      <Sy.ContainerMainSystemFlex pwidth={pwidth}>
        {children}
      </Sy.ContainerMainSystemFlex>
    </Sy.ContainerMainSystem>
  );
};
