
import React from 'react';
import styled from 'styled-components';

/** Logo padrão */
import lg_def_ope_default
  from '../assets/defaults/lg/lg_def_ope_default.svg';


// ============================================================
// CONTAINER
// ============================================================

interface PropsContainerCardImgLg {
  $height?: string;
  $width?: string;
}

export const ContainerCardImgLg =
  styled.div<PropsContainerCardImgLg>`

  border: none;
  border-radius: 5px;

  padding: 0;
  margin: 2px;

  height: ${({ $height }) => $height || '50px'};
  width: ${({ $width }) => $width || '120px'};

  background: transparent;

  color: ${({ theme }) => theme.colors.textColor};

  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;

  display: flex;
  flex-flow: nowrap;

  justify-content: center;
  align-items: center;
`;


// ============================================================
// BOTÃO DA LOGO
// ============================================================

interface PropsButtonCardImgLg {
  $img?: string;
}

export const ButtonCardImgLg =
  styled.button<PropsButtonCardImgLg>`

  border: none;

  margin: 2px 5px;

  height: 100%;
  width: 100%;

  color: ${({ theme }) => theme.colors.textColor};

  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;

  background-color: transparent;

  background-image: url(
    ${({ $img }) => $img || lg_def_ope_default}
  );

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  cursor: pointer;
  outline: none;

  display: flex;
  flex-flow: nowrap;

  justify-content: center;
  align-items: center;
`;


// ============================================================
// COMPONENTE
// ============================================================

interface PropsContentCardImgLg {
  heightlg?: string;
  widthlg?: string;

  imglg?: string;
  titlelg?: string;

  onClicklg?: () => void;

  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ContentCardImgLg = ({
  heightlg,
  widthlg,

  imglg,
  titlelg,

  onClicklg,

  onMouseEnter,
  onMouseLeave,
}: PropsContentCardImgLg) => {

  return (
    <ContainerCardImgLg
      $height={heightlg}
      $width={widthlg}
    >

      <ButtonCardImgLg
        $img={imglg}
        title={titlelg}
        onClick={onClicklg}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />

    </ContainerCardImgLg>
  );
};


export default ContentCardImgLg;