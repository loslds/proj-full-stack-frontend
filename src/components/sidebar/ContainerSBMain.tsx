import * as S from './stylesSidebar';

type TypeContainerSBMain = {
  children?: React.ReactNode | JSX.Element;
};

export const ContainerSBMain = ({ children }: TypeContainerSBMain) => {
  return <S.ContainerSPanelMain>{children}</S.ContainerSPanelMain>;
};
