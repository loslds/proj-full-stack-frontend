// C:\repository\proj-full-stack-frontend\src\layoutpadrao\tipos.ts
//
// TIPOS do layout padrão (nova cara do sistema).
// Ficam num arquivo só para que o layout, o menu, o rodapé e as páginas
// falem a mesma "língua" sem se importar uns com os outros.

import type React from 'react';

/**
 * Um item do menu lateral (gaveta).
 * - rotulo: texto exibido.
 * - imagem: ícone exibido ANTES do texto (opcional).
 * - onClick: ação executada ao clicar; o menu fecha sozinho depois.
 * - desabilitado: item aparece mas não responde (ex.: módulo ainda não feito).
 */
export interface ItemMenu {
  id: string;
  rotulo: string;
  imagem?: string;
  onClick?: () => void;
  desabilitado?: boolean;
}

/**
 * Um botão do RODAPÉ (voltar, continuar, sair...).
 * Cada página decide quais botões o rodapé terá.
 */
export interface AcaoRodape {
  id: string;
  rotulo: string;
  imagem?: string;
  onClick?: () => void;
  desabilitado?: boolean;
}

/**
 * Configuração de UMA página. Em vez de criar um Header e um Layout novos
 * para cada página (como era antes), cada página só entrega este objeto
 * ao LayoutPadrao.
 */
export interface ConfigPagina {
  /** Título mostrado no centro do cabeçalho. */
  titulo: string;

  /** Logo mostrado à esquerda do cabeçalho (URL da imagem). */
  logo?: string;
  titleLogo?: string;
  onClickLogo?: () => void;

  /** Botão de ajuda da página (padrão em todas as páginas). */
  onClickAjuda?: () => void;
  titleAjuda?: string;

  /** Itens do menu lateral. */
  itensMenu?: ItemMenu[];

  /** Botões do rodapé. */
  acoesRodape?: AcaoRodape[];
}

/** Props do LayoutPadrao. */
export interface PropsLayoutPadrao {
  config: ConfigPagina;

  /** Tema atual: 'light' ou 'dark'. Quem muda é o Switch do cabeçalho. */
  temaEscuro: boolean;
  onAlternarTema: () => void;

  /** Mensagem mostrada no rodapé (o que a página está fazendo). */
  mensagem?: string;

  /**
   * Botões EXTRAS do cabeçalho, específicos da página
   * (ficam entre o botão de ajuda e o Switch).
   */
  botoesExtras?: React.ReactNode;

  /** Conteúdo da página. */
  children?: React.ReactNode;
}
