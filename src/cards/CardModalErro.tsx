import React from 'react';
import * as MD from '../modal/stylesModal';

interface PropsCardModalErro {
  pminheight?: string;
  pwidth?: string;
  children?: React.ReactNode;
}
export const CardModalErro = ({
  pminheight,
  pwidth,
  children,
}: PropsCardModalErro) => {
  return (
    <MD.ContainerModalErro pminheight={pminheight} pwidth={pwidth}>
      {children}
    </MD.ContainerModalErro>
  );
};
