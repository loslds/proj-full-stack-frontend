
import styled from 'styled-components';
// inicio do ContentMainSystem 
export const ContainerMainSystem = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 50px;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;
interface PropsContainerCardBoxFlexPage {
  pwidth? : string;
};
export const ContainerMainSystemFlex = styled.div<PropsContainerCardBoxFlexPage>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  width: ${({ pwidth }) => pwidth || '100%'};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;
// fim do ContentMainSystem
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;
export const DivMessageLine = styled.div`
  margin-bottom: 6px;
  font-size: 14px;
`;

interface PropsDivStatus {
  success?: boolean;
}
export const DivStatus = styled.div<PropsDivStatus>`
  margin-top: 12px;
  font-weight: bold;
  color: ${({ success }) => (success ? 'green' : 'red')};
`;


