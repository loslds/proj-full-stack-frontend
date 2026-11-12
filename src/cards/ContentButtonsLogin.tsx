
//C:\repository\proj-full-stack-frontend\src\cards\ContenteBottonsMaster.tsx
import React from 'react';
import * as Sy from './stylesSys';

interface PropsContentButtonsLogin {
  children?: React.ReactNode;
}
export const ContentButtonsLogin = ({ 
  children }: PropsContentButtonsLogin) => {
  return (
    <Sy.ContainerPanelButtonLogin>
      {children}
    </Sy.ContainerPanelButtonLogin>
  )
}