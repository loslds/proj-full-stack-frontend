import * as H from './styledHeader';

interface PropsContentHeaderButtonCont {
  $imgbtncont?: string;
  $titbtncont?: string;
  onClickcont?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderButtonCont = ({
  $imgbtncont,
  $titbtncont,
  onClickcont,
}: PropsContentHeaderButtonCont) => {
  return (
    <H.ContainerHeaderButton>
      <H.ButtonHeaderImg
        img={$imgbtncont}
        title={$titbtncont}
        onClick={onClickcont}
      />
    </H.ContainerHeaderButton>
  );
};
