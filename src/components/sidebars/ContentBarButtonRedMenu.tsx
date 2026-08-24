

// C:\repository\proj-full-stack-frontend\src\components\sidebar\ContentBarButtonGreenMenu.tsx
import * as S from './stylesSidebar';

interface PropsContentBarButtonRedMenu {
  $open: boolean;
  $width?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  titulo?: string;
}
export const ContentBarButtonRedMenu = ({
  $open,
  $width,
  titbtn,
  titulo,
  onClick,
}: PropsContentBarButtonRedMenu) => {
  return (
    <S.ContainerButtonRedFleschMenu $open={$open} $width={$width}>
      <S.ButtonDefaultMenu title={titbtn} onClick={onClick}>
        <label>{titulo}</label>
      </S.ButtonDefaultMenu>
    </S.ContainerButtonRedFleschMenu>
  );
};
