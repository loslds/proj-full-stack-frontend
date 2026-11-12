

import styled from 'styled-components';

// Container -> ContentHearderItens
interface PropsContentHearderItens {
  children?: React.ReactNode ;
}
export const ContentHearderItens = ({ children }: PropsContentHearderItens) => {
  return <ContainerHeaderItens>{children}</ContainerHeaderItens>;
};

// Container -> ContainerHeaderItens
export const ContainerHeaderItens = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border: 2px solid;
  border-radius: 8px;
  border-color: ${props => props.theme.colors.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;