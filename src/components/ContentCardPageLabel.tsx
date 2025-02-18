import { ReactNode } from 'react';
import * as Pg from './stylePages';

interface PropsContentCardPageLabel {
  label?: string;
  children?: ReactNode;
};
export const ContentCardPageLabel = ({
  label,
  children
}: PropsContentCardPageLabel) => {
  return (
    <Pg.ContainerCardPageLabel>
      {label}
      {children}
    </Pg.ContainerCardPageLabel>
  )
};
