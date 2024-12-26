import React from 'react';
import * as M from './stylesModal';

interface PropsContentCardModal {
  children?: React.ReactNode | JSX.Element;
}
export const ContentCardModal = ({ children }: PropsContentCardModal) => {
  return (
    <M.ContainerModal>
      <M.ContainerCardFlex>
        {children}
      </M.ContainerCardFlex>
    </M.ContainerModal>
  );
};
