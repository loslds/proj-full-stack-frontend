
import type { MouseEventHandler } from 'react';

import * as S from './styledHeader';

interface PropsContentHeaderBtnImgLoginOn {
  imgbtnloginon?: string;
  titbtnloginon?: string;
  disabledloginon?: boolean;
  onClickbtnloginon?: MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderBtnImgLoginOn = ({
  imgbtnloginon,
  titbtnloginon,
  disabledloginon = false,
  onClickbtnloginon,
}: PropsContentHeaderBtnImgLoginOn) => {
  return (
    <S.ContainerHeaderBtnImgLoginOn>
      <S.ButtonHeaderImgLoginOn
        type="button"
        $imgbtnloginon={imgbtnloginon}
        title={titbtnloginon}
        disabled={disabledloginon}
        onClick={onClickbtnloginon}
      />
    </S.ContainerHeaderBtnImgLoginOn>
  );
};
export default ContentHeaderBtnImgLoginOn;