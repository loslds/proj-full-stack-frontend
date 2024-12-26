import * as S from './stylesSidebar';

type PropsTitleMn = {
  children?: React.ReactNode | JSX.Element;
  onoff: boolean;
};

export const ContentMenuSide = ({ onoff, children }: PropsTitleMn) => {
  return (
    <S.ContainerItensModulo open={onoff}>{children}</S.ContainerItensModulo>
  );
};
