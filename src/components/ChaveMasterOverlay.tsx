
// src/components/ChaveMasterOverlay.tsx
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

const MAX_TRIES = 3;
const SUCCESS_SECONDS = 10;

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
    
      dispatch({ type: UseAcessoActions.set_AUTH_ADMIN, payload: tokenAdmin });
 {/**     dispatch({ type: UseAcessoActions.set_LOGADO, payload: false }); */}
      dispatch({ type: UseAcessoActions.set_CHVKEY, payload: true });
{/**
      dispatch({ type: UseAcessoActions.set_ID_NIVEL, payload: 4 });
      dispatch({ type: UseAcessoActions.set_ACAO, payload: "VIS/EDI/ALT/EXC" });
      dispatch({ type: UseAcessoActions.set_ID_MODULO, payload: 0 });
      dispatch({ type: UseAcessoActions.set_MODULO, payload: "Master" });
 */}
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


// // C:\repository\proj-full-stack-frontend\src\components\ChaveMasterOverlay.tsx
// import React from "react";
// import "./ChaveMasterOverlay.css";
// import styled, { ThemeProvider } from "styled-components";

// import light from "../themes/light";
// import { useChaveMaster } from "./contexts/hooks/useChaveMaster";
// import { useAcessoContext, UseAcessoActions } from "./contexts/ContextAcesso";

// import { ContentCardPage } from "./ContentCardPage";
// import { ContentCardBoxChaveKey } from "./ContentCardBoxChaveKey";
// import { ContentCardBoxInput } from "./ContentCardBoxInput";

// import { masterLogin } from "../api/auth/masterLogin";

// const CMFormWrapper = styled.div`
//   text-align: center;

//   form {
//     width: 100%;
//   }

//   label {
//     display: block;
//     margin-bottom: 6px;
//   }

//   input {
//     display: block;
//     margin: 8px auto 10px auto;
//     text-align: center;
//   }

//   small {
//     display: block;
//     margin-top: 4px;
//   }
// `;

// const MAX_SERVER_TRIES = 3;
// const MAX_FAILS = 5;
// const TIMEOUT_SECONDS = 30;

// // ✅ contador pós-sucesso (overlay)
// //const SUCCESS_SECONDS = 10;

// // validação mínima (UX) — deve apenas permitir formatos plausíveis
// function minimalLocalValidate(key: string): boolean {
//   const k = key.trim();

//   // PIN (4 números)
//   if (/^\d{4}$/.test(k)) return true;

//   // DateSecular (8 números)
//   if (/^\d{8}$/.test(k)) return true;

//   // String fixa:
//   // - mínimo 4
//   // - só caracteres permitidos
//   // - contém pelo menos 1 letra ou símbolo
//   if (k.length >= 4 && /^[A-Za-z0-9@#_]+$/.test(k) && /[A-Za-z@#_]/.test(k)) return true;

//   return false;
// }

// const ChaveMasterOverlay: React.FC = () => {
//   const { state, dispatch } = useAcessoContext();

//   const hardBlocked = state.logado === true;

//   const [serverTries, setServerTries] = React.useState(0);
//   const [serverError, setServerError] = React.useState<string | null>(null);
//   const [serverInfo, setServerInfo] = React.useState<string | null>(null);
//   const [authLoading, setAuthLoading] = React.useState(false);

//   // chave capturada no submit (não depende do hook limpar)
//   const [pendingKey, setPendingKey] = React.useState<string>("");

//   // ✅ countdown pós-sucesso (independente do hook)
//   const [successLeft, setSuccessLeft] = React.useState<number | null>(null);

//   const enterMaster = React.useCallback(
//     (tokenAdmin: string) => {
// console.log("[CM] enterMaster() -> dispatch CHVKEY true");

//       localStorage.setItem("token_admin", tokenAdmin);

//       dispatch({ type: UseAcessoActions.set_AUTH_ADMIN, payload: tokenAdmin });
//       dispatch({ type: UseAcessoActions.set_LOGADO, payload: false });
//       dispatch({ type: UseAcessoActions.set_CHVKEY, payload: true });

