
// C:\repository\proj-full-stack-frontend\src\components\ChaveMasterOverlay.tsx
import React from "react";
import "./ChaveMasterOverlay.css";
import styled, { ThemeProvider } from "styled-components";

import light from "../themes/light";
import { useChaveMaster } from "../funcs/funcs/useChaveMaster";
import { CheckDateToCecular } from "../funcs/funcs/CheckDateToCecular";

import { useAcessoContext, UseAcessoActions } from "./contexts/ContextAcesso";

import { ContentCardPage } from "./ContentCardPage";
import { ContentCardBoxChaveKey } from "./ContentCardBoxChaveKey";
import { ContentCardBoxInput } from "./ContentCardBoxInput";

// ✅ service que chama o backend e devolve token_admin
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

const ChaveMasterOverlay: React.FC = () => {
  const { state, dispatch } = useAcessoContext();

  const MAX_FAILS = 5;
  const TIMEOUT_SECONDS = 30;

  // ✅ bloqueia somente se já estiver logado normal
  const hardBlocked: boolean = state.logado === true;

  // (opcional) exibir erro de autenticação do backend no overlay
  const [serverError, setServerError] = React.useState<string | null>(null);
  const [authLoading, setAuthLoading] = React.useState(false);

  const clearAdminState = React.useCallback(() => {
    localStorage.removeItem("token_admin");
    dispatch({ type: UseAcessoActions.set_AUTH_ADMIN, payload: "" }); // ajuste se seu reducer usa null
    dispatch({ type: UseAcessoActions.set_CHVKEY, payload: false });
  }, [dispatch]);

  const activateMasterState = React.useCallback(
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
    validateKey: (key: string) => CheckDateToCecular(key),
    maxKeyFails: MAX_FAILS,
    timeoutSeconds: TIMEOUT_SECONDS,
    debug: true,

    // ✅ agora: ok local -> chama backend para obter token
    onResult: async (ok: boolean) => {
      setServerError(null);

      if (!ok) {
        clearAdminState();
        return;
      }

      // ok local, agora autentica no backend
      const typedKey = cm.keyValue;

      try {
        setAuthLoading(true);

        const r = await masterLogin(typedKey);

        if (!r.success || !r.token) {
          clearAdminState();
          setServerError(r.message ?? "Chave master inválida.");
          return;
        }

        activateMasterState(r.token);
      } catch {
        clearAdminState();
        setServerError("Falha ao autenticar no servidor.");
      } finally {
        setAuthLoading(false);
      }
    },
  });

  if (!cm.open) return null;

  return (
    <ThemeProvider theme={light}>
      <ContentCardPage>
        <ContentCardBoxChaveKey open={true}>
          <ContentCardBoxInput>
            <CMFormWrapper>
              <form
                name="chave-master"
                onSubmit={(e) => {
                  e.preventDefault();
                  cm.submit();
                }}
              >
                <label htmlFor="cm_key">Acesso Master</label>

                <input
                  id="cm_key"
                  name="cm_key"
                  type="password"
                  size={8}
                  autoFocus
                  placeholder="Chave..."
                  value={cm.keyValue}
                  onChange={(e) => cm.setKeyValue(e.target.value)}
                  disabled={authLoading}
                />

                <small>
                  Tentativas: {cm.fails} / {MAX_FAILS}
                </small>
                <small>Timeout: {TIMEOUT_SECONDS}s</small>

                <small>
                  Estado: initsys={String(state.initsys)} | chkdb={String(state.chkdb)} | logado=
                  {String(state.logado)}
                </small>

                {authLoading ? <small>Autenticando no servidor...</small> : null}
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
// import styled, { ThemeProvider } from "styled-components";

// import light from "../themes/light";
// import { useChaveMaster } from "../funcs/funcs/useChaveMaster";
// import { CheckDateToCecular } from "../funcs/funcs/CheckDateToCecular";

// import { useAcessoContext, UseAcessoActions } from "./contexts/ContextAcesso";

// import { ContentCardPage } from "./ContentCardPage";
// import { ContentCardBoxChaveKey } from "./ContentCardBoxChaveKey";
// import { ContentCardBoxInput } from "./ContentCardBoxInput";

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

// const ChaveMasterOverlay: React.FC = () => { 

//   //React.useEffect(() => {
//   console.log("[CM] Overlay montado");
// //}, []);

//   const { state, dispatch } = useAcessoContext();

//   React.useEffect(() => {
//     console.log("[CTX]", {
//       chvkey: state.chvkey,
//       logado: state.logado,
//       modulo: state.modulo,
//       id_modulo: state.id_modulo,
//       id_nivel: state.id_nivel,
//       acao: state.acao,
//     });
//   }, [state.chvkey, state.logado, state.modulo, state.id_modulo, state.id_nivel, state.acao]);


//   const MAX_FAILS = 5;
//   const TIMEOUT_SECONDS = 30;

//   // ✅ bloqueia somente se já estiver logado normal (hotkey ainda abre durante boot)
//   const hardBlocked: boolean = state.logado === true;

//   const cm = useChaveMaster({
//     enabled: true,
//     blocked: hardBlocked,
//     validateKey: (key: string) => CheckDateToCecular(key),
//     maxKeyFails: MAX_FAILS,
//     timeoutSeconds: TIMEOUT_SECONDS,
    
//     debug: true, // 👈 ATIVA LOGS

//     onResult: (ok: boolean) => {
//       console.log("[CM] onResult chamado", {
//         ok,
//         initsys: state.initsys,
//         chkdb: state.chkdb,
//       });

//       if (ok) {
//         dispatch({ type: UseAcessoActions.set_LOGADO, payload: false });
//         // se existir no reducer:
//         dispatch({ type: UseAcessoActions.set_CHVKEY, payload: true });

//         dispatch({ type: UseAcessoActions.set_ID_NIVEL, payload: 4 });
//         dispatch({ type: UseAcessoActions.set_ACAO, payload: "VIS/EDI/ALT/EXC" });
//         dispatch({ type: UseAcessoActions.set_ID_MODULO, payload: 8 });
//         dispatch({ type: UseAcessoActions.set_MODULO, payload: "Master" });

//         console.log("[CM] MASTER ATIVO (chvkey=true)");
//       } else {
//         dispatch({ type: UseAcessoActions.set_CHVKEY, payload: false });
       
//         console.log("[CM] MASTER ATIVO (chvkey=fase)");
//       }
//     },
//   });

//   if (!cm.open) return null;

//   return (
//     <ThemeProvider theme={light}>
//       <ContentCardPage>
//         <ContentCardBoxChaveKey open={true}>
//           <ContentCardBoxInput>
//             <CMFormWrapper>
//               <form
//                 name="chave-master"
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   cm.submit();
//                 }}
//               >
//                 <label htmlFor="cm_key">Acesso Master</label>

//                 <input
//                   id="cm_key"
//                   name="cm_key"
//                   type="password"
//                   size={8}
//                   autoFocus
//                   placeholder="Chave..."
//                   value={cm.keyValue}
//                   onChange={(e) => cm.setKeyValue(e.target.value)}
//                 />

//                 <small>
//                   Tentativas: {cm.fails} / {MAX_FAILS}
//                 </small>
//                 <small>Timeout: {TIMEOUT_SECONDS}s</small>
//                 <small>
//                   Estado: initsys={String(state.initsys)} | chkdb={String(state.chkdb)} | logado=
//                   {String(state.logado)}
//                 </small>
//               </form>
//             </CMFormWrapper>
//           </ContentCardBoxInput>
//         </ContentCardBoxChaveKey>
//       </ContentCardPage>
//     </ThemeProvider>
//   );
// };

// export default ChaveMasterOverlay;


