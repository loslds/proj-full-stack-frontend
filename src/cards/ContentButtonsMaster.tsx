
//C:\repository\proj-full-stack-frontend\src\cards\ContenteBottonsMaster.tsx
import React from 'react';
import * as Sy from './stylesSystem';

interface PropsContentButtonsMaster {
  children?: React.ReactNode;
}
export const ContentButtonsMaster = ({ 
  children }: PropsContentButtonsMaster) => {
  return (
    <Sy.ContainerPanelButtonMaster>
      {children}
    </Sy.ContainerPanelButtonMaster>
  )
}