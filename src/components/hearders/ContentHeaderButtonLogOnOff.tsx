
// C:\repository\proj-full-stack-frontend\src\components\hearders\ContentHeaderButtonMaster.tsx
import * as H from './styledHeader';

interface PropsContentHeaderButtonLogOnOff {
  logonoff?: boolean;
  imgbtnlog?: string;
  titbtnlog?: string;
  onClicklog?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderButtonLogOnOff = ({
  logonoff,
  imgbtnlog,
  titbtnlog,
  onClicklog,
}: PropsContentHeaderButtonLogOnOff) => {
  return (
    <H.ContainerHeaderButtonLogin logonoff={logonoff ?? false}>
      <H.ButtonHeaderImg
        img={imgbtnlog}
        title={titbtnlog}
        onClick={onClicklog}
      />
    </H.ContainerHeaderButtonLogin>
  );
};

