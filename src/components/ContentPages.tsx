import * as Pg from './styleComponents';

interface PropsContentPages {
  children?: React.ReactNode;
};
export const ContentPages = ({ children }: PropsContentPages ) => {
  return (
    <Pg.ContainerPg>
      <Pg.ContainerFlexPg>{children}</Pg.ContainerFlexPg>
    </Pg.ContainerPg>
  );
};
