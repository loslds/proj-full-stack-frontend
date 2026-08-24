
import * as S from './styledHeader';

interface PropsContentHearderImgLogo {
  imgbtnlogo?: string;
  titbtnlogo?: string;
  onClickbtnlogo?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHearderImgLogo = ({
  imgbtnlogo,
  titbtnlogo,
  onClickbtnlogo,
}: PropsContentHearderImgLogo) => {
  return (
    <S.ContainerHearderImgLogo>
      <S.ButtonHearderImgLogo
        type="button"
        $imgbtnlogo={imgbtnlogo}
        title={titbtnlogo}
        onClick={onClickbtnlogo}
      />
    </S.ContainerHearderImgLogo>
  );
};
export default ContentHearderImgLogo;

