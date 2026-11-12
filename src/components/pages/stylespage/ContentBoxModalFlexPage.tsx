
import styled from 'styled-components';

//* Containers -> ContentCardModal
interface PropsContainerBoxModalFlexPage {
  $top?: string;
  $width?: string;
  $height?: string;
}
export const ContainerBoxModalFlexPage = styled.div<PropsContainerBoxModalFlexPage>`
  top: ${({ $top }) => $top || '10px'};
  border-bottom: 3px double #727272;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: ${({ $width }) => $width || '30px'};
  height: ${({ $height }) => $height || '30px'};
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 16px;
  font-style: normal;
  color: ${props => props.theme.colors.textColor};
  background-color: #e9e9e9c5;
`;
//*
export const ContainerBoxModalFlex = styled.div`
  border: 3px silver groove ;
  padding: 3px 0px 0px 10px;
  margin: 0px 0px 0px 0px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: wrap;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  //align-items: center;
  color: ${props => props.theme.colors.textColor};
  background-color: transparent;
`;

//* Content -> ContentCardModal
interface PropsContentBoxModalFlexPage {
  btop?: string;
  bwidth?: string;
  bheight?: string;
  children?: React.ReactNode;
};

export const ContentBoxModalFlexPage = ({ 
  btop,
  bwidth,
  bheight,
  children 
}: PropsContentBoxModalFlexPage) => {
  return (
    <ContainerBoxModalFlexPage $top={btop} $width={bwidth} $height={bheight} >
      <ContainerBoxModalFlex>
        {children}
      </ContainerBoxModalFlex>
    </ContainerBoxModalFlexPage>
  );
};

export default ContentBoxModalFlexPage;
//////////////////////////////////////
