import * as Pg from './styleComponents';
interface PropsContentCardBoxTitle {
  children?: React.ReactNode;
}
export const ContentCardBoxTitle = ({ children }: PropsContentCardBoxTitle) => {
  return <Pg.ContainerCardBoxTitle>{children}</Pg.ContainerCardBoxTitle>;
};
