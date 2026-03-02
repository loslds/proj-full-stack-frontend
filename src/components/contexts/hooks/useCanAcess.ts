

//C:\repository\proj-full-stack-frontend\src\components\contexts\hooks\useCanAcess.ts

import React from "react";
import { useAcessoContext } from "../ContextAcesso";

function hasToken(t: string | null | undefined): boolean {
  return typeof t === "string" && t.trim().length > 0;
}

export function useCanAccess(moduleName?: string | null): boolean {
  const { state } = useAcessoContext();

  return React.useMemo(() => {
    const mod = (moduleName ?? "").trim();
    if (!mod) return false;

    // Acesso via Chave Master (token_admin + chvkey)
    if (state.chvkey === true && hasToken(state.auth_admin)) {
      return true;
    }

    // Acesso via Login normal (token_user + logado + módulo liberado)
    if (state.logado === true && hasToken(state.auth) && state.modulo === mod) {
      return true;
    }

    return false;
  }, [state.chvkey, state.auth_admin, state.logado, state.auth, state.modulo, moduleName]);
}

/**
 * requiredPermission:
 *   usePageAccess(state.inctable)  // inclusão
 *   usePageAccess(state.alttable)  // alteração
 *   usePageAccess(state.exctable)  // exclusão
 *   usePageAccess(state.reltable)  // relatório/listagem (conforme seu modelo)
 */
export function usePageAccess(requiredPermission?: boolean | null): boolean {
  const { state } = useAcessoContext();

  return React.useMemo(() => {
    // Master sempre pode (desde que tenha token_admin)
    if (state.chvkey === true && hasToken(state.auth_admin)) {
      return true;
    }

    // Usuário precisa estar logado + token
    if (!(state.logado === true && hasToken(state.auth))) {
      return false;
    }

    // A página exige uma permissão específica
    return requiredPermission === true;
  }, [state.chvkey, state.auth_admin, state.logado, state.auth, requiredPermission]);
}