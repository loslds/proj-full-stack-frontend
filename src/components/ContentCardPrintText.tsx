import { ReactNode } from 'react';
import * as Pg from './styleComponents';

interface PropsContentCardPrintText {
  children?: ReactNode;
};
export const ContentCardPrintText = ({
  children
}: PropsContentCardPrintText) => {
  return <Pg.ContainerCardPrintText>{children}</Pg.ContainerCardPrintText>;
};
