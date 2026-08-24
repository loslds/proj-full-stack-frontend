

// C:\repository\proj-full-stack-frontend\src\components\sidebar\ContentBarButtonGreenMenu.tsx
import * as S from './stylesSidebar';

interface PropsContentBarButtonGreeMenu {
  $open: boolean;
  $width?: string;
  $isCor: boolean;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  titulo?: string;
}

export const ContentBarButtonGreenMenu = ({
  $open,
  $width,
  $isCor,
  titbtn,
  titulo,
  onClick,
}: PropsContentBarButtonGreeMenu) => {
  return (
    <S.ContainerButtonGreenMenu $open={$open} $width={$width} $isCor={$isCor}>
      <S.ButtonDefaultMenu title={titbtn} onClick={onClick}>
        <label>{titulo}</label>
      </S.ButtonDefaultMenu>
    </S.ContainerButtonGreenMenu>
  );
};
