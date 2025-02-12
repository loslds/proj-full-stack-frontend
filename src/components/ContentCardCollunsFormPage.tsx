import { ReactNode } from 'react';
import * as Pg from './stylePages';

interface PropsContentCardCarCollunsFormPage {
  open?: boolean;
  pheight?: string;
  pwidth?: string;
  children?: ReactNode | JSX.Element;
};
export const ContentCardCarCollunsFormPage = ({
  open,
  pheight,
  pwidth,
  children
}:PropsContentCardCarCollunsFormPage) => {
  return (
    <Pg.ContainerCardCollumForm open={open} pheight={pheight} pwidth={pwidth}>
      {children}
    </Pg.ContainerCardCollumForm>
  );
};
