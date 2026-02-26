// C:\repository\proj-full-stack-frontend\src\components\ChaveMasterOverlay.tsx
// C:\repository\proj-full-stack-frontend\src\components\ChaveMasterOverlay.tsx
import React from "react";
import "./ChaveMasterOverlay.css";
import styled, { ThemeProvider } from "styled-components";

import light from "../themes/light";
import { useChaveMaster } from "./contexts/hooks/useChaveMaster";

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

const MAX_SERVER_TRIES = 3;
const MAX_FAILS = 5;
const TIMEOUT_SECONDS = 30;
const CLOSE_AFTER_SUCCESS_MS = 10_000;

// validação mínima (UX)
function minimalLocalValidate(key: string): boolean {
  const k = key.trim();

  // PIN (4 números)
  if (/^\d{4}$/.test(k)) return true;

  // DateSecular (8 números)
  if (/^\d{8}$/.test(k)) return true;

  // String fixa:
  // - mínimo 4 caracteres
  // - contém pelo menos 1 letra ou símbolo
  // - permite letras, números e símbolos seguros
  if (k.length >= 4 &&
    /^[A-Za-z0-9@#_><-]+$/.test(k) &&   // ✔ corrigido aqui
    /[A-Za-z@#_><-]/.test(k)
  ) {
    return true;
  }
  return false;
}



const ChaveMasterOverlay: React.FC = () => {
  const { state, dispatch } = useAcessoContext();

  const hardBlocked = state.logado === true;

  const [serverTries, setServerTries] = React.useState(0);
  const [serverError, setServerError] = React.useState<string | null>(null);
  const [serverInfo, setServerInfo] = React.useState<string | null>(null);
  const [authLoading, setAuthLoading] = React.useState(false);

  // chave capturada no submit (agora confiável)
  const [pendingKey, setPendingKey] = React.useState<string>("");

  const enterMaster = React.useCallback(
    (tokenAdmin: string) => {
      localStorage.setItem("token_admin", tokenAdmin);

      dispatch({ type: UseAcessoActions.set_AUTH_ADMIN, payload: tokenAdmin });
      dispatch({ type: UseAcessoActions.set_LOGADO, payload: false });
      dispatch({ type: UseAcessoActions.set_CHVKEY, payload: true });

      dispatch({ type: UseAcessoActions.set_ID_NIVEL, payload: 4 });
      dispatch({ type: UseAcessoActions.set_ACAO, payload: "VIS/EDI/ALT/EXC" });
      dispatch({ type: UseAcessoActions.set_ID_MODULO, payload: 0 });
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

    onResult: (ok: boolean) => {
      if (!ok) {
        setServerInfo(null);
        setServerError("Chave inválida.");
        return;
      }

      setServerError(null);
      setServerInfo("Validando...");
    },
  });

  // ✅ submit único (sem interferência do hook)
  const handleSubmit = React.useCallback(
    (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();

      setServerError(null);
      setServerInfo(null);

      const key = cm.keyValue.trim();

      // validação mínima
      if (!minimalLocalValidate(key)) {
        setServerError("Chave muito curta.");
        cm.setKeyValue(""); // limpa input
        return;
      }

      setPendingKey(key);

      cm.submit(); // apenas valida/trava
    },
    [cm]
  );

  // ✅ autenticação backend após locked=true
  React.useEffect(() => {
    if (!cm.open) return;
    if (!cm.locked) return;
    if (authLoading) return;

    const keyToSend = pendingKey.trim();

    if (!minimalLocalValidate(keyToSend)) {
      setServerError("Chave muito curta.");
      cm.setLocked(false);
      cm.setKeyValue("");
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        setAuthLoading(true);
        setServerError(null);
        setServerInfo("Autenticando no servidor...");

console.log("ENVIANDO PARA BACKEND:", keyToSend);

        const r = await masterLogin(keyToSend);
        if (cancelled) return;

        if (!r.success || !r.token) {
          setServerError(r.message ?? "Chave inválida (servidor).");
          setServerInfo(null);

          cm.setLocked(false);
          cm.setKeyValue("");

          setServerTries((prev) => {
            const next = prev + 1;

            if (next >= MAX_SERVER_TRIES) {
              cm.close();
              return 0;
            }

            return next;
          });

          return;
        }

        // ✅ sucesso
        enterMaster(r.token);

        setServerTries(0);
        setServerError(null);
        setServerInfo(`Master ativo. Fechando em ${CLOSE_AFTER_SUCCESS_MS / 1000}s...`);

        cm.closeAfter(CLOSE_AFTER_SUCCESS_MS);
      } catch {
        if (cancelled) return;

        setServerError("Erro de conexão com servidor.");
        setServerInfo(null);

        cm.setLocked(false);
      } finally {
        if (!cancelled) setAuthLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [cm.open, cm.locked, pendingKey, authLoading, cm, enterMaster]);

  if (!cm.open) return null;

  const inputDisabled = authLoading || cm.locked;

  return (
    <ThemeProvider theme={light}>
      <ContentCardPage>
        <ContentCardBoxChaveKey open={true}>
          <ContentCardBoxInput>
            <CMFormWrapper>
              <form onSubmit={handleSubmit}>
                <label htmlFor="cm_key">Acesso Master</label>

                <input
                  id="cm_key"
                  type="password"
                  size={12}
                  maxLength={32}
                  autoFocus
                  autoComplete="new-password"
                  placeholder="Password..."
                  value={cm.keyValue}
                  onChange={(e) => cm.setKeyValue(e.target.value)}
                  disabled={inputDisabled}
                />

                <small>
                  Tentativas: {cm.fails} / {MAX_FAILS}
                </small>

                <small>
                  Servidor: {serverTries} / {MAX_SERVER_TRIES}
                </small>

                {cm.secondsLeft != null && !cm.locked ? (
                  <small>Tempo: {cm.secondsLeft}s</small>
                ) : null}

                {serverInfo && <small className="cm-info">{serverInfo}</small>}
                {serverError && <small className="cm-error">{serverError}</small>}
              </form>
            </CMFormWrapper>
          </ContentCardBoxInput>
        </ContentCardBoxChaveKey>
      </ContentCardPage>
    </ThemeProvider>
  );
};

export default ChaveMasterOverlay;