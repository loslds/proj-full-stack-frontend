
import * as S from './stylesSidebar';

interface PropsContentDropdownMenu {
  $open: boolean;
  $width: string;
  children?: React.ReactNode;
};
export const ContentDropdownMenu : React.FC<PropsContentDropdownMenu> = ({ $open, $width, children }) => {
  return (
    <S.ContainerDropdownMenu $open={$open} $width={$width}>
        {children}
    </S.ContainerDropdownMenu>
  );
};
