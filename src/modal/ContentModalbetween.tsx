import React from 'react';
import * as M from './stylesModal';

interface PropsContentModalBetween {
  children?: React.ReactNode;
}
export const ContentModalBetween = ({ children }: PropsContentModalBetween) => {
  return <M.ContainerModalBetween>{children}</M.ContainerModalBetween>;
};
