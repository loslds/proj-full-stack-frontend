
import styled from 'styled-components';


// Conntent  -> ContainerMainColumn antes ContainerSysMainItens
export const ContainerMainColumn = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  width: '100%';
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  font-size: 14px;
`;
//////////////////////////

// Conntent  -> ContentMainColumn antes ContentSysMainItens
interface PropsContentMainColumn {
  children?: React.ReactNode;
}
export const ContentMainColumn = ({ children }: PropsContentMainColumn) => {
  return (
    <ContainerMainColumn>
      {children}
    </ContainerMainColumn>
  );
};

export default ContentMainColumn;
//////////////////////