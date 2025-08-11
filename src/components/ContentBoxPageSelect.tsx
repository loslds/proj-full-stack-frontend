import { ReactNode } from 'react';

import * as Pg from './stylePages';

interface PropsContentBoxPageSelect {
  open?: boolean;
  istitl?: boolean;
  title?: string;
  children?: ReactNode;
}
export const ContentBoxPageSelect = ({
  open,
  istitl,
  title,
  children,
}: PropsContentBoxPageSelect) => {
  return (
    <Pg.ContainerBtnSRigthPage open={open}>
      {istitl ? <label>{title}</label> : null}
      {children}
    </Pg.ContainerBtnSRigthPage>
  );
};