//       dispatch({ type: UseAcessoActions.set_ID_NIVEL, payload: 4 });
//       dispatch({ type: UseAcessoActions.set_ACAO, payload: "VIS/EDI/ALT/EXC" });
//       dispatch({ type: UseAcessoActions.set_ID_MODULO, payload: 0 });
//       dispatch({ type: UseAcessoActions.set_MODULO, payload: "Master" });
//     },
//     [dispatch]
//   );

//   // ✅ Hook: use apenas para abrir/fechar + tentativas + timeout de 30s
//   const cm = useChaveMaster({
//     enabled: true,
//     blocked: hardBlocked,
//     validateKey: minimalLocalValidate,
//     maxKeyFails: MAX_FAILS,
//     timeoutSeconds: TIMEOUT_SECONDS,
//     debug: false,

//     // ⚠️ não coloque "Autenticando..." aqui (isso sobrescreve mensagens do fluxo)
//     onResult: (ok: boolean) => {
// console.log("[CM] onResult(ok) =", ok);

//       if (!ok) {
//         setServerInfo(null);
//         setServerError("Chave inválida.");
//         return;
//       }

//       // ok local → o efeito vai autenticar no backend
//       setServerError(null);
//       setServerInfo("Validando...");
//     },
//   });

//   // ✅ submit único
//   const handleSubmit = React.useCallback(
//     (e: React.SyntheticEvent<HTMLFormElement>) => {
//       e.preventDefault();

//       setServerError(null);
//       setServerInfo(null);

//       const key = cm.keyValue.trim();

// console.log("[CM] submit pressed. key =", key);

//       if (!minimalLocalValidate(key)) {
//         setServerError("Chave inválida (formato).");
//         cm.setKeyValue("");
//         return;
//       }

//       setPendingKey(key);
//       cm.submit(); // valida + trava (locked=true em sucesso local)
//     },
//     [cm]
//   );

//   // ✅ autenticação backend após locked=true (roda uma vez por submit OK)
//   // ✅ autenticação backend após locked=true (sem loop/cancel por re-render)
//   // ✅ autenticação backend após locked=true (sem cancelamento por re-render)
// const inFlightRef = React.useRef(false);

// const { open, locked, setLocked, setKeyValue, close } = cm;

// React.useEffect(() => {
//   if (!open) return;
//   if (!locked) return;

//   if (inFlightRef.current) return;

//   const keyToSend = pendingKey.trim();

//   console.log("[CM] effect auth start", { open, locked, keyToSend });

//   if (!minimalLocalValidate(keyToSend)) {
//     console.log("[CM] effect auth: key invalid -> unlock");
//     setServerError("Chave inválida (formato).");
//     setServerInfo(null);
//     setLocked(false);
//     setKeyValue("");
//     return;
//   }

//   let cancelled = false;
//   inFlightRef.current = true;

//   (async () => {
//     try {
//       setAuthLoading(true);
//       setServerError(null);
//       setServerInfo("Autenticando no servidor...");

//       console.log("[CM] ENVIANDO PARA BACKEND:", keyToSend);

//       const r = await masterLogin(keyToSend);

//       console.log("[CM] masterLogin response =", r);

//       if (cancelled) {
//         console.log("[CM] CANCELLED TRUE -> aborting success path");
//         return;
//       }

//       if (!r.success || !r.token) {
//         console.log("[CM] masterLogin failed");
//         setServerError(r.message ?? "Chave inválida (servidor).");
//         setServerInfo(null);

//         setLocked(false);
//         setKeyValue("");

//         setServerTries((prev) => {
//           const next = prev + 1;
//           if (next >= MAX_SERVER_TRIES) {
//             console.log("[CM] max server tries -> close overlay");
//             close();
//             return 0;
//           }
//           return next;
//         });

//         return;
//       }

//       console.log("[CM] masterLogin SUCCESS -> enterMaster");
//       enterMaster(r.token);

//       setServerTries(0);
//       setServerError(null);
//       setServerInfo("Master ativo.");

