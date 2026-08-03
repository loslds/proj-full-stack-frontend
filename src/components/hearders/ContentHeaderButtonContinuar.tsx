import * as H from './styledHeader';

interface PropsContentHeaderButtonContinuar {
  $imgbtncont?: string;
  $titbtncont?: string;
  onclickconti?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderButtonContinuar = ({
  $imgbtncont,
  $titbtncont,
  onclickcont
}: PropsContentHeaderButtonContinuar) => {
  return (
    <H.ContainerHeaderButton>
      <H.ButtonHeaderImg
        img={$imgbtncont}
        title={$titbtncont}
        onClick={onclickcont}
      />
    </H.ContainerHeaderButton>
  );
};
