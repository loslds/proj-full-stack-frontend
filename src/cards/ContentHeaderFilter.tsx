
//
import * as Sy from './stylesSys';
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
