import * as S from './stylesSidebar';

type TypeContainerSBItensModMn = {
  children?: React.ReactNode | JSX.Element;
  onoff: boolean;
};

export const ContainerSBItensModMn = ({
  onoff,
  children
}: TypeContainerSBItensModMn) => {
  return (
    <S.ContainerItensModBntMn open={onoff}>{children}</S.ContainerItensModBntMn>
  );
};
