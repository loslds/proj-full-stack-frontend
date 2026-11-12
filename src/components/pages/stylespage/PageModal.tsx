import React from 'react';

import { ContentModalPage } from './ContentModalPage';
import { ContentBoxModalFlexPage } from './ContentBoxModalFlexPage';
import { ContentModalTitle } from './ContentModalTitle';
//import { CardModal } from '../../modal/CardModal';
//import { ContentModal } from '../../modal/ContentModal';
//import { TitleModal } from '../../modal/TitleModal';
import { CardButtonModal } from '../../../modal/CardButtonModal';


interface PropsPageModal {
  btop?: string;
  bwidth?: string;
  bheight?: string;
  titulo?: string;
  isbtn?: boolean;
  imgbm?: string;
  titbm?: string;
  onclose?: () => void;
  
  children?: React.ReactNode ;
}
export const PageModal = ({
  btop,
  bwidth,
  bheight,

  titulo,

  imgbm,
  titbm,

  children,
  onclose,

}: PropsPageModal) => {
  return (
    <ContentModalPage>
      <ContentBoxModalFlexPage btop={btop} bwidth={bwidth} bheight={bheight}>
        <ContentModalTitle titmodal={titulo} />
        <CardButtonModal imgbm={imgbm} titbm={titbm} onClick={onclose} />
        {children}
      </ContentBoxModalFlexPage>
    </ContentModalPage>
  );
};
