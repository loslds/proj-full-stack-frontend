import React from 'react';
import * as M from './stylesModal';

interface PropsContentTextoModulos {
  children?: React.ReactNode;
}
export const ContentTextoModulos = ({ children }: PropsContentTextoModulos) => {
  return <M.ContainerTextoModulos>{children}</M.ContainerTextoModulos>;
};
