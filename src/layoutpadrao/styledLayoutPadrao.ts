// C:\repository\proj-full-stack-frontend\src\layoutpadrao\styledLayoutPadrao.ts
//
// ESTILOS do layout padrão (styled-components).
// Todas as cores vêm do tema (themes/light.ts e themes/dark.ts), então
// trocar a cara do sistema é mexer nos temas, não aqui.

import styled, { css } from 'styled-components';

/** Alturas fixas, em um só lugar, para o resto do layout se apoiar nelas. */
export const ALTURA_FAIXA_TOPO = 32; // faixa fina: ícone + data/hora
export const ALTURA_CABECALHO = 45; // logo, título e botões
export const ALTURA_BARRA_MENU = 44; // barra com o botão MENU
export const ALTURA_ICONE_TOPO = 25; // ícone pequeno do canto

/** Camadas (z-index): o menu cobre tudo, a barra do menu e o rodapé cobrem o conteúdo. */
const CAMADA_BARRA = 10;
const CAMADA_MENU_FUNDO = 1000;
const CAMADA_MENU = 1001;

// ============================================================
// ESTRUTURA GERAL
// ============================================================

/**
 * Página inteira: ocupa toda a tela (sem a faixa central de ~800px de antes)
 * e empilha as partes em coluna: topo, cabeçalho, barra do menu, conteúdo, rodapé.
 */
export const Pagina = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.textColor};
`;

// ============================================================
// FAIXA FINA DO TOPO (ícone + data e hora, à direita)
// ============================================================

export const FaixaTopo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  height: ${ALTURA_FAIXA_TOPO}px;
  padding: 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  font-size: 12px;
`;

export const IconeTopo = styled.img`
  height: ${ALTURA_ICONE_TOPO}px;
  width: auto;
`;

export const DataHora = styled.time`
  white-space: nowrap;
  text-transform: capitalize;
`;

// ============================================================
// CABEÇALHO (logo | título | botões)
// ============================================================

/**
 * Três colunas: a do meio é "1fr" e as laterais têm o mesmo tamanho,
 * assim o título fica realmente centralizado mesmo com número de botões diferente.
 */
export const Cabecalho = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 8px;
  min-height: ${ALTURA_CABECALHO}px;
  padding: 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const CabecalhoEsquerda = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CabecalhoTitulo = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CabecalhoDireita = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

export const LogoImg = styled.img`
  height: ${ALTURA_CABECALHO - 10}px;
  width: auto;
  cursor: pointer;
`;

/** Botão só com imagem (ajuda e botões da página), com área de toque confortável. */
export const BotaoImagem = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 2px;
  border: 1px solid transparent;
  border-radius: 6px;
  background: transparent;
  /* O navegador não faz o botão herdar a cor do texto; sem isto o ✕ ficava preto no tema escuro. */
  color: inherit;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.hoverColor};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.textColor};
    outline-offset: 1px;
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

// ============================================================
// BARRA DO MENU (botão MENU)
// ============================================================

/**
 * "sticky": ao rolar uma página grande, a barra do menu continua no mesmo
 * lugar, no topo da janela, e o botão MENU não se perde.
 */
export const BarraMenu = styled.div`
  position: sticky;
  top: 0;
  z-index: ${CAMADA_BARRA};
  display: flex;
  align-items: center;
  gap: 8px;
  height: ${ALTURA_BARRA_MENU}px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.headerBackground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const BotaoMenu = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverColor};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.textColor};
    outline-offset: 1px;
  }
  img {
    height: 20px;
    width: 20px;
  }
`;

// ============================================================
// CONTEÚDO
// ============================================================

/** Área do conteúdo: cresce para empurrar o rodapé para baixo. */
export const Conteudo = styled.main`
  flex: 1;
  width: 100%;
  padding: 16px;
`;

// ============================================================
// MENU LATERAL (gaveta)
// ============================================================

/**
 * Fundo escuro que cobre a página inteira enquanto o menu está aberto.
 * Ele "pega" os cliques: assim nada da página de baixo pode ser clicado,
 * e clicar nele fecha o menu.
 */
export const MenuFundo = styled.div<{ $aberto: boolean }>`
  position: fixed;
  inset: 0;
  z-index: ${CAMADA_MENU_FUNDO};
  background: ${({ theme }) => theme.colors.scrimColor};
  opacity: ${({ $aberto }) => ($aberto ? 1 : 0)};
  visibility: ${({ $aberto }) => ($aberto ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease, visibility 0.2s ease;
`;

/** O painel do menu: desliza da esquerda para a direita. */
export const MenuPainel = styled.nav<{ $aberto: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: ${CAMADA_MENU};
  display: flex;
  flex-direction: column;
  width: min(320px, 85vw);
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.textColor};
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  /* O painel recebe o foco ao abrir (ver MenuGaveta); o contorno só atrapalharia. */
  outline: none;
  transform: translateX(${({ $aberto }) => ($aberto ? '0' : '-100%')});
  transition: transform 0.2s ease;
  ${({ $aberto }) =>
    !$aberto &&
    css`
      visibility: hidden;
    `}
`;

export const MenuTopo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${ALTURA_BARRA_MENU}px;
  padding: 0 16px;
  font-weight: 600;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const MenuItemBotao = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-height: 48px;
  padding: 8px 16px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  background: transparent;
  color: inherit;
  font-size: 15px;
  text-align: left;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.hoverColor};
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.textColor};
    outline-offset: -2px;
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  img {
    height: 28px;
    width: 28px;
    flex-shrink: 0;
  }
`;

// ============================================================
// RODAPÉ (mensagem + ações)
// ============================================================

/** Fica sempre visível no pé da janela; só o conteúdo rola. */
export const Rodape = styled.footer`
  position: sticky;
  bottom: 0;
  z-index: ${CAMADA_BARRA};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-height: 48px;
  padding: 6px 16px;
  background: ${({ theme }) => theme.colors.headerBackground};
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const RodapeMensagem = styled.p`
  flex: 1;
  margin: 0;
  font-size: 13px;
`;

export const RodapeAcoes = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RodapeBotao = styled(BotaoMenu)`
  font-weight: 500;
`;
