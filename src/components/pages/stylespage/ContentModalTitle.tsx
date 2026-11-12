
import styled from 'styled-components';

// Container -> ContainerModalTitle
///////////////////////////
export const ContainerModalTitle = styled.div`
  border: none; 
  padding: 0px auto;
  margin: 0px auto;
  min-height: 25px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color:${props => props.theme.colors.textColor};
  background-color: transparent;
`;
/////////////////////////////

// Content -> ContentCardBoxHearder
interface PropsContentModalTitle {
  titmodal?: string;
}
export const ContentModalTitle = ({ titmodal }: PropsContentModalTitle) => {
  return (
    <ContainerModalTitle>
      <h1>{titmodal}</h1>
    </ContainerModalTitle>
  )
};


export default ContentModalTitle;
//////////////////////