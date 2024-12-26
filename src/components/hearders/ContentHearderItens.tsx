import * as Pg from '../../components/stylePages';

interface PropsContentHearderItens {
  children?: React.ReactNode | JSX.Element;
}
export const ContentHearderItens = ({ children }: PropsContentHearderItens) => {
  return <Pg.ContainerHeaderItens>{children}</Pg.ContainerHeaderItens>;
};
