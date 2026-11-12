
import styled from 'styled-components';

// Container lado Direito HEADER (Botões)
export const ContainerHeaderRight = styled.div`
  border: 2px solid;
  border-radius: 8px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 0px 2px 0px 2px;
  //background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
`;
export const ContainerHearderRightFlex = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 100%;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;
///////////////////

// Content  -> ContentHearderRight ->  para lado diteito
interface PropsContentHearderRight {
  children?: React.ReactNode ;
}
export const ContentHearderRight = ({ children }: PropsContentHearderRight) => {
  return (
    <ContainerHeaderRight>
      <ContainerHearderRightFlex>
        {children}
      </ContainerHearderRightFlex>
    </ContainerHeaderRight>
  );
};

export default ContentHearderRight;
