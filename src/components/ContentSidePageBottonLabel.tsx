import { ReactNode } from 'react';

import * as Pg from './stylePages';

interface PropsContentSidePageBottonLabel {
  open?: boolean;
  istitl?: boolean;
  title?: string;
  children?: ReactNode | JSX.Element;
}
export const ContentSidePageBottonLabel = ({
  open,
  istitl,
  title,
  children
}: PropsContentSidePageBottonLabel) => {
  return (
    <Pg.ContainerBtnSRigthPage open={open}>
      {istitl ? <label>{title}</label> : null}
      {children}
    </Pg.ContainerBtnSRigthPage>
  );
};
