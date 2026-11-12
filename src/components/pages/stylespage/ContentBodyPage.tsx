

import styled from 'styled-components';


//* Containers -> ContentBodyItensPageHome
export const ContainerBodyPage = styled.div`
  top: 0px;
  border: none;
  padding: 5px 5px 5px 5px;
  margin: 5px 5px 5px 5px;
  max-width: 100%;
  //min-height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  //background: transparent;
`;
//////////////////////////////////////

// Conntent  -> ContentBodyItensPageHome
type PropsContentBodyPage = {
  children?: React.ReactNode;
};
export const ContentBodyPage = ({ children }: PropsContentBodyPage) => {
  return <ContainerBodyPage>{children}</ContainerBodyPage>;
};

export default ContentBodyPage;



