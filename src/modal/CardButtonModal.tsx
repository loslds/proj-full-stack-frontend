import React from 'react';

import * as M from './stylesModal';

interface PropsButtonModal {
  imgbm?: string;
  titbm?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const CardButtonModal = ({
  imgbm,
  titbm,
  onClick,
}: PropsButtonModal) => {
  return <M.ButtonImgModal img={imgbm} title={titbm} onClick={onClick} />;
};
