import * as H from './styledHeader';

interface PropsContentHeaderTitle {
  title?: string;
}
export const ContentHeaderTitle = ({ title }: PropsContentHeaderTitle) => {
  return (
    <H.ContainerTitleHeader>
      <h1>{title}</h1>
    </H.ContainerTitleHeader>
  );
};
