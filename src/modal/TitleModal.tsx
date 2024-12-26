import * as M from './stylesModal';

interface PropsTitleModal {
  titulo?: string;
};
export const TitleModal = ({ titulo }: PropsTitleModal) => {
  return (
    <M.ContainerModalTitle>{<h3>{titulo}</h3>}</M.ContainerModalTitle>
  );
};
