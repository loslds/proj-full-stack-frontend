
//C:\repository\proj-full-stack-frontend\src\cards\ContentMainCollumMaster.tsx

import { ReactNode } from 'react';
import * as Sy from './stylesSystem';

interface PropsContentMainCollumLogin {
  //vem do ContainerMainCollumMaster
  open?: boolean;
  width? : string;
  height? : string;
  ////////////
  children?: ReactNode;
};
export const ContentMainCollumLogin = ({
  open,
  width,
  height,
  children
}: PropsContentMainCollumLogin) => {
  return (
    <Sy.ContainerMainCollumLogin open={open} width={width} height={height}>
      {children}
    </Sy.ContainerMainCollumLogin>
  )
}

