
import styled from 'styled-components';

// Container -> ContainerModalCardAround (Main Card em Header) 
export const ContainerCardModalAround = styled.div`
  border: none; 
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 0px;
  min-height: auto;
  overflow-y: auto;
  display: flex row;
  flex-wrap: wrap;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
  color: ${props => props.theme.colors.textColor};
  background-color: #e9e9e9c5;
`;
///////////////////////////

// Content -> ContentModalCardAround (Main Card em Header) 
interface PropsModalCardAround {
  children?: React.ReactNode;
}
export const ModalCardAround = ({ children }: PropsModalCardAround) => {
  return <ContainerCardModalAround>{children}</ContainerCardModalAround>;
};

export default ModalCardAround;
////////////////////////////
