

// C:\repository\proj-full-stack-frontend\src\components\sidebar\ContentBarButtonGreenMenu.tsx
import * as S from './stylesSidebar';

interface PropsContentBarButtonYelowMenu {
  $open: boolean;
  $width?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  titulo?: string;
}
export const ContentBarButtonYelowMenu = ({
  $open,
  $width,
  titbtn,
  titulo,
  onClick,
}: PropsContentBarButtonYelowMenu) => {
  return (
    <S.ContainerButtonYelowMenu $open={$open} $width={$width}>
      <S.ButtonDefaultYelowMenu title={titbtn} onClick={onClick}>
        <label>{titulo}</label>
      </S.ButtonDefaultYelowMenu>
    </S.ContainerButtonYelowMenu>
  );
};
