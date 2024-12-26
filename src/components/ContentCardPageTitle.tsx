import { ReactNode } from 'react';
import * as Pg from './stylePages';

interface PropsContentCardPageTitle {
  children?: ReactNode;
};
export const ContentCardPageTitle = ({
  children
}: PropsContentCardPageTitle) => {
  return <Pg.ContainerCardPageTitle>{children}</Pg.ContainerCardPageTitle>;
};
