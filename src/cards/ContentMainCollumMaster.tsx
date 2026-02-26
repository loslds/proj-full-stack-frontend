
//C:\repository\proj-full-stack-frontend\src\cards\ContentMainCollumMaster.tsx

import { ReactNode } from 'react';
import * as Sy from './stylesSystem';

interface PropsContentMainCollumMaster {
  //vem do ContainerMainCollumMaster
  open?: boolean;
  width? : string;
  height? : string;
  ////////////
  children?: ReactNode;
};
export const ContentMainCollumMaster = ({
  open,
  width,
  height,
  children
}: PropsContentMainCollumMaster) => {
  return (
    <Sy.ContainerMainCollumMaster open={open} width={width} height={height}>
      {children}
    </Sy.ContainerMainCollumMaster>
  )
}

