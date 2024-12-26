import * as Pg from './stylePages';

import { ContentCardDialogoTitle } from './ContentCardDialogoTitle';

interface PropsContentCardBoxDialogo {
  titulo?: string;
  children?: React.ReactNode | JSX.Element;
}
export const ContentCardBoxDialogo = ({
  titulo,
  children,
}: PropsContentCardBoxDialogo) => {
  return (
    <Pg.ContainerCardPage>
      <ContentCardDialogoTitle />
      {children}
    </Pg.ContainerCardPage>
  );
};
