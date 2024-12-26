import * as S from './stylesSidebar';

type TypeContainerSBItensMenu = {
  children?: React.ReactNode | JSX.Element;
  onoff: boolean;
};

export const ContainerSBItensMenu = ({
  onoff,
  children
}: TypeContainerSBItensMenu) => {
  return (
    <S.ContainerItensModulo open={onoff}>{children}</S.ContainerItensModulo>
  );
};
