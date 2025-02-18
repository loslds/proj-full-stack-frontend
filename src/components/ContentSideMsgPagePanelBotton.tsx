import { ReactNode } from 'react';
import * as Pg from './stylePages';


interface PropsContentSideMsgPagePanelBotton {
  bordas?: string;
  label?: string;
  msg?: any;
  children?: ReactNode;
};
export const ContentSideMsgPagePanelBotton = ({
  bordas,
  label,
  msg,
  children
}: PropsContentSideMsgPagePanelBotton) => {
  return (
    <Pg.ContainerMsgSidePanelBottonText bordas={bordas} >
      <label>{label}</label>
      <h3>{msg}</h3>
      {children}
    </Pg.ContainerMsgSidePanelBottonText>
  );
};