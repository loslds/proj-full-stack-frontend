
import React from 'react';

import { ContentModalPage } from './ContentModalPage';
import { ContentBoxModalFlexPage } from './ContentBoxModalFlexPage';
import { ContentCardHearder } from './ContainerCardHeader';
import { ContentModalTitle } from './ContentModalTitle';
import { ContentButtonModal } from './ContentButtonModal';

interface PropsModalPages {
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

export const ModalPage = ({
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
  
}: PropsModalPages) => {
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

export default ModalPage;
///////////////////////////////