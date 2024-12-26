import React from 'react';
import * as M from './stylesModal';

interface PropsContentModal {
  ptop?: string;
  pheight?: string;
  pwidth?: string;
  onClick?: () => void;
  children?: React.ReactNode | JSX.Element;
}
export const ContentModal = ({
  ptop,
  pheight,
  pwidth,
  onClick,
  children,
}: PropsContentModal) => {
  return (
    <M.ContainerModal
      ptop={ptop}
      pheight={pheight}
      pwidth={pwidth}
      onClick={onClick}
    >
      {children}
    </M.ContainerModal>
  );
};
