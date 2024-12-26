import * as H from './styledHeader';

interface PropsContentHeaderButtonSys {
  imgsys?: string;
  titlesys?: string;
  onClicksys?: React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentHeaderButtonSys = ({
  imgsys,
  titlesys,
  onClicksys,
}: PropsContentHeaderButtonSys) => {
  return (
    <H.ContainerImgSys>
      <H.ButtonPagesImgSys
        img={imgsys}
        title={titlesys}
        onClick={onClicksys}
      />
    </H.ContainerImgSys>
  );
};
export default ContentHeaderButtonSys;
