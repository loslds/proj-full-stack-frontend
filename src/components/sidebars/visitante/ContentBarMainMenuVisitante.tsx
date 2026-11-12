
import * as Sl from '../stylesSidebar';

interface PropsContentBarMainMenuVisitante {
  width?: string
  children?: React.ReactNode;
};
export const ContentBarMainMenuVisitante: React.FC<PropsContentBarMainMenuVisitante> = ({ width, children }) => {
  return (
    <Sl.ContainerBarMainMenu $width={width}>
      <Sl.ContainerBarMainFlex>
        {children}
      </Sl.ContainerBarMainFlex>
    </Sl.ContainerBarMainMenu>
  );
};
