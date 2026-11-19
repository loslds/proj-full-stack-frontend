// C:\repository\proj-full-stack-frontend\src\layoutpadrao\RodapePadrao.tsx
//
// RODAPÉ: à esquerda a mensagem do que a página está fazendo; à direita os
// botões de ação (voltar, continuar, sair...), definidos por cada página.

import React from 'react';
import * as S from './styledLayoutPadrao';
import type { AcaoRodape } from './tipos';

interface PropsRodapePadrao {
  mensagem?: string;
  acoes?: AcaoRodape[];
}

export const RodapePadrao: React.FC<PropsRodapePadrao> = ({ mensagem, acoes = [] }) => (
  <S.Rodape>
    {/* aria-live: leitores de tela anunciam a mensagem quando ela muda. */}
    <S.RodapeMensagem aria-live="polite">{mensagem}</S.RodapeMensagem>

    <S.RodapeAcoes>
      {acoes.map((acao) => (
        <S.RodapeBotao
          key={acao.id}
          type="button"
          disabled={acao.desabilitado}
          onClick={acao.onClick}
        >
          {acao.imagem && <img src={acao.imagem} alt="" />}
          <span>{acao.rotulo}</span>
        </S.RodapeBotao>
      ))}
    </S.RodapeAcoes>
  </S.Rodape>
);
