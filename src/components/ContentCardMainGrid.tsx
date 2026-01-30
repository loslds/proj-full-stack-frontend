

//
import * as Pg from './stylePages';
interface PropsContentCardMainGrig {
  pwidth?: string;
  children?: React.ReactNode;
}

export const ContentCardMainGrig = ({ pwidth, children }: PropsContentCardMainGrig) => {
  return (
    <Pg.ContainerCardMaiGrid>
      <Pg.ContainerCardMainFlexGrig pwidth={pwidth}>
        {children}
      </Pg.ContainerCardMainFlexGrig>
    </Pg.ContainerCardMaiGrid>
  );
};
