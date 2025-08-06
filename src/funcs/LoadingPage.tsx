import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingPageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  div {
    width: 40px;
    height: 40px;
    border: 4px solid #000;
    border-top-color: #f00;
    animation: ${rotate} 1s linear infinite;
    border-radius: 50%;
  }
`;

export default function LoadingPage() {
  return (
    <LoadingPageContainer>
      <div />
    </LoadingPageContainer>
  );
}
