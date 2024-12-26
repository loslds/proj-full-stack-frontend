import { ReactNode } from 'react';

import * as Pg from './stylePages';

interface PropsContentSidePageBottonLabel {
  istitl?: boolean;
  title?: string;
  children?: ReactNode | JSX.Element;
}
export const ContentSidePageBottonLabel = ({
  istitl,
  title,
  children,
}: PropsContentSidePageBottonLabel) => {
  return (
    <Pg.ContainerBtnSRigthPage>
      {istitl ? <label>{title}</label> : null}
      {children}
    </Pg.ContainerBtnSRigthPage>
  );
};
