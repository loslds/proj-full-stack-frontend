
//C:\repository\proj-full-stack-frontend\src\cards\ContenteBottonsMaster.tsx
import React from 'react';
import * as Sy from './stylesSys';

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