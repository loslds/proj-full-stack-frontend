import * as S from './styledHeader';

interface PropsContentHeardBtnImgHome {
  imgbtnhome?: string;
  titbtnhome?: string;
  onClickbtnhome?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHearderBtnImgHome = ({
  imgbtnhome,
  titbtnhome,
  onClickbtnhome,
}: PropsContentHeardBtnImgHome) => {
  return (
    <S.ContainerHeaderBtnImgHome>
      <S.ButtonHeardImgHome
        type="button"
        $imgbtnhome={imgbtnhome}
        title={titbtnhome}
        onClick={onClickbtnhome}
      />
    </S.ContainerHeaderBtnImgHome>
  );
};

export default ContentHearderBtnImgHome;