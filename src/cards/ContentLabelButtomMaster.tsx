
//
import { ReactNode } from 'react';
import * as Sy from './stylesSystem';

interface PropsContentLabelButtomMaster {
  children?: ReactNode;
};
export const ContentLabelButtomMaster = ({
  children
}: PropsContentLabelButtomMaster) => {
  return (
    <Sy.ContainerPanelButtonMaster>
      {children}
    </Sy.ContainerPanelButtonMaster>
  )
};

