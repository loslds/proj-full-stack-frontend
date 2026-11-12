
import styled from 'styled-components';

///////////////////////////
// Container -> ContentCardBoxHearder
export const ContainerCardHeader = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border-bottom: 3px double;
  border-color: ${props => props.theme.colors.textColor};
  background-color: #9797977e;
  min-height: 25px;
  width: 100%;
  display: flex-
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

// Content -> ContentCardBoxHearder
///////////////////////////
interface PropsContentCardHeader {
  children?: React.ReactNode;
}
export const ContentCardHearder = ({ children }: PropsContentCardHeader) => {
  return (
    <ContainerCardHeader>
      {children}
    </ContainerCardHeader>
  )
};

export default ContentCardHearder;

