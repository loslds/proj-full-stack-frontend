
import styled from 'styled-components';

//import btn_def_q_default from '../../../assets/defaults/btn/btn_def_q_default.svg';


// Container -> ContainerModalCardCenter (Main Card em Header) 
export const ContainerModalCardCenter = styled.div`
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

// Content -> ContentModalCardCenter (Main Card em Header)
interface PropsModalCardCenter {
  children?: React.ReactNode;
}
export const ModalCardCenter = ({ children }: PropsModalCardCenter) => {
  return (
    <ContainerModalCardCenter>
      {children}
    </ContainerModalCardCenter>
  );
};

export default ModalCardCenter;
////////////////////////////