import * as Pg from './stylePages';

interface PropsContentPages {
  children?: React.ReactNode | JSX.Element;
};
export const ContentPages = ({ children }: PropsContentPages ) => {
  return (
    <Pg.ContainerPg>
      <Pg.ContainerFlexPg>{children}</Pg.ContainerFlexPg>
    </Pg.ContainerPg>
  );
};
