// C:\repository\proj-full-stack-frontend\src\layoutpadrao\MenuGaveta.tsx
//
// MENU LATERAL ("gaveta"): abre da esquerda para a direita por cima da página.
// Enquanto aberto:
//   - um fundo escuro cobre a página, então nada embaixo pode ser clicado;
//   - clicar no fundo, apertar Esc ou escolher um item fecha o menu;
//   - a rolagem da página de baixo fica travada;
//   - o teclado (Tab) fica preso dentro do menu e, ao fechar, o foco volta
//     para o botão que o abriu (acessibilidade).

import React from 'react';
import * as S from './styledLayoutPadrao';
import type { ItemMenu } from './tipos';

interface PropsMenuGaveta {
  aberto: boolean;
  onFechar: () => void;
  itens: ItemMenu[];
  titulo?: string;
}

/** Seletor dos elementos que podem receber o foco do teclado dentro do menu. */
const FOCAVEIS = 'button:not(:disabled), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export const MenuGaveta: React.FC<PropsMenuGaveta> = ({
  aberto,
  onFechar,
  itens,
  titulo = 'Menu',
}) => {
  const painelRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (!aberto) return;

    // Guarda quem tinha o foco antes de abrir, para devolver depois.
    const anterior = document.activeElement as HTMLElement | null;

    // Trava a rolagem da página de baixo.
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Leva o foco para o PAINEL (não para o botão de fechar): assim nenhum botão
    // aparece com contorno ao abrir, e o primeiro Tab já cai no botão de fechar.
    painelRef.current?.focus();

    // Esc fecha; Tab fica circulando só dentro do menu.
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onFechar();
        return;
      }
      if (e.key !== 'Tab' || !painelRef.current) return;

      const lista = Array.from(painelRef.current.querySelectorAll<HTMLElement>(FOCAVEIS));
      if (lista.length === 0) return;
      const inicio = lista[0];
      const fim = lista[lista.length - 1];

      // Foco no próprio painel + Shift+Tab: vai para o último item (não escapa do menu).
      if (e.shiftKey && (document.activeElement === inicio || document.activeElement === painelRef.current)) {
        e.preventDefault();
        fim.focus();
      } else if (!e.shiftKey && document.activeElement === fim) {
        e.preventDefault();
        inicio.focus();
      }
    };
    document.addEventListener('keydown', aoTeclar);

    // Limpeza ao fechar: destrava a rolagem, remove o ouvinte e devolve o foco.
    return () => {
      document.removeEventListener('keydown', aoTeclar);
      document.body.style.overflow = overflowAnterior;
      anterior?.focus();
    };
  }, [aberto, onFechar]);

  /** Executa a ação do item e fecha o menu. */
  const escolher = (item: ItemMenu) => {
    onFechar();
    item.onClick?.();
  };

  return (
    <>
      <S.MenuFundo $aberto={aberto} onClick={onFechar} aria-hidden="true" />
      <S.MenuPainel
        ref={painelRef}
        $aberto={aberto}
        role="dialog"
        aria-modal="true"
        aria-label={titulo}
        tabIndex={-1}
      >
        <S.MenuTopo>
          <span>{titulo}</span>
          <S.BotaoImagem type="button" onClick={onFechar} aria-label="Fechar menu">
            ✕
          </S.BotaoImagem>
        </S.MenuTopo>

        {itens.map((item) => (
          <S.MenuItemBotao
            key={item.id}
            type="button"
            disabled={item.desabilitado}
            onClick={() => escolher(item)}
          >
            {/* Imagem ANTES do nome: o olho acha o item pelo ícone e confirma pelo texto. */}
            {item.imagem && <img src={item.imagem} alt="" />}
            <span>{item.rotulo}</span>
          </S.MenuItemBotao>
        ))}
      </S.MenuPainel>
    </>
  );
};
