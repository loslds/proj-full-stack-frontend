
import * as H from './styledHeader';

interface PropsContentHeaderButtonMaster {
  mstonoff?: boolean;
  imgbtnmst?: string;
  titbtnmst?: string;
  onClickmst?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderButtonMaster = ({
  mstonoff,
  imgbtnmst,
  titbtnmst,
  onClickmst,
}: PropsContentHeaderButtonMaster) => {
  return (
    <H.ContainerHeaderButtonMaster mstonoff={mstonoff}>
      <H.ButtonHeaderImg
        img={imgbtnmst}
        title={titbtnmst}
        onClick={onClickmst}
      />
    </H.ContainerHeaderButtonMaster>
  );
};
