import React from 'react';
import * as MD from './stylesModal';

interface PropsCardModalTexto {
  children?: React.ReactNode;
};
export const CardModalTexto = ({ children }:PropsCardModalTexto) => {
  return <MD.ContainerModalTexto>{children}</MD.ContainerModalTexto>;
};
