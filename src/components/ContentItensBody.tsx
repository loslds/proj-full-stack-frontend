import * as Pg from './stylePages';

type PropsContainerItensBody = {
  children?: React.ReactNode;
};
export const ContentItensBody = ({ children }: PropsContainerItensBody) => {
  return <Pg.ContainerBodyItensPage>{children}</Pg.ContainerBodyItensPage>;
};