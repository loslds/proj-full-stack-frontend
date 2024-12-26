import * as Pg from './stylePages';
interface PropsContentCardPageMain {
  open?: boolean;
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
}

export const ContentCardPageMain = ({
  open,
  pwidth,
  children,
}: PropsContentCardPageMain) => {
  return (
    <Pg.ContainerCardPageMain open={open}>
      <Pg.ContainerCardPageMainFlex pwidth={pwidth}>
        {children}
      </Pg.ContainerCardPageMainFlex>
    </Pg.ContainerCardPageMain>
  );
};
