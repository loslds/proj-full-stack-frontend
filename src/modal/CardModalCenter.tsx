import React from 'react';
import * as M from './stylesModal';

interface PropsCardModalCenter {
  children?: React.ReactNode | JSX.Element;
}
export const CardModalCenter = ({ children }: PropsCardModalCenter) => {
  return <M.ContainerModalCenter>{children}</M.ContainerModalCenter>;
};
