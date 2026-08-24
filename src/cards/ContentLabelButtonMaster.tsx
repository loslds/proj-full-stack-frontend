
//
import { ReactNode } from 'react';
import * as Sy from './stylesSystem';

interface PropsContentLabelButtonMaster {
  children?: ReactNode;
};
export const ContentLabelButtonMaster = ({
  children
}: PropsContentLabelButtonMaster) => {
  return (
    <Sy.ContainerPanelButtonMaster>
      {children}
    </Sy.ContainerPanelButtonMaster>
  )
};

