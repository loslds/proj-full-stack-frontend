

import * as H from './styledHeader';

interface PropsContentHeaderButtonAbortar {
  imgbtnaborta?: string;
  titbtnaborta?: string;
  onClickaborta?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderBtnImgSair = ({
  imgbtnaborta,
  titbtnaborta,
  onClickaborta,
}: PropsContentHeaderButtonAbortar) => {
  return (
    <H.ContainerBtnImgSair>
      <H.ButtonImgSair
        $imgbtnsair={imgbtnaborta}
        title={titbtnaborta}
        onClick={onClickaborta}
      />
    </H.ContainerBtnImgSair>
  );
};

export default ContentHeaderBtnImgSair;