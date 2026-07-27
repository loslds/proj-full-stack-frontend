
//
import { ReactNode } from 'react';
import * as Sy from './stylesSystem';

interface PropsContentLabelButtomLogin {
  children?: ReactNode;
};
export const ContentLabelButtomLogin = ({
  children
}: PropsContentLabelButtomLogin) => {
  return (
    <Sy.ContainerPanelButtonLogin>
      {children}
    </Sy.ContainerPanelButtonLogin>
  )
};

