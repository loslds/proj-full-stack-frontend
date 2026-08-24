
//C:\repository\proj-full-stack-frontend\src\cards\ContentMainCollumMaster.tsx

import { ReactNode } from 'react';
import * as Sy from './stylesSystem';

interface PropsContentLogoffMainCollum {
  //vem do ContainerMainCollumMaster
  open?: boolean;
  width? : string;
  height? : string;
  ////////////
  children?: ReactNode;
};
export const ContentLogoffMainCollum = ({
  open,
  width,
  height,
  children
}: PropsContentLogoffMainCollum) => {
  return (
    <Sy.ContainerLogoffMainCollum $open={open} $width={width} $height={height}>
      {children}
    </Sy.ContainerLogoffMainCollum>
  )
}

