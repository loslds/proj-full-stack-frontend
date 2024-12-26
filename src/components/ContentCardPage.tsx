import * as Pg from './stylePages';
interface PropsContentCardPage {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
}

export const ContentCardPage = ({ pwidth, children }: PropsContentCardPage) => {
  return (
    <Pg.ContainerCardPage>
      <Pg.ContainerCardPageFlex pwidth={pwidth}>
        {children}
      </Pg.ContainerCardPageFlex>
    </Pg.ContainerCardPage>
  );
};
