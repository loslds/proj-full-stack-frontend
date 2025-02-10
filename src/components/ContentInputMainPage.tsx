import { ReactNode } from 'react';

import * as Pg from './stylePages';

type TypeContentInputMainPage = {
  children?: ReactNode | JSX.Element;
};
export const ContentInputMainPage = ({
  children
}: TypeContentInputMainPage) => {
  return <Pg.ContainerInputMainPage>{children}</Pg.ContainerInputMainPage>;
};
