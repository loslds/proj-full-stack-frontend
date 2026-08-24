
import * as Sl from '../stylesSidebar';

interface PropsContentSBMain {
  width?: string
  children?: React.ReactNode;
};
export const ContentBarMainMenuSales: React.FC<PropsContentSBMain> = ({ width, children }) => {
  return (
    <Sl.ContainerBarMainMenu $width={width}>
      <Sl.ContainerBarMainFlex>
        {children}
      </Sl.ContainerBarMainFlex>
    </Sl.ContainerBarMainMenu>
  );
};
