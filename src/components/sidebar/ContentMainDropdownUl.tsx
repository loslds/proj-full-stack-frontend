import { ReactNode } from 'react';

import {ContainerMainDropdownUl} from './stylesSidebar';


type interfaceContentMainDropdownUl = {
  pxheigth?: string;
  pxwidth?: string;
  children?: ReactNode;
};
export const ContentMainDropdownUl = ({
  pxheigth,
  pxwidth,
  children
}: interfaceContentMainDropdownUl) => {
  return (
    <ContainerMainDropdownUl pxheight={pxheigth} pxwidth={pxwidth}>
      {children}
    </ContainerMainDropdownUl>
  );
};
