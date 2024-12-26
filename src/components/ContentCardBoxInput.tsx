import * as Pg from './stylePages';

interface PropsContenCardBoxtInput {
  children?: React.ReactNode;
}
export const ContentCardBoxInput = ({ children }: PropsContenCardBoxtInput) => {
  return <Pg.ContainerCardBoxInput>{children}</Pg.ContainerCardBoxInput>;
};
