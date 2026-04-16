
import * as S from './stylesSidebar';

interface PropsContentBarMainItensMenus {
  $open?: boolean;
  children?: React.ReactNode;
};

export const ContentBarMainItensMenus: React.FC<PropsContentBarMainItensMenus> = ({ $open, children }) => {
  return (
    <S.ContainerBarMainItensMenus $open={$open}>
        {children}
    </S.ContainerBarMainItensMenus>
  );
};
