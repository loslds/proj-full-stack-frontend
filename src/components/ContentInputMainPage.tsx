import { ReactNode } from 'react';

import * as Pg from './styleComponents';

type TypeContentInputMainPage = {
  children?: ReactNode ;
};
export const ContentInputMainPage = ({
  children
}: TypeContentInputMainPage) => {
  return <Pg.ContainerInputMainPage>{children}</Pg.ContainerInputMainPage>;
};
