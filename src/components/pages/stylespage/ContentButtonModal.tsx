
import styled from 'styled-components';

import btn_def_q_default from '../../../assets/defaults/btn/btn_def_q_default.svg';

import React from 'react';


// CONTAINER DO BOTÃO
interface PropsContainerButtonModal {
  $height?: string;
  $width?: string;
}
export const ContainerButtonModal = styled.div<PropsContainerButtonModal>`
  border: 2px solid 
  border-color: ${({ theme }) => theme.colors.textColor};
  border-radius: 5px;
  padding: 0;
  margin: 2px;
  background: transparent;
  min-height: ${({ $height }) => $height || '45px'};
  width: ${({ $width }) => $width || '45px'};
  display: flex; flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${({ theme }) => theme.colors.textColor};
  &:hover {
    background-color: #e4e4e4;
  }
`;

// BOTÃO MODAL COM IMAGEM
interface PropsButtonModalImg {
  $img?: string;
}
export const ButtonModalImg =
  styled.button<PropsButtonModalImg>`
  border: none;
  margin: 2px 5px;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url( ${({ $img }) => $img || btn_def_q_default} );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  min-height: 45px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
/////////////////////////
// CONTENT BUTTON MODAL
interface PropsContentButtonModal {
  widthbtn?: string;
  heightbtn?: string;
  imgbtn?: string;
  titbtn?: string;
  onclose?: () => void;
  children?: React.ReactNode;
}
export const ContentButtonModal = ({
  widthbtn,
  heightbtn,
  imgbtn,
  titbtn,
  onclose,
  children,
}: PropsContentButtonModal) => {
  return (
    <ContainerButtonModal $width={widthbtn} $height={heightbtn} >
      <ButtonModalImg $img={imgbtn} title={titbtn} onClick={onclose} />
      {children}
    </ContainerButtonModal>
  );
};

export default ContentButtonModal;
//////////////////////////////////////

