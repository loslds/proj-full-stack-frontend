import { ReactNode } from 'react';
import * as Pg from './stylePages';

interface PropsContentSideMsgPagePanelBotton {
  bordas?: string;
  msg?: string;
  children?: ReactNode;
};
export const ContentSideMsgPagePanelBotton = ({
  bordas,
  msg,
  children
}: PropsContentSideMsgPagePanelBotton) => {
  return (
    <Pg.ContainerMsgSidePanelBottonText bordas={bordas} >
      <h3>{msg}</h3>
      {children}
    </Pg.ContainerMsgSidePanelBottonText>
  );
};