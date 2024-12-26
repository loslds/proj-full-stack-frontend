import * as Pg from './stylePages';

interface PropsContentCardBoxPageCenter {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
}

export const ContentCardBoxPageCenter = ({
  pwidth,
  children,
}: PropsContentCardBoxPageCenter) => {
  return (
    <Pg.ContainerCardBoxPage >
      <Pg.ContainerCardBoxPageFlex pwidth={pwidth}>
        {children}
      </Pg.ContainerCardBoxPageFlex>
    </Pg.ContainerCardBoxPage>
  );
};
