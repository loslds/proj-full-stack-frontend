import * as S from './stylesSidebar';

interface PropsContentSBItensMenu {
  children?: React.ReactNode;
  onoff: boolean;
};

export const ContentSBItensMenu = ({
  onoff,
  children
}: PropsContentSBItensMenu) => {
  return (
    <S.ContainerSBItensMenu open={onoff}>{children}</S.ContainerSBItensMenu>
  );
};
