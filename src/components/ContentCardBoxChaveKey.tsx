import * as Pg from './stylePages';

interface PropsContentCardBoxChaveKey {
  open?: boolean;
  pwidth?: string;
  p1width? : string;
  p1height? : string;
  children?: React.ReactNode | JSX.Element;
}

export const ContentCardBoxChaveKey = ({
  open,
  pwidth,
  p1width,
  p1height,
  children,
}: PropsContentCardBoxChaveKey) => {
  return (
    <Pg.ContainerCardBoxPage >
      <Pg.ContainerCardBoxPageFlex pwidth={pwidth}>
        <Pg.ContainerCardCollumForm open={open} p1width={p1width} p1height={p1height}>
          {children}
        </Pg.ContainerCardCollumForm>
      </Pg.ContainerCardBoxPageFlex>
    </Pg.ContainerCardBoxPage>
  );
};
