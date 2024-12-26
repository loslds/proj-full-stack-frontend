import React from 'react';
import * as M from './stylesModal';

interface PropsCardModalAround {
  children?: React.ReactNode | JSX.Element;
}
export const CardModalAround = ({ children }: PropsCardModalAround) => {
  return <M.ContainerModalAround>{children}</M.ContainerModalAround>;
};
