// C:\repository\proj-full-stack-frontend\src\layoutpadrao\HeaderPadrao.tsx
//
// CABEÇALHO ÚNICO do sistema. Substitui os ~40 "Hearder*" quase idênticos.
//   Faixa fina:   [ícone 25px] [dia da semana, dd/mm/aa hh:mm]   (à direita)
//   Cabeçalho:    [logo]            [título]            [ajuda][extras][Switch]
// Os botões de ajuda e o Switch são padrão em toda página; o que for
// específico da página entra em "botoesExtras".

import React from 'react';
import Switch from 'react-switch';

import * as S from './styledLayoutPadrao';
import { RelogioData } from './RelogioData';
import type { ConfigPagina } from './tipos';

import btnAjuda from '@/assets/defaults/btn/btn_def_c_help.svg';

interface PropsHeaderPadrao {
  config: ConfigPagina;
  temaEscuro: boolean;
  onAlternarTema: () => void;
  botoesExtras?: React.ReactNode;
}

export const HeaderPadrao: React.FC<PropsHeaderPadrao> = ({
  config,
  temaEscuro,
  onAlternarTema,
  botoesExtras,
}) => (
  <>
    <S.FaixaTopo>
      {/* /jr.ico vem da pasta public: o navegador o serve direto. */}
      <S.IconeTopo src="/jr.ico" alt="" />
      <RelogioData />
    </S.FaixaTopo>

    <S.Cabecalho>
      <S.CabecalhoEsquerda>
        {config.logo && (
          <S.LogoImg
            src={config.logo}
            alt={config.titleLogo ?? 'Logo'}
            title={config.titleLogo}
            onClick={config.onClickLogo}
          />
        )}
      </S.CabecalhoEsquerda>

      <S.CabecalhoTitulo>{config.titulo}</S.CabecalhoTitulo>

      <S.CabecalhoDireita>
        {/* Da esquerda para a direita: ajuda da página, extras da página, Switch. */}
        <S.BotaoImagem
          type="button"
          title={config.titleAjuda ?? 'Ajuda da página'}
          aria-label={config.titleAjuda ?? 'Ajuda da página'}
          onClick={config.onClickAjuda}
          disabled={!config.onClickAjuda}
        >
          <img src={btnAjuda} alt="" />
        </S.BotaoImagem>

        {botoesExtras}

        <Switch
          onChange={onAlternarTema}
          checked={temaEscuro}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={50}
          handleDiameter={25}
          onHandleColor="#21ba02"
          offHandleColor="#fa140c"
          onColor="#b4b5b4"
          offColor="#b0b0b0"
          borderRadius={10}
          aria-label="Alternar tema claro e escuro"
        />
      </S.CabecalhoDireita>
    </S.Cabecalho>
  </>
);
