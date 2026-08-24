
// C:\repository\proj-full-stack-frontend\src\components\hearders\ContentHeaderButtonMaster.tsx
import * as S from './styledHeader';

interface PropsContentHeaderBtnImgLoginOff {
  loginoff?: boolean;
  imgbtnloginoff?: string;
  titbtnloginoff?: string;
  onClickbtnloginoff?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderBtnImgLoginOff = ({
  loginoff,
  imgbtnloginoff,
  titbtnloginoff,
  onClickbtnloginoff,
}: PropsContentHeaderBtnImgLoginOff) => {
  return (
    <S.ContainerHeaderBtnImgLoginOff $loginoff={loginoff ?? false}>
      <S.ButtonHeardImgLoginOff
        type="button"
        $imgbtnloginoff={imgbtnloginoff}
        title={titbtnloginoff}
        onClick={onClickbtnloginoff}
      />
    </S.ContainerHeaderBtnImgLoginOff>
  );
};

export default ContentHeaderBtnImgLoginOff;