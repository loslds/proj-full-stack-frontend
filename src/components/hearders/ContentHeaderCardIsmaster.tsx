
// C:\repository\proj-full-stack-frontend\src\components\hearders\ContentHeaderButtonMaster.tsx
import * as H from './styledHeader';

interface PropsContentHeaderCardIsmaster {
  mston?: boolean;
  pxheigth?: string;
  pxwidth?: string;
  strcor?: string;
}
export const ContentHeaderCardIsmaster = ({
  mston,
  strcor
}: PropsContentHeaderCardIsmaster) => {
  return (
    <H.ContainerHeaderCardIsmaster mston={mston ?? false}>
      <H.BullettIsmaster strcor ={strcor} />
    </H.ContainerHeaderCardIsmaster>
  );
};

