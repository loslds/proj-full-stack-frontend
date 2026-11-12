import * as Pg from './styleComponents';

interface PropsContenCardBoxtInputChave {
  children?: React.ReactNode;
}
export const ContentCardBoxInputChave = ({ children }: PropsContenCardBoxtInputChave) => {
  return <Pg.ContainerCardBoxInputChave>{children}</Pg.ContainerCardBoxInputChave>;
};
