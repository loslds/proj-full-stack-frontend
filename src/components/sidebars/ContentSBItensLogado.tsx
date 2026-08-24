import * as S from './stylesSidebar';

type TypeContainerSBItensLogado = {
  open?: boolean;
  children?: React.ReactNode;
};
export const ContainerSBItensLogado = ({
  open,
  children
}: TypeContainerSBItensLogado) => {
  return <S.ContainerItensLogon open={open}>{children}</S.ContainerItensLogon>;
};
