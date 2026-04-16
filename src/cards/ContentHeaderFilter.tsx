
//
import * as Sy from './stylesSystem';
interface PropsContentHeaderFilter {
  subtitulo?: string;
  //children?: React.ReactNode;
}
export const ContentHeaderFilter = ({ subtitulo }: PropsContentHeaderFilter) => {
  return (
    <Sy.ContainerHeaderFilter>
      {subtitulo}
    </Sy.ContainerHeaderFilter>
  );
};
