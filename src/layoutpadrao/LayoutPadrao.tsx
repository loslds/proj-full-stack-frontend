// C:\repository\proj-full-stack-frontend\src\layoutpadrao\LayoutPadrao.tsx
//
// LAYOUT ÚNICO do sistema: cabeçalho + barra do menu + conteúdo + rodapé,
// com o menu lateral por cima. Cada página só entrega a sua "config" e o
// conteúdo; o tema (claro/escuro) é guardado por quem usa o layout, porque
// o ThemeProvider precisa ficar FORA do layout para pintar tudo.

import React from 'react';

import * as S from './styledLayoutPadrao';
import { HeaderPadrao } from './HeaderPadrao';
import { MenuGaveta } from './MenuGaveta';
import { RodapePadrao } from './RodapePadrao';
import type { PropsLayoutPadrao } from './tipos';

import btnMenu from '@/assets/defaults/btn/btn_def_c_menuoff.svg';

export const LayoutPadrao: React.FC<PropsLayoutPadrao> = ({
  config,
  temaEscuro,
  onAlternarTema,
  mensagem,
  botoesExtras,
  children,
}) => {
  const [menuAberto, setMenuAberto] = React.useState(false);

  // useCallback: o MenuGaveta usa esta função num efeito; com referência
  // estável o efeito só roda quando o menu abre ou fecha de verdade.
  const fecharMenu = React.useCallback(() => setMenuAberto(false), []);
  const temMenu = (config.itensMenu?.length ?? 0) > 0;

  return (
    <S.Pagina>
      <HeaderPadrao
        config={config}
        temaEscuro={temaEscuro}
        onAlternarTema={onAlternarTema}
        botoesExtras={botoesExtras}
      />

      <S.BarraMenu>
        {temMenu && (
          <S.BotaoMenu
            type="button"
            aria-haspopup="dialog"
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto(true)}
          >
            <img src={btnMenu} alt="" />
            <span>Menu</span>
          </S.BotaoMenu>
        )}
      </S.BarraMenu>

      <S.Conteudo>{children}</S.Conteudo>

      <RodapePadrao mensagem={mensagem} acoes={config.acoesRodape} />

      {temMenu && (
        <MenuGaveta aberto={menuAberto} onFechar={fecharMenu} itens={config.itensMenu ?? []} />
      )}
    </S.Pagina>
  );
};
