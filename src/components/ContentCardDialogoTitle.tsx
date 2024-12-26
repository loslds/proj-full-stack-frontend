import * as Pg from './stylePages';

interface PropsContentCardDialogoTitle {
  children?: React.ReactNode | JSX.Element;
}
export const ContentCardDialogoTitle = ({
  children
}: PropsContentCardDialogoTitle) => {
  return (
    <Pg.ContainerCardPage>
        {children}
    </Pg.ContainerCardPage>
  );
};
