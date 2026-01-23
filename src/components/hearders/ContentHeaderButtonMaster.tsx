
import * as H from './styledHeader';

interface PropsContentHeaderButtonMaster {
  imgbtnmst?: string;
  titbtnmst?: string;
  onClickmst?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderButtonMaster = ({
  imgbtnmst,
  titbtnmst,
  onClickmst,
}: PropsContentHeaderButtonMaster) => {
  return (
    <H.ContainerHeaderButton>
      <H.ButtonHeaderImg
        img={imgbtnmst}
        title={titbtnmst}
        onClick={onClickmst}
      />
    </H.ContainerHeaderButton>
  );
};
