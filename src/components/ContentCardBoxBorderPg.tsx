import * as Pg from './stylePages';

interface PropsContentCardBoxBorderPg {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
}

export const ContentCardBoxBorderPg = ({
  pwidth,
  children,
}: PropsContentCardBoxBorderPg) => {
  return (
    <Pg.ContainerCardBoxBorderPg pwidth={pwidth}>
      <Pg.ContainerCardBoxBorderPgFlex>
        {children}
      </Pg.ContainerCardBoxBorderPgFlex>
    </Pg.ContainerCardBoxBorderPg>
  );
};
