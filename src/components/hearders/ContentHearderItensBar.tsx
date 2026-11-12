

import styled from 'styled-components';

// Container -> ContainerHeaderItensBar ( para Itens em BAR )
export const ContainerHeaderItensBar = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 100%;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  //background: transparent;
`;
/////////////////

// Content -> ContentHearderItensBar 
interface PropsContentHearderItensBar {
  children?: React.ReactNode ;
}
export const ContentHearderItensBar = ({
  children,
}: PropsContentHearderItensBar) => {
  return (
    <ContainerHeaderItensBar>
      {children}
    </ContainerHeaderItensBar>
  )
};

export default ContentHearderItensBar;
