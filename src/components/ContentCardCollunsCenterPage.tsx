import { ReactNode } from 'react';
import * as Pg from './stylePages';

type TypeCardCollunsCenterPage = {
  openccp?: boolean;
  pheight?: string;
  pwidth?: string;
  children?: ReactNode | JSX.Element;
};
export const ContentCardCollunsCenterPage = ({
  openccp,
  pheight,
  pwidth,
  children
}: TypeCardCollunsCenterPage) => {
  return (
    <Pg.ContainerCollunsCenterPage openccp={openccp} pheight={pheight} pwidth={pwidth}>
      {children}
    </Pg.ContainerCollunsCenterPage>
  );
};
