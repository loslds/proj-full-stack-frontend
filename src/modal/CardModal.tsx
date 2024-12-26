import React from 'react';

import * as M from './stylesModal';

interface PropsCardModal {
  id?: string;
  children?: React.ReactNode | JSX.Element;
};

export const CardModal = ({ id, children }: PropsCardModal) => {
  return (
    <M.ContainerCard id={id}>
      <M.ContainerCardFlex>{children}</M.ContainerCardFlex>
    </M.ContainerCard>
  );
};
