import * as S from './styledHeader';

interface PropsContentHeardBtnImgHlpPg {
  imgbtnhlppg?: string;
  titbtnhlppg?: string;
  onClickbtnhlppg?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHearderBtnImgHlpPg = ({
  imgbtnhlppg,
  titbtnhlppg,
  onClickbtnhlppg,
}: PropsContentHeardBtnImgHlpPg) => {
  return (
    <S.ContainerHeaderBtnImgHlpPg>
      <S.ButtonHearderImgHlpPg
        type="button"
        $imgbtnhlppg={imgbtnhlppg}
        title={titbtnhlppg}
        onClick={onClickbtnhlppg}
      />
    </S.ContainerHeaderBtnImgHlpPg>
  );
};

export default ContentHearderBtnImgHlpPg;