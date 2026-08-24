
//
import { ReactNode } from 'react';
import * as Sy from './stylesSystem';

interface PropsContentLabelButtonLogin {
  children?: ReactNode;
};
export const ContentLabelButtonLogin = ({
  children
}: PropsContentLabelButtonLogin) => {
  return (
    <Sy.ContainerPanelButtonLogin>
      {children}
    </Sy.ContainerPanelButtonLogin>
  )
};

