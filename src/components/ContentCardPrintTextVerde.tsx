import { ReactNode } from 'react';
import * as Pg from './styleComponents';

interface PropsContentCardPrintTextVerde {
  children?: ReactNode;
};
export const ContentCardPrintTextVerde = ({
  children
}: PropsContentCardPrintTextVerde) => {
  return <Pg.ContainerCardPrintTextVerde>{children}</Pg.ContainerCardPrintTextVerde>;
};
