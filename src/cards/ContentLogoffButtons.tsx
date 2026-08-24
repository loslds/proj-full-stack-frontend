
//C:\repository\proj-full-stack-frontend\src\cards\ContenteBottonsMaster.tsx
import React from 'react';
import * as Sy from './stylesSystem';

interface PropsContentLogoffButtons {
  widthbtns? : string;
  heightbtns? : string;
  children?: React.ReactNode;
}
export const ContentLogoffButtons = ({
  widthbtns,
  heightbtns,
  children }: PropsContentLogoffButtons) => {
  return (
    <Sy.ContainerLogoffButtons $height={widthbtn} $width={heightbtn}>
      {children}
    </Sy.ContainerLogoffButtons>
  )
}

export default ContentLogoffButtons;