

import styled from 'styled-components';

// Content -> ContainerModal
export const ContainerModalPage = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  position: absolute;
  border: 0px;
  z-index: 1000;
  color: ${props => props.theme.colors.textColor};
  background-color: transparent;
  //rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: normal;
  font-family: 'Courier New', Courier, monospace;
  h1,
  h2,
  h3,
  h4 {
    margin: 2px 2px 2px 2px;
    padding: 2px 2px 2px 2px;
    text-decoration-color: #727272;
  }
  h1 {
    text-decoration: 3px underline;
  }
  h2 {
    text-decoration: 2px underline;
  }
  h3 {
    text-decoration: 1.5px underline;
  }
  h4 {
    text-decoration: 1px underline;
  }
  li {
    list-style-type: none;
    margin-left: 15px;
  }
`;

// Content -> ContentModal
interface PropsContentModalPage {
  children?: React.ReactNode;
};

export const ContentModalPage = ({ children }: PropsContentModalPage) => {
  return (
    <ContainerModalPage>
        {children}
    </ContainerModalPage>
  );
};

export default ContentModalPage;
//////////////////////