import * as H from './styledHeader';

interface PropsContentHeaderButtonAbortar {
  imgbtnaborta?: string;
  titbtnaborta?: string;
  onClickaborta?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderButtonAbortar = ({
  imgbtnaborta,
  titbtnaborta,
  onClickaborta,
}: PropsContentHeaderButtonAbortar) => {
  return (
    <H.ContainerHeaderButton>
      <H.ButtonHeaderImg
        img={imgbtnaborta}
        title={titbtnaborta}
        onClick={onClickaborta}
      />
    </H.ContainerHeaderButton>
  );
};
