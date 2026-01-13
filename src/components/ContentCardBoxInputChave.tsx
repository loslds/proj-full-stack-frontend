import * as Pg from './stylePages';

interface PropsContenCardBoxtInputChave {
  children?: React.ReactNode;
}
export const ContentCardBoxInputChave = ({ children }: PropsContenCardBoxtInputChave) => {
  return <Pg.ContainerCardBoxInputChave>{children}</Pg.ContainerCardBoxInputChave>;
};
