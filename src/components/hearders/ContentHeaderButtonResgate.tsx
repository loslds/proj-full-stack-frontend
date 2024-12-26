import * as H from './styledHeader';

interface PropsContentHeaderButtonResgate {
  imgbtnresg?: string;
  titbtnresg?: string;
  onClickresg?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderButtonResgate = ({
  imgbtnresg,
  titbtnresg,
  onClickresg,
}: PropsContentHeaderButtonResgate) => {
  return (
    <H.ContainerHeaderButton>
      <H.ButtonHeaderImg
        img={imgbtnresg}
        title={titbtnresg}
        onClick={onClickresg}
      />
    </H.ContainerHeaderButton>
  );
};
