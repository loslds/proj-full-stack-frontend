import * as H from './styledHeader';

interface PropsContentHeaderButtonHelp {
  imgbtnhlp?: string;
  titbtnhlp?: string;
  onClickhlp?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderButtonHelp = ({
  imgbtnhlp,
  titbtnhlp,
  onClickhlp,
}: PropsContentHeaderButtonHelp) => {
  return (
    <H.ContainerHeaderButton>
      <H.ButtonHeaderImg
        img={imgbtnhlp}
        title={titbtnhlp}
        onClick={onClickhlp}
      />
    </H.ContainerHeaderButton>
  );
};
