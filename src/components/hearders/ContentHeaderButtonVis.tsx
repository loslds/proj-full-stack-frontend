import * as H from './styledHeader';

interface PropsContentHeaderButtonVis {
  $imgbtnvis?: string;
  $titbtnvis?: string;
  onClickvis?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderButtonVis = ({
  $imgbtnvis,
  $titbtnvis,
  onClickvis,
}: PropsContentHeaderButtonVis) => {
  return (
    <H.ContainerHeaderButton>
      <H.ButtonHeaderImg
        img={$imgbtnvis}
        title={$titbtnvis}
        onClick={onClickvis}
      />
    </H.ContainerHeaderButton>
  );
};
