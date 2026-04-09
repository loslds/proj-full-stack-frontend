import * as Pg from './stylePages';

import { ContentCardDialogoTitle } from './ContentCardDialogoTitle';

interface PropsContentCardBoxDialogo {
  titulo?: string;
  children?: React.ReactNode ;
}
export const ContentCardBoxDialogo = ({
  titulo,
  children,
}: PropsContentCardBoxDialogo) => {
  return (
    <Pg.ContainerCardPage>
      <ContentCardDialogoTitle> titulo={titulo} </ContentCardDialogoTitle>
      {children}
    </Pg.ContainerCardPage>
  );
};
