
// C:\repository\proj-full-stack-frontend\src\components\hearders\ContentHeaderButtonMaster.tsx
import * as H from './styledHeader';

interface PropsContentHeaderBtnImgMasterOff {
  masteroff?: boolean;
  imgbtnmasteroff?: string;
  titbtnmasteroff?: string;
  onClickbtnmasteroff?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderBtnImgMasterOff = ({
  masteroff,
  imgbtnmasteroff,
  titbtnmasteroff,
  onClickbtnmasteroff,
}: PropsContentHeaderBtnImgMasterOff) => {
  return (
    <H.ContainerHeaderBtnImgLogoffMaster $masteroff={masteroff ?? false}>
      <H.ButtonHeardImgMasterOff
        $imgbtnmasteroff={imgbtnmasteroff}
        title={titbtnmasteroff}
        onClick={onClickbtnmasteroff}
      />
    </H.ContainerHeaderBtnImgLogoffMaster>
  );
};

export default ContentHeaderBtnImgMasterOff;