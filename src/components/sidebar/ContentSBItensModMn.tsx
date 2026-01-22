import * as S from './stylesSidebar';

type TypeContainerSBItensModMn = {
  children?: React.ReactNode;
  onoffitem: boolean;
};

export const ContentSBItensModMn = ({
  onoffitem,
  children
}: TypeContainerSBItensModMn) => {
  return (
    <S.ContainerItensModBntMn open={onoffitem}>{children}</S.ContainerItensModBntMn>
  );
};
