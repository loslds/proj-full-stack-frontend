
// src/components/ChaveMasterOverlay.tsx
import React from "react";
import "./ChaveMasterOverlay.css";
import styled, { ThemeProvider } from "styled-components";

import light from "../themes/light";
import { useChaveMaster } from "./contexts/hooks/useChaveMaster";
import { useAcessoContext } from "./contexts/ContextAcesso";

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

const MAX_TRIES = 3;
const SUCCESS_SECONDS = 5;

function minimalLocalValidate(key: string): boolean {
  const k = key.trim();

  if (/^\d{4}$/.test(k)) return true; // PIN
  if (/^\d{8}$/.test(k)) return true; // DATE8

  // STATIC
  if (k.length >= 4 && /^[A-Za-z0-9@#_]+$/.test(k) && /[A-Za-z@#_]/.test(k)) return true;

  return false;
}

const ChaveMasterOverlay: React.FC = () => {
  const { state, dispatch } = useAcessoContext();

  const hardBlocked = state.logado === true;

  const [tries, setTries] = React.useState(0);
  const [serverError, setServerError] = React.useState<string | null>(null);
  const [serverInfo, setServerInfo] = React.useState<string | null>(null);
  const [authLoading, setAuthLoading] = React.useState(false);

  const [successLeft, setSuccessLeft] = React.useState<number | null>(null);

  const enterMaster = React.useCallback(
    (tokenAdmin: string) => {
      localStorage.setItem("token_admin", tokenAdmin);
      dispatch({ type: "auth_admin", payload: tokenAdmin });
      dispatch({ type: "chvkey", payload: true });
      dispatch({ type: "ismaster", payload: true });
      dispatch({ type: "cor", payload: "#008000" });
      dispatch({ type: "acao", payload: "Vis/List/Inc/Alt/Exc" });
      dispatch({ type: "nivel", payload: 5 });
    },
    [dispatch]
  );

  const cm = useChaveMaster({
    enabled: true,
    blocked: hardBlocked,
    validateKey: minimalLocalValidate,
    debug: false,
    onResult: (ok) => {
      if (!ok) {
        setServerInfo(null);
        setServerError("Chave inválida (formato).");
      }
    },
  });

  // countdown de sucesso (10s)
  React.useEffect(() => {
    if (successLeft == null) return;

    if (successLeft <= 0) {
      setSuccessLeft(null);
      cm.close();
      return;
    }

    const id = window.setTimeout(() => setSuccessLeft((v) => (v == null ? v : v - 1)), 1000);
    return () => window.clearTimeout(id);
  }, [successLeft, cm]);

  const handleSubmit = React.useCallback(
    async (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (authLoading) return;
      if (successLeft != null) return;

      setServerError(null);
      setServerInfo(null);

      const key = cm.keyValue.trim();

      // valida formato
      const okLocal = cm.submit();
      if (!okLocal) {
        cm.setKeyValue("");
        return;
      }

      // contabiliza tentativa ANTES do envio
      const nextTry = tries + 1;
      setTries(nextTry);

      // estourou tentativas => fecha
      if (nextTry > MAX_TRIES) {
        setServerError("Limite de tentativas excedido.");
        cm.close();
        setTries(0);
        return;
      }

      try {
        setAuthLoading(true);
        setServerInfo("Autenticando no servidor...");

        const r = await masterLogin(key);
        console.log("[CM] masterLogin response =", r);

        if (!r.success || !r.token) {
          setServerInfo(null);
          setServerError(r.message ?? "Chave inválida (servidor).");
          cm.setKeyValue(""); // libera nova edição
          return;
        }

        // sucesso
        enterMaster(r.token);
        setServerError(null);
        setServerInfo("Master ativo.");
        setSuccessLeft(SUCCESS_SECONDS);
        // opcional: zerar tentativas para próxima vez
        setTries(0);
      } catch (err: unknown) {
        console.error("[CM] masterLogin exception:", err);
        setServerInfo(null);
        setServerError("Falha de rede/servidor.");
        // mantém tries já contabilizado
      } finally {
        setAuthLoading(false);
      }
    },
    [authLoading, successLeft, cm, tries, enterMaster]
  );

  if (!cm.open) return null;

  const inputDisabled = authLoading || successLeft != null;

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
                  value={cm.keyValue}
                  onChange={(e) => cm.setKeyValue(e.target.value)}
                  disabled={inputDisabled}
                />

                <small>
                  Tentativas: {Math.min(tries, MAX_TRIES)} / {MAX_TRIES}
                </small>

                {successLeft != null ? <small>Fechando em: {successLeft}s</small> : null}

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

