
//C:\repository\proj-full-stack-frontend\src\cards\ContentMainFilter.tsx
import * as Sy from './stylesSys';
interface PropsContentMainFilter {
  pwidth?: string;
  children?: React.ReactNode;
}
export const ContentMainFilter = ({ pwidth, children }: PropsContentMainFilter) => {
  return (

    <Sy.ContainerMainFilter>
      <Sy.ContainerMainFilterFlex $pwidth={pwidth}>
        {children}
      </Sy.ContainerMainFilterFlex>
    </Sy.ContainerMainFilter>
  );
};
