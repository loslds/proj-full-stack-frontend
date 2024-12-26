import React from 'react';
import * as M from './stylesModal';

interface PropsCardModalTextoColumn {
  children?: React.ReactNode | JSX.Element;
}
export const CardModalTextoColumn = ({ children }: PropsCardModalTextoColumn) => {
  return <M.ContainerModalColumn>{children}</M.ContainerModalColumn>;
};
