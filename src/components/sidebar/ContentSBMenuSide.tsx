import * as S from './stylesSidebar';

interface PropsContentSBMenuSide {
  children?: React.ReactNode;
  onoff: boolean;
};

export const ContentSBMenuSide = ({
  onoff,
  children
}: PropsContentSBMenuSide) => {
  return (
    <S.ContainerSBItensMenu open={onoff}>{children}</S.ContainerSBItensMenu>
  );
};
