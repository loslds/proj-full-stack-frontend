import * as S from './stylesSidebar';

type TypeContentSBMenuSide = {
  children?: React.ReactNode | JSX.Element;
  onoff: boolean;
};

export const ContentSBMenuSide = ({
  onoff,
  children
}: TypeContentSBMenuSide) => {
  return (
    <S.ContainerItensModulo open={onoff}>{children}</S.ContainerItensModulo>
  );
};
