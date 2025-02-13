import { ReactNode } from 'react';
import * as Pg from './stylePages';

interface PropsContentCardCarCollunsFormPage {
  open?: boolean;
  p1height?: string;
  p1width?: string;
  children?: ReactNode | JSX.Element;
};
export const ContentCardCarCollunsFormPage = ({
  open,
  p1height,
  p1width,
  children
}:PropsContentCardCarCollunsFormPage) => {
  return (
    <Pg.ContainerCardCollumForm open={open} p1height={p1height} p1width={p1width}>
      {children}
    </Pg.ContainerCardCollumForm>
  );
};
