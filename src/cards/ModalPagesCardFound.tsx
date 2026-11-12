
import React from 'react';

import { ContentModalPage } from '../components/pages/stylespage/ContentModalPage';
import { ContentBoxModalFlexPage } from '../components/pages/stylespage/ContentBoxModalFlexPage';
import { ContentCardHearder } from '../components/pages/stylespage/ContainerCardHeader';
import { ContentModalTitle } from '../components/pages/stylespage/ContentModalTitle';
import { ContentButtonModal } from '../components/pages/stylespage/ContentButtonModal';

interface ModalPagesCardFound {
  btop?: string;
  bwidth?: string;
  bheight?: string;

  titmodal?: string;

  widthbtn?: string;
  heightbtn?: string;
  
  imgbtn?: string;
  titbtn?: string;
  onclose?: () => void;
  
  children?: React.ReactNode ;
}

export const ModalPagesCardFound = ({
  btop,
  bwidth,
  bheight,

  titmodal,

  widthbtn,
  heightbtn,

  imgbtn,
  titbtn,
  onclose,
  
  children
  
}: ModalPagesCardFound) => {
  return (
    <ContentModalPage>
      <ContentBoxModalFlexPage btop={btop} bwidth={bwidth} bheight={bheight}>
        <ContentCardHearder>
          <ContentModalTitle titmodal={titmodal} />
          <ContentButtonModal heightbtn={heightbtn} widthbtn={widthbtn} imgbtn={imgbtn} titbtn={titbtn} onclose={onclose}/>
          {children}
        </ContentCardHearder>
      </ContentBoxModalFlexPage>
    </ContentModalPage>
  );
};

export default ModalPagesCardFound;
///////////////////////////////