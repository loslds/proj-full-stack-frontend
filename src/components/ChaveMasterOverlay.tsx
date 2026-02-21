
// C:\repository\proj-full-stack-frontend\src\components\ChaveMasterOverlay.tsx
import React from "react";
import "./ChaveMasterOverlay.css";
import styled, { ThemeProvider } from "styled-components";

import light from "../themes/light";
import { useChaveMaster } from "../funcs/funcs/useChaveMaster";

import { useAcessoContext, UseAcessoActions } from "./contexts/ContextAcesso";

import { ContentCardPage } from "./ContentCardPage";
import { ContentCardBoxChaveKey } from "./ContentCardBoxChaveKey";
import { ContentCardBoxInput } from "./ContentCardBoxInput";

import { masterLogin } from "../api/auth/masterLogin";

const CMFormWrapper = styled.div`
  text-align: center;

  form {
    width: 100%;
  }

  label {
    display: block;
    margin-bottom: 6px;
  }

  input {
    display: block;
    margin: 8px auto 10px auto;
    text-align: center;
  }

  small {
    display: block;
    margin-top: 4px;
  }
`;

const MAX_FAILS = 5;
const TIMEOUT_SECONDS = 30;
const CLOSE_AFTER_SUCCESS_MS = 10_000;

function minimalLocalValidate(key: string): boolean {
  return key.trim().length >= 4;
}

const ChaveMasterOverlay: React.FC = () => {
  const { state, dispatch } = useAcessoContext();

  const hardBlocked = state.logado === true;

  const [serverError, setServerError] = React.useState<string | null>(null);
  const [serverInfo, setServerInfo] = React.useState<string | null>(null);
  const [authLoading, setAuthLoading] = React.useState(false);

  // chave capturada no submit (evita stale value se o hook limpar)
  const [pendingKey, setPendingKey] = React.useState<string>("");

  const exitMaster = React.useCallback(() => {
    localStorage.removeItem("token_admin");
    dispatch({ type: UseAcessoActions.set_AUTH_ADMIN, payload: "" });
    dispatch({ type: UseAcessoActions.set_CHVKEY, payload: false });
  }, [dispatch]);

  const enterMaster = React.useCallback(
    (tokenAdmin: string) => {
      localStorage.setItem("token_admin", tokenAdmin);
      dispatch({ type: UseAcessoActions.set_AUTH_ADMIN, payload: tokenAdmin });
      dispatch({ type: UseAcessoActions.set_LOGADO, payload: false });
      dispatch({ type: UseAcessoActions.set_CHVKEY, payload: true });
      dispatch({ type: UseAcessoActions.set_ID_NIVEL, payload: 4 });
      dispatch({ type: UseAcessoActions.set_ACAO, payload: "VIS/EDI/ALT/EXC" });
      dispatch({ type: UseAcessoActions.set_ID_MODULO, payload: 8 });
      dispatch({ type: UseAcessoActions.set_MODULO, payload: "Master" });
    },
    [dispatch]
  );

  const cm = useChaveMaster({
    enabled: true,
    blocked: hardBlocked,
    validateKey: minimalLocalValidate,
    maxKeyFails: MAX_FAILS,
    timeoutSeconds: TIMEOUT_SECONDS,
    debug: false,

    // ⚠️ NUNCA faça dispatch aqui (pode disparar durante render em alguns fluxos).
    // Apenas mensagens locais de UI.
    onResult: (ok: boolean) => {
      if (!ok) {
        setServerInfo(null);
        setServerError("Chave inválida.");
        return;
      }
      setServerError(null);
      setServerInfo("Autenticando no servidor...");
    },
  });

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setServerError(null);
      setServerInfo(null);
      const k = cm.keyValue.trim();
      setPendingKey(k);
      cm.submit();
    },
    [cm]
  );

  // ✅ autenticação no backend ocorre aqui (após locked=true)
  React.useEffect(() => {
    if (!cm.open) return;
    if (!cm.locked) return;
    if (authLoading) return;
    const keyToSend = pendingKey.trim();
    if (!minimalLocalValidate(keyToSend)) {
      cm.setLocked(false);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        setAuthLoading(true);
        setServerError(null);
        setServerInfo("Autenticando no servidor...");
        const r = await masterLogin(keyToSend);
        if (cancelled) return;
        if (!r.success || !r.token) {
          // garante que NÃO fica “preso” em locked após erro
          exitMaster();
          setServerInfo(null);
          setServerError(r.message ?? "Chave master inválida (servidor).");
          cm.setLocked(false);
          return;
        }
        // ✅ aplica estado master (dispatch) APENAS aqui (efeito), evitando warning de render
        enterMaster(r.token);
        setServerError(null);
        setServerInfo(`Master ativo. Fechando em ${CLOSE_AFTER_SUCCESS_MS / 1000}s...`);
        // ✅ fecha em 10s após sucesso (o contador de 30s deve parar quando locked=true no hook)
        cm.closeAfter(CLOSE_AFTER_SUCCESS_MS);
      } catch {
        if (cancelled) return;
        exitMaster();
        setServerInfo(null);
        setServerError("Falha ao autenticar no servidor.");
        cm.setLocked(false);
      } finally {
        if (!cancelled) setAuthLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [cm.open, cm.locked, pendingKey, authLoading, cm, enterMaster, exitMaster]);

  if (!cm.open) return null;
  const inputDisabled = authLoading || cm.locked;
  return (
    <ThemeProvider theme={light}>
      <ContentCardPage>
        <ContentCardBoxChaveKey open={true}>
          <ContentCardBoxInput>
            <CMFormWrapper>
              <form name="chave-master" onSubmit={handleSubmit}>
                <label htmlFor="cm_key">Acesso Master</label>

                <input
                  id="cm_key"
                  name="cm_key"
                  type="password"
                  size={10}
                  maxLength={32}
                  autoFocus
                  autoComplete="new-password"
                  placeholder="Chave..."
                  value={cm.keyValue}
                  onChange={(ev) => cm.setKeyValue(ev.target.value)}
                  disabled={inputDisabled}
                />
                <small>
                  Tentativas: {cm.fails} / {MAX_FAILS}
                </small>
                {cm.secondsLeft != null ? (
                  <small>Tempo: {cm.secondsLeft}s</small>
                ) : (
                  <small>Timeout: {TIMEOUT_SECONDS}s</small>
                )}
                {serverInfo ? <small className="cm-info">{serverInfo}</small> : null}
                {serverError ? <small className="cm-error">{serverError}</small> : null}
              </form>
            </CMFormWrapper>
          </ContentCardBoxInput>
        </ContentCardBoxChaveKey>
      </ContentCardPage>
    </ThemeProvider>
  );
};

export default ChaveMasterOverlay;