import * as Pg from './stylePages';
interface PropsContentCardBoxTitle {
  children?: React.ReactNode | JSX.Element;
}
export const ContentCardBoxTitle = ({ children }: PropsContentCardBoxTitle) => {
  return <Pg.ContainerCardBoxTitle>{children}</Pg.ContainerCardBoxTitle>;
};
