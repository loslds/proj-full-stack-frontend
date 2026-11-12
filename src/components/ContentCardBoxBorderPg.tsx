import * as Pg from './styleComponents';

interface PropsContentCardBoxBorderPg {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
}

export const ContentCardBoxBorderPg = ({
  pwidth,
  children,
}: PropsContentCardBoxBorderPg) => {
  return (
    <Pg.ContainerCardBoxPg $pwidth={pwidth}>
      <Pg.ContainerCardBoxBorderPgFlex>
        {children}
      </Pg.ContainerCardBoxBorderPgFlex>
    </Pg.ContainerCardBoxPg>
  );
};
