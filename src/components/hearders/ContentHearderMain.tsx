//import * as Hdr from '../../components/stylePages';

import styled from 'styled-components';

interface PropsContentHearderMain {
  children?: React.ReactNode ;
}
export const ContentHearderMain = ({ children }: PropsContentHearderMain) => {
  return <ContainerHearderMain>{children}</ContainerHearderMain>;
};

// Container -> ContainerHearderMain ant->  ContainerHearder
export const ContainerHearderMain = styled.div`
  top: 0px;
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
`;


