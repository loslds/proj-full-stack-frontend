


import * as H from './styledHeader';

interface PropsContentHeaderButtonChk {
  imgbtnchk?: string;
  titbtnchk?: string;
  onClickchk?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderButtonChk = ({
  imgbtnchk,
  titbtnchk,
  onClickchk,
}: PropsContentHeaderButtonChk) => {
  return (
    <H.ContainerHeaderButton>
      <H.ButtonHeaderImg
        img={imgbtnchk}
        title={titbtnchk}
        onClick={onClickchk}
      />
    </H.ContainerHeaderButton>
  );
};
