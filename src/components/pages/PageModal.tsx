import React from 'react';
import * as M from '../../modal/stylesModal';

import { CardModal } from '../../modal/CardModal';
import { ContentModal } from '../../modal/ContentModal';
import { TitleModal } from '../../modal/TitleModal';
import { CardButtonModal } from '../../modal/CardButtonModal';

interface PropsPageModal {
  ptop?: string;
  pwidth?: string;
  pheight?: string;
  titulo?: string;
  isbtn?: boolean;
  imgbm?: string;
  titbm?: string;
  onclose?: () => void;
  
  children?: React.ReactNode | JSX.Element;
}
export const PageModal = ({
  ptop,
  pwidth,
  pheight,

  titulo,

  imgbm,
  titbm,
  children,
  onclose,
}: PropsPageModal) => {
  return (
    <M.Content>
      <ContentModal ptop={ptop} pwidth={pwidth} pheight={pheight}>
        <CardModal>
          <TitleModal titulo={titulo} />
          <CardButtonModal imgbm={imgbm} titbm={titbm} onClick={onclose} />
        </CardModal>
        {children}
      </ContentModal>
    </M.Content>
  );
};
