import * as H from './styledHeader';
interface PropsContentHearderRight {
  children?: React.ReactNode ;
}
export const ContentHearderRight = ({ children }: PropsContentHearderRight) => {
  return (
    <H.ContainerHeaderRight >
      <H.ContainerHearderRightFlex>{children}</H.ContainerHearderRightFlex>
    </H.ContainerHeaderRight>
  );
};
