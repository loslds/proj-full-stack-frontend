
//C:\repository\proj-full-stack-frontend\src\cards\ContenteBottonsMaster.tsx
import React from 'react';
import * as Sy from './stylesSystem';

interface PropsContentLogoffMainButtons {
  children?: React.ReactNode;
}
export const ContentLogoffMainButtons = ({ 
  children }: PropsContentLogoffMainButtons) => {
  return (
    <Sy.ContainerLogoffMainButtons>
      {children}
    </Sy.ContainerLogoffMainButtons>
  )
}