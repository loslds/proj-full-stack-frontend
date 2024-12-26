import * as Pg from '../../components/stylePages';

interface PropsContentHearderMain {
  children?: React.ReactNode | JSX.Element;
}
export const ContentHearderMain = ({ children }: PropsContentHearderMain) => {
  return <Pg.ContainerHearder>{children}</Pg.ContainerHearder>;
};
