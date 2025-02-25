import { ReactNode } from 'react';

import * as Pg from './stylePages';

interface PropsContentBoxPageSelect {
  istitl?: boolean;
  title?: string;
  children?: ReactNode | JSX.Element;
}
export const ContentBoxPageSelect = ({
  istitl,
  title,
  children,
}: PropsContentBoxPageSelect) => {
  return (
    <Pg.ContainerBtnSRigthPage>
      {istitl ? <label>{title}</label> : null}
      {children}
    </Pg.ContainerBtnSRigthPage>
  );
};
