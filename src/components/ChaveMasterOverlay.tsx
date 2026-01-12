
// C:\repository\proj-full-stack-frontend\src\components\ChaveMasterOverlay.tsx
import React from 'react';

import { useAcessoContext, UseAcessoActions } from './contexts/ContextAcesso';
import { useChaveMaster } from '../funcs/funcs/useChaveMaster';
import { CheckDateToCecular } from '../funcs/funcs/CheckDateToCecular';

import { ContentCardPage } from './ContentCardPage';
import { ContentCardBoxChaveKey } from './ContentCardBoxChaveKey';
import { ContentCardBoxInput } from './ContentCardBoxInput';
import * as Pg from './stylePages';

/**
 * Overlay GLOBAL da Chave-Master
 * - Montado uma única vez no App.tsx (dentro do AcessoProvider)
 * - Escuta teclado globalmente (via hook useChaveMaster)
 * - NÃO depende da Home
 *
 * Hotkey desejada: Ctrl + Alt + Delete
 * Observação técnica: em navegadores, Ctrl+Alt+Del normalmente é interceptado pelo SO
 * e pode não chegar ao JS. Mesmo assim, fica configurado aqui conforme solicitado.
 */
export const ChaveMasterOverlay: React.FC = () => {
  const { state, dispatch } = useAcessoContext();

  // ✅ boolean puro (sem null) — bloqueia se sistema não estiver pronto ou se já estiver logado
  const hardBlocked =
    state.initsys !== true ||
    state.chkdb !== true ||
    state.logado === true;

  // ⚙️ Constante local para UI (não depende do retorno do hook)
  const MAX_FAILS = 5;

  const cm = useChaveMaster({
    enabled: true,
    blocked: hardBlocked,
    timeoutSeconds: 20,
    validateKey: (key: string) => CheckDateToCecular(key),
    maxKeyFails: MAX_FAILS,
    onResult: (ok: boolean) => {
      if (ok) {
        dispatch({ type: UseAcessoActions.set_LOGADO, payload: false });
        dispatch({ type: UseAcessoActions.set_CHVKEY, payload: true });
      }
    },
  });

  // overlay invisível quando fechado
  if (!cm.open) return null;

  return (
    <ContentCardPage>
      <Pg.DivisionPgHztal />

      <ContentCardBoxChaveKey open={true}>
        <ContentCardBoxInput>
          <form
            name="chave-master"
            onSubmit={(e) => {
              e.preventDefault();
              cm.submit();
            }}
          >
            <br />
            <label>Acesso Master</label>
            <br />

            <input
              name="chave"
              type="password"
              size={8}
              autoFocus
              placeholder="Chave..."
              value={cm.keyValue}
              onChange={(e) => cm.setKeyValue(e.target.value)}
            />

            <br />
            <small>
              Tentativas: {cm.fails} / {MAX_FAILS}
            </small>
          </form>
        </ContentCardBoxInput>
      </ContentCardBoxChaveKey>
    </ContentCardPage>
  );
};
