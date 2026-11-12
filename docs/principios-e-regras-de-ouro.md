# Princípios e Regras de Ouro

Leitura obrigatória antes de alterar o projeto. Regras com **NUNCA** e **SEMPRE** não têm exceção sem aprovação do usuário.

## 1. Stack

React 18 · TypeScript 5.8 (`strict`) · Vite 8 · `react-router-dom` 7 · `styled-components` 6 · `axios` · `libphonenumber-js` · `vite-plugin-svgr`. Backend em `http://localhost:5000`, acessado pelo proxy `/api` do Vite.

## 2. Princípios

1. **Siga o código vizinho.** Copie o padrão do arquivo ao lado antes de criar um novo.
2. **Simples e explícito.** Nomes claros, sem abstração sem uso real (YAGNI), sem duplicação evitável (DRY).
3. **Uma responsabilidade por arquivo.** Página, layout, header, card e modal ficam separados. Regra de negócio fora do estilo.
4. **Mudança pequena.** Um objetivo por alteração. Não misture refatoração com correção.
5. **Nunca quebre o que funciona.** Não renomeie arquivos, rotas ou variáveis por estilo.
6. **Docs junto do código.** Mudou o comportamento, atualize o arquivo em `docs`.

## 3. Regras de ouro

### 3.1 Arquivos e nomes

- Componente: `PascalCase.tsx`. Lógica pura: `camelCase.ts`. Hook: `useNome.ts`.
- Código novo importa de `src` com `@/` (assets: `@/assets/...`). Não converta imports antigos sem pedido.
- Mantenha nomes legados como estão: `hearders`, `Hearder*`, `boockList`, `useCanAcess.ts`.
- **NUNCA** edite `dist/` ou `node_modules/`, nem mova `src/`.
- **NUNCA** apague blocos comentados ou arquivos `.bck` sem aprovação.

### 3.2 Componentes React

- Props tipadas com `interface`; opcionais com `?`; composição com `children?: React.ReactNode`.
- Página: `React.FC` + `export default`. Componente reutilizável: `export` nomeado.
- Bloco repetido vai para `src/cards`, `src/modal` ou `src/components`.
- Hooks só no topo do componente, nunca em condição ou laço.
- `useEffect` com dependências completas e limpeza (timers, listeners, requisições canceladas).
- Listas com `key` estável (id), não o índice.
- Estado imutável: crie novo objeto/array, não altere o existente.
- Use `useMemo`/`useCallback` só quando houver custo real.

### 3.3 Rotas e navegação

- Rota nova só em `src/routeList.tsx`; `AppRoutes.tsx` apenas lê a lista.
- Padrões: `/modulos/<nome>` para módulo, `/cad<dominio>` para cadastro.
- Navegue com `useNavigate`. **NUNCA** use `window.location` para trocar de tela.

### 3.4 Cadastros, layout e header

```text
src/components/pages/cad<dominio>/
  Cad<Dominios>.tsx       principal
  Cad<Dominios>Inc.tsx    inclusão
  Cad<Dominios>Alt.tsx    alteração
  Cad<Dominios>Exc.tsx    exclusão
  Cad<Dominios>List.tsx   listagem
  Cad<Dominios>Pesq.tsx   pesquisa
```

- Layout: `src/components/layouts/Layout<Dominios>.tsx`, baseado em `ContentPages`.
- Header: `src/components/hearders/headers/Hearder<Dominios>.tsx`, baseado em `ContentHeader*`.
- A página envolve tudo em `ThemeProvider`, usa o layout do domínio e passa `titlepg`, imagens e títulos dos botões.
- O botão abortar mantém a navegação de retorno. Não duplique o layout dentro da página.

### 3.5 Estilo e tema

- Estilo com `styled-components`; cores só por `theme.colors.*` (`src/themes/light.ts` e `dark.ts`).
- Tokens: `backgroundColor` (fundo), `textColor` (texto), `borderColor` (borda), `hoverColor` (hover), `backgroundColorAlt` (zebra), `headerBackground` (cabeçalho).
- **NUNCA** use cor fixa em componente. Estilo inline só para valor dinâmico.

### 3.6 API e segurança

- Cliente comum: `src/api/api.ts`. Administrativo: `src/api/api_adm.ts` (envia `Bearer` de `token_admin`, guardado só em `localStorage`).
- Sempre use `baseURL` relativa (`/api`). **NUNCA** escreva `http://localhost:5000` em código novo.
- **SEMPRE** `try/catch` em chamada externa; em erro retorne `{ success: false, message }`.
- Valide e normalize o dado antes do envio (telefone com `libphonenumber-js`).
- **NUNCA** grave senha, chave ou segredo no código. Variáveis públicas usam `import.meta.env.VITE_*`.
- Permissão no front é só conveniência: o backend decide.

### 3.7 Dados e grid

- Tabela de dados: `GenericGrid` + `useTableData` (`tableName`, `rows`, `columns`, `mode`: `default` | `list` | `detail`).
- Trate os estados `loading`, `empty`, `error` e `not_found` com mensagem visível. Tela nunca fica travada sem retorno.

### 3.8 Acesso e sessão

- Módulo: `useCanAccess`. Ação/página: `usePageAccess` (ambos em `contexts/hooks/useCanAcess.ts`).
- Leia o estado com `useAcessoContext` (`contexts/ContextAcesso.ts`); altere só por `dispatch` com `AcessoAction`.
- Não copie o estado de acesso para outro contexto. **NUNCA** remova a chave master do fluxo.

### 3.9 Qualidade de TypeScript

- Sem `any` (use tipo, `unknown` ou genérico); sem `@ts-ignore` — corrija o tipo.
- Sem import, variável ou `console.log` de depuração sobrando.
- Tipos compartilhados em `src/types`.

## 4. Mapa de pastas

```text
src/
  api/          clientes HTTP e serviços (auth, db, tables, cep)
  assets/       imagens e svgs
  boockList/    listas auxiliares
  cards/        cards e blocos visuais
  components/   contexts, grids, hearders, hooks, layouts, pages, sidebars
  funcs/        utilitários
  modal/        modais
  styles/       estilo global e tipos do tema
  themes/       tema claro e escuro
  types/        tipos compartilhados
  routeList.tsx fonte única das rotas
```

## 5. Comandos

`yarn` instalar · `yarn dev` desenvolver · `yarn lint` lint · `yarn lint:fix` lint com correção automática · `yarn typecheck` só tipos · `yarn build` tipos + build · `yarn preview` pré-visualizar.

- O `tsc` não confere caminhos de `.svg`/`.png` (são `declare module`). Import de asset com caminho errado só falha no `vite build`: confira a profundidade do `../` ao mover arquivos.
- Rascunhos que ainda não compilam ficam em `./rascunhos` (fora de `src`), ignorados pelo `tsc` e pelo ESLint. Ao terminar, mova de volta para `src` e ajuste os imports relativos.

## 6. Antes de concluir

1. Segue o padrão vizinho e as regras acima.
2. `yarn lint` e `yarn build` passam sem erro novo.
3. O fluxo alterado foi testado no navegador.
4. O arquivo relacionado em `docs` foi atualizado.

## 7. Dívida técnica conhecida

Não corrija sem pedido; não repita em código novo.

- URL fixa `http://localhost:5000` em `src/api/api.ts`, `pages/Home.tsx`, `pages/modulos/Config.tsx` e `funcs/funcs/InstallSys.tsx`.
- Maioria dos imports ainda é relativa (`../`), não `@/`.
- Há `console.log` de depuração em alguns arquivos.
