import * as Pg from '../../components/stylePages';

interface PropsContentHearderItensBar {
  children?: React.ReactNode ;
}
export const ContentHearderItensBar = ({
  children,
}: PropsContentHearderItensBar) => {
  return <Pg.ContainerHeaderItensBar>{children}</Pg.ContainerHeaderItensBar>;
};
