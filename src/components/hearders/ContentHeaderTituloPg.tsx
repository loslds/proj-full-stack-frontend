
import styled from 'styled-components';

/////////////////////////////////
// Container -> ContainerHeaderTituloPg (Titulo ao  CENTRO da Pagina )
export const ContainerHeaderTitle = styled.div`
  border: none; 
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  min-height: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;color: ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
`;
/////////////////

// Contente -> ContentHeaderTituloPg (Titulo ao  CENTRO da Pagina )
interface PropsContentHeaderTitle {
  titulo?: string;
}
export const ContentHeaderTituloPg = ({ titulo }: PropsContentHeaderTitle) => {
  return (
    <ContainerHeaderTitle>
      <h1>{titulo}</h1>
    </ContainerHeaderTitle>
  );
};

export default ContentHeaderTituloPg;