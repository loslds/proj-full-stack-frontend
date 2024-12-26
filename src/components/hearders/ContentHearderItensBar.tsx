import * as Pg from '../../components/stylePages';

interface PropsContentHearderItensBar {
  children?: React.ReactNode | JSX.Element;
}
export const ContentHearderItensBar = ({
  children,
}: PropsContentHearderItensBar) => {
  return <Pg.ContainerHeaderItensBar>{children}</Pg.ContainerHeaderItensBar>;
};
