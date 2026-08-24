import * as H from './styledHeader';

interface PropsContentHeaderBtnImgResgate {
  imgbtnresgate?: string;
  titbtnresgate?: string;
  onClickbtnresgate?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderBtnImgResgate = ({
  imgbtnresgate,
  titbtnresgate,
  onClickbtnresgate,
}: PropsContentHeaderBtnImgResgate) => {
  return (
    <H.ContainerHeaderBtnImgResgate>
      <H.ButtonHeardImgResgate
        $imgbtnresgate={imgbtnresgate}
        title={titbtnresgate}
        onClick={onClickbtnresgate}
      />
    </H.ContainerHeaderBtnImgResgate>

  );
};

export default ContentHeaderBtnImgResgate;