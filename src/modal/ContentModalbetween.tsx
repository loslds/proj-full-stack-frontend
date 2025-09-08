import React from 'react';
import * as M from './stylesModal';

interface PropsContentModalBetween {
  children?: React.ReactNode;
}
export const ContentModalbetween = ({ children }: PropsContentModalBetween) => {
  return <M.ContainerModalBetween>{children}</M.ContainerModalBetween>;
};