//       // ✅ inicia o seu countdown de 10s aqui (se você estiver usando successLeft)
//       setSuccessLeft(10);
//     } catch (err: unknown) {
//       if (cancelled) return;

//       console.error("[CM] masterLogin exception:", err);

//       setServerError("Erro de conexão com servidor.");
//       setServerInfo(null);
//       setLocked(false);
//     } finally {
//       if (!cancelled) setAuthLoading(false);
//       inFlightRef.current = false;
//     }
//   })();

//   return () => {
//     cancelled = true;
//   };
//   // ⚠️ deps só com primitivos e callbacks estáveis (sem "cm")
// }, [open, locked, pendingKey, enterMaster, setLocked, setKeyValue, close]);

//   // ✅ contador pós-sucesso: fecha overlay com cm.close() em 10s
//   React.useEffect(() => {
//     if (successLeft == null) return;

// console.log("[CM] success countdown =", successLeft);

//     if (successLeft <= 0) {
//       setSuccessLeft(null);

// console.log("[CM] success countdown end -> close overlay");

//       cm.close(); // fecha de verdade
//       return;
//     }

//     const id = window.setTimeout(() => {
//       setSuccessLeft((v) => (v == null ? v : v - 1));
//     }, 1000);

//     return () => window.clearTimeout(id);
//   }, [successLeft, cm]);

//   // debug: verificar se chvkey atualiza no contexto
//   React.useEffect(() => {

// console.log("[CM] ctx chvkey changed:", state.chvkey);

//   }, [state.chvkey]);

//   if (!cm.open) return null;

//   const inputDisabled = authLoading || cm.locked;

//   return (
//     <ThemeProvider theme={light}>
//       <ContentCardPage>
//         <ContentCardBoxChaveKey open={true}>
//           <ContentCardBoxInput>
//             <CMFormWrapper>
//               <form onSubmit={handleSubmit}>
//                 <label htmlFor="cm_key">Acesso Master</label>

//                 <input
//                   id="cm_key"
//                   type="password"
//                   size={12}
//                   maxLength={32}
//                   autoFocus
//                   autoComplete="new-password"
//                   placeholder="Password..."
//                   value={cm.keyValue}
//                   onChange={(e) => cm.setKeyValue(e.target.value)}
//                   disabled={inputDisabled}
//                 />

//                 <small>
//                   Tentativas: {cm.fails} / {MAX_FAILS}
//                 </small>

//                 <small>
//                   Servidor: {serverTries} / {MAX_SERVER_TRIES}
//                 </small>

//                 {/* 1) após sucesso: mostra countdown 10s */}
//                 {successLeft != null ? <small>Fechando em: {successLeft}s</small> : null}

//                 {/* 2) se NÃO estiver locked nem em sucesso: mostra timeout 30s */}
//                 {successLeft == null && cm.secondsLeft != null && !cm.locked ? (
//                   <small>Tempo: {cm.secondsLeft}s</small>
//                 ) : null}

//                 {serverInfo ? <small className="cm-info">{serverInfo}</small> : null}
//                 {serverError ? <small className="cm-error">{serverError}</small> : null}
//               </form>
//             </CMFormWrapper>
//           </ContentCardBoxInput>
//         </ContentCardBoxChaveKey>
//       </ContentCardPage>
//     </ThemeProvider>
//   );
// };

// export default ChaveMasterOverlay;






// const inFlightRef = React.useRef(false);

// React.useEffect(() => {
//   if (!cm.open) return;
//   if (!cm.locked) return;

//   // impede disparo duplicado
//   if (inFlightRef.current) return;

//   const keyToSend = pendingKey.trim();

// console.log("[CM] effect auth start", { open: cm.open, locked: cm.locked, keyToSend });

//   if (!minimalLocalValidate(keyToSend)) {

// console.log("[CM] effect auth: key invalid -> unlock");

//     setServerError("Chave inválida (formato).");
//     setServerInfo(null);
//     cm.setLocked(false);
//     cm.setKeyValue("");
//     return;
//   }

//   let cancelled = false;
//   inFlightRef.current = true;

