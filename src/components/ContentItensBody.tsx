import * as Pg from './styleComponents';

type PropsContainerItensBody = {
  children?: React.ReactNode;
};
export const ContentItensBody = ({ children }: PropsContainerItensBody) => {
  return <Pg.ContainerBodyItensPage>{children}</Pg.ContainerBodyItensPage>;
};