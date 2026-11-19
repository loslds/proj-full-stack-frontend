# Layout padrão (nova cara)

Estado em **2026-11-19**, branch `nova-ui`. Só a Home piloto usa o layout novo (rota `/nova-home`); a Home antiga segue em `/` e todas as outras telas continuam com os `Layout*` e `Hearder*` antigos até migrarem, uma a uma.

## Por que

Havia ~40 arquivos `Hearder*` (4.264 linhas) e ~40 `Layout*` (3.562 linhas) quase idênticos: cada layout repassa ~20 props para o header, e o header repassa de novo para os botões. O layout padrão troca essa cópia por **um** `LayoutPadrao`, configurado por um objeto em cada página.

## Estrutura da tela

```text
┌──────────────────────────────────────────────────────┐
│                        [ícone 25px] qui, 19/11/26 17:30 │ faixa fina
├──────────────────────────────────────────────────────┤
│ [logo]            TÍTULO           [ajuda][extras][Switch] │ cabeçalho (~45px)
├──────────────────────────────────────────────────────┤
│ [☰ Menu]                                              │ barra do menu (fixa ao rolar)
│              conteúdo (largura total)                 │
├──────────────────────────────────────────────────────┤
│ mensagem                       [Voltar][Continuar][Sair] │ rodapé (fixo)
└──────────────────────────────────────────────────────┘
```

- Largura total da tela (sem a faixa central de ~800px antiga).
- **Ajuda e Switch de tema** são padrão em toda página. Botões específicos da página entram em `botoesExtras`, entre a ajuda e o Switch.
- **Menu lateral (gaveta)**: abre da esquerda por cima da página; um fundo escuro bloqueia o clique no que está embaixo. Fecha ao clicar fora, ao apertar Esc ou ao escolher um item. Trava a rolagem da página, prende o Tab dentro do menu e devolve o foco ao botão Menu ao fechar. A imagem do item aparece **antes** do texto.
- A **barra do menu** é `sticky` no topo e o **rodapé** é `sticky` embaixo: ao rolar uma página grande, o botão Menu e o rodapé ficam no lugar.

## Arquivos (`src/layoutpadrao/`)

| Arquivo | Responsabilidade |
| --- | --- |
| `tipos.ts` | `ConfigPagina`, `ItemMenu`, `AcaoRodape`, `PropsLayoutPadrao`. |
| `styledLayoutPadrao.ts` | Todos os estilos; alturas e camadas (z-index) em constantes. |
| `LayoutPadrao.tsx` | Junta cabeçalho, barra do menu, conteúdo, rodapé e menu lateral. |
| `HeaderPadrao.tsx` | Faixa do topo e cabeçalho (logo, título, ajuda, extras, Switch). |
| `MenuGaveta.tsx` | Menu lateral com a lógica de fechar, foco e rolagem. |
| `RodapePadrao.tsx` | Mensagem e botões de ação. |
| `RelogioData.tsx` | Dia da semana, data e hora; atualiza a cada 15 s. |
| `index.ts` | Ponto único de importação (`@/layoutpadrao`). |

Página piloto: `src/components/pages/HomeNova.tsx`.

## Como criar uma página com o layout padrão

1. Monte um `ConfigPagina`: `titulo`, `logo`, `onClickAjuda`, `itensMenu`, `acoesRodape`.
2. Guarde `temaEscuro` e `mensagem` com `useState` na página.
3. Envolva tudo em `ThemeProvider` (**fora** do layout, para o tema pintar a página inteira) e use `<LayoutPadrao config=... temaEscuro=... onAlternarTema=... mensagem=...>`.
4. Botões específicos: passe em `botoesExtras`.

## Decisões

- **Tela cheia e "smart"**: pouco ou nenhum afastamento lateral; a mesma tela serve no PC e no celular.
- **Cores só pelo tema**: criado o token `scrimColor` (camada sobre a página com o menu aberto) em `themes/light.ts`, `themes/dark.ts` e `styles/styled.d.ts`.
- Cores iniciais: fundo branco e texto preto; no escuro, o inverso.

## Pendências

- Migrar as demais telas (uma a uma, só quando a nova funcionar) e então aposentar `Layout*` e `Hearder*` antigos. **Não apague** os antigos sem aprovação.
- O Switch mantém as cores fixas do header antigo (`#21ba02` e `#fa140c`, que indicam ligado e desligado). A regra 3.5 pede cor só por tema; falta decidir se viram tokens.
- A faixa do cabeçalho usa `headerBackground`, que no tema escuro é cinza claro (`#7e7b7b`); ajustar se o visual não agradar.
- Ligar o menu aos módulos reais conforme as rotas existirem (hoje só `/modulos/visitante` e `/modulos/config`).
- Os botões de ajuda e do rodapé da Home piloto só mostram mensagem; a lógica de cada tela virá com os testes.
