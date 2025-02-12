import { ReactNode } from 'react';
import * as Pg from './stylePages';

interface PropsContentCardPrintTextVerde {
  children?: ReactNode;
};
export const ContentCardPrintTextVerde = ({
  children
}: PropsContentCardPrintTextVerde) => {
  return <Pg.ContainerCardPrintTextVerde>{children}</Pg.ContainerCardPrintTextVerde>;
};