//   (async () => {
//     try {
//       setAuthLoading(true);
//       setServerError(null);
//       setServerInfo("Autenticando no servidor...");

// console.log("[CM] ENVIANDO PARA BACKEND:", keyToSend);

//       const r = await masterLogin(keyToSend);

// console.log("[CM] masterLogin response =", r);

//       if (cancelled) return;

//       if (!r.success || !r.token) {

// console.log("[CM] masterLogin failed");

//         setServerError(r.message ?? "Chave inválida (servidor).");
//         setServerInfo(null);

//         cm.setLocked(false);
//         cm.setKeyValue("");

//         setServerTries((prev) => {
//           const next = prev + 1;
//           if (next >= MAX_SERVER_TRIES) {
//             console.log("[CM] max server tries -> close overlay");
//             cm.close();
//             return 0;
//           }
//           return next;
//         });

//         return;
//       }

// console.log("[CM] masterLogin SUCCESS -> enterMaster");

//       enterMaster(r.token);

//       setServerTries(0);
//       setServerError(null);
//       setServerInfo("Master ativo.");

//       // dispara countdown de sucesso (se você estiver usando successLeft)
//       setSuccessLeft(10);
//     } catch (err: unknown) {
//       if (cancelled) return;

// console.error("[CM] masterLogin exception:", err);

//       setServerError("Erro de conexão com servidor.");
//       setServerInfo(null);
//       cm.setLocked(false);
//     } finally {
//       if (!cancelled) {
//         setAuthLoading(false);
//       }
//       inFlightRef.current = false;
//     }
//   })();

//   return () => {
//     cancelled = true;
//   };

//   // ⚠️ IMPORTANTE: NÃO COLOQUE authLoading AQUI
// }, [cm.open, cm.locked, pendingKey, cm, enterMaster]);


//   React.useEffect(() => {
//     if (!cm.open) return;
//     if (!cm.locked) return;
//     if (authLoading) return;

//     const keyToSend = pendingKey.trim();

// console.log("[CM] effect auth start", { open: cm.open, locked: cm.locked, keyToSend });

//     if (!minimalLocalValidate(keyToSend)) {

// console.log("[CM] effect auth: key invalid -> unlock");

//       setServerError("Chave inválida (formato).");
//       setServerInfo(null);
//       cm.setLocked(false);
//       cm.setKeyValue("");
//       return;
//     }

//     let cancelled = false;

//     (async () => {
//       try {
//         setAuthLoading(true);
//         setServerError(null);
//         setServerInfo("Autenticando no servidor...");

// console.log("[CM] ENVIANDO PARA BACKEND:", keyToSend);

//         const r = await masterLogin(keyToSend);

// console.log("[CM] masterLogin response =", r);

//         if (cancelled) return;

//         if (!r.success || !r.token) {

// console.log("[CM] masterLogin failed");

//           setServerError(r.message ?? "Chave inválida (servidor).");
//           setServerInfo(null);

//           cm.setLocked(false);
//           cm.setKeyValue("");

//           setServerTries((prev) => {
//             const next = prev + 1;
//             if (next >= MAX_SERVER_TRIES) {

// console.log("[CM] max server tries -> close overlay");

//               cm.close();
//               return 0;
//             }
//             return next;
//           });

//           return;
//         }

//         // ✅ sucesso
// console.log("[CM] masterLogin SUCCESS -> enterMaster");

//         enterMaster(r.token);

//         setServerTries(0);
//         setServerError(null);
//         setServerInfo("Master ativo.");

//         // ✅ para o contador de 30s do hook (porque locked=true); agora usamos o contador do overlay
//         setSuccessLeft(SUCCESS_SECONDS);
//       } catch (err: unknown) {
//         if (cancelled) return;

// console.error("[CM] masterLogin exception:", err);

//         setServerError("Erro de conexão com servidor.");
//         setServerInfo(null);

//         cm.setLocked(false);
//       } finally {
//         if (!cancelled) setAuthLoading(false);
//       }
//     })();

//     return () => {
//       cancelled = true;
//     };
//   }, [cm.open, cm.locked, pendingKey, authLoading, cm, enterMaster]);

