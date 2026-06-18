// C:\repository\proj-full-stack-frontend\src\components\contents\ContentImgLogoOnOff.tsx

import * as React from "react";
import * as H from "./styledHeader";

interface PropsContentHeaderButtonLgOnOff {
  $imglgoff?: string;
  $imglgon?: string;
  $logonoff?: boolean;
  titbtnlgonoff?: string;
  onClicklgooff?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ContentHeaderButtonLgOnOff = ({
  $imglgoff,
  $imglgon,
  $logonoff = false,
  titbtnlgonoff,
  onClicklgooff,
}: PropsContentHeaderButtonLgOnOff) => {
  return (
    <H.ContainerHeaderButtonLgOnOff $logonoff={$logonoff}>
      <H.ButtonDefImgLgOnOff
        type="button"
        $imglgoff={$imglgoff}
        $imglgon={$imglgon}
        $logonoff={$logonoff}
        title={titbtnlgonoff}
        onClick={onClicklgooff}
      />
    </H.ContainerHeaderButtonLgOnOff>
  );
};