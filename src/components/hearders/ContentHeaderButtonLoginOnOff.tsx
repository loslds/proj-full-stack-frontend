import * as H from './styledHeader';

interface PropsContentHeaderButtonLoginOnOff {
  imgbtnlogin?: string;
  disabled?: boolean;
  titbtnlogin?: string;
  onClicklogin?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderButtonLoginOnOff = ({
  imgbtnlogin,
  disabled,
  titbtnlogin,
  onClicklogin,
}: PropsContentHeaderButtonLoginOnOff) => {
  return (
    <H.ContainerHeaderButton>
      <H.ButtonDefImgEnabledOnOffPg
        img={imgbtnlogin}
        disabled={disabled}
        title={titbtnlogin}
        onClick={onClicklogin}
      />
    </H.ContainerHeaderButton>
  );
};
