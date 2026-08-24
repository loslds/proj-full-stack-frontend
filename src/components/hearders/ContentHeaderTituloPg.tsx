import * as H from './styledHeader';

interface PropsContentHeaderTitle {
  titulo?: string;
}
export const ContentHeaderTituloPg = ({ titulo }: PropsContentHeaderTitle) => {
  return (
    <H.ContainerHeaderTitle>
      <h1>{titulo}</h1>
    </H.ContainerHeaderTitle>
  );
};

export default ContentHeaderTituloPg;