
import * as S from './stylesSidebar';

interface PropsContentSBMain {
  $width?: string
  children?: React.ReactNode;
};

// alteração

export const ContentBarMainMenu: React.FC<PropsContentSBMain> = ({ $width, children }) => {
  return (
    <S.ContainerBarMainMenu $width={$width}>
      <S.ContainerBarMainFlex>
        {children}
      </S.ContainerBarMainFlex>
    </S.ContainerBarMainMenu>
  );
};
