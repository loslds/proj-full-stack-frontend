import * as S from './stylesSidebar';

type TypeContainerSBItensLogado = {
  open?: boolean;
  children?: React.ReactNode | JSX.Element;
};
export const ContainerSBItensLogado = ({
  open,
  children
}: TypeContainerSBItensLogado) => {
  return <S.ContainerItensLogon open={open}>{children}</S.ContainerItensLogon>;
};
