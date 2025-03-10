import { ReactNode } from 'react';
import * as Pg from './stylePages';

interface PropsContentCardCollunsFormPage {
  open?: boolean;
  p1height?: string;
  p1width?: string;
  children?: ReactNode | JSX.Element;
};
export const ContentCardCollunsFormPage = ({
  open,
  p1height,
  p1width,
  children
}:PropsContentCardCollunsFormPage) => {
  return (
    <Pg.ContainerCardCollumForm open={open} p1height={p1height} p1width={p1width}>
      {children}
    </Pg.ContainerCardCollumForm>
  );
};
