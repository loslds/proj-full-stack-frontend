
//
import { ReactNode } from 'react';
import * as Pg from './stylePages';

interface PropsContentMainTitle {
  children?: ReactNode;
};
export const ContentMainTitle = ({
  children
}: PropsContentMainTitle) => {
  return <Pg.ContainerMainTitle>{children}</Pg.ContainerMainTitle>;
};

