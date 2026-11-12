import { ReactNode } from 'react';
import * as Pg from './styleComponents';

interface PropsContentCardPrintTextVerm {
  children?: ReactNode;
};
export const ContentCardPrintTextVerm = ({
  children
}: PropsContentCardPrintTextVerm) => {
  return <Pg.ContainerCardPrintTextVerm>{children}</Pg.ContainerCardPrintTextVerm>;
};
