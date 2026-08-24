import { ReactNode } from 'react';
import * as Pg from '../stylePages';


interface PropsContentSideMsgPagePanelBotton {
  bordas?: string;
  label?: string;
  msg?: string;
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
      {msg ? <h3>{msg}</h3> : null}
      {children}
    </Pg.ContainerMsgSidePanelBottonText>
  );
};