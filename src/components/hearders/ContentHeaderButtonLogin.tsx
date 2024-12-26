import * as H from './styledHeader';

interface PropsContentHeaderButtonLogin {
  imgbtnlogin?: string;
  titbtnlogin?: string;
  onClicklogin?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderButtonLogin = ({
  imgbtnlogin,
  titbtnlogin,
  onClicklogin,
}: PropsContentHeaderButtonLogin) => {
  return (
    <H.ContainerHeaderButton>
      <H.ButtonHeaderImg
        img={imgbtnlogin}
        title={titbtnlogin}
        onClick={onClicklogin}
      />
    </H.ContainerHeaderButton>
  );
};
