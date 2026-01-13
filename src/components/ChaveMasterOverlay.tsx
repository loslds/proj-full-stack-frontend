
// C:\repository\proj-full-stack-frontend\src\components\ChaveMasterOverlay.tsx
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import light from "../themes/light";
import { useChaveMaster } from "../funcs/funcs/useChaveMaster";
import { CheckDateToCecular } from "../funcs/funcs/CheckDateToCecular";

import { useAcessoContext, UseAcessoActions } from "./contexts/ContextAcesso";

import { ContentCardPage } from "./ContentCardPage";
import { ContentCardBoxChaveKey } from "./ContentCardBoxChaveKey";
import { ContentCardBoxInput } from "./ContentCardBoxInput";

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

  //React.useEffect(() => {
  console.log("[CM] Overlay montado");
//}, []);

  const { state, dispatch } = useAcessoContext();

  React.useEffect(() => {
    console.log("[CTX]", {
      chvkey: state.chvkey,
      logado: state.logado,
      modulo: state.modulo,
      id_modulo: state.id_modulo,
      id_nivel: state.id_nivel,
      acao: state.acao,
    });
  }, [state.chvkey, state.logado, state.modulo, state.id_modulo, state.id_nivel, state.acao]);


  const MAX_FAILS = 5;
  const TIMEOUT_SECONDS = 30;

  // ✅ bloqueia somente se já estiver logado normal (hotkey ainda abre durante boot)
  const hardBlocked: boolean = state.logado === true;

  const cm = useChaveMaster({
    enabled: true,
    blocked: hardBlocked,
    validateKey: (key: string) => CheckDateToCecular(key),
    maxKeyFails: MAX_FAILS,
    timeoutSeconds: TIMEOUT_SECONDS,

    
    debug: true, // 👈 ATIVA LOGS

    onResult: (ok: boolean) => {
      // não ativa Master se sistema não estiver pronto
      if (state.initsys !== true || state.chkdb !== true) {
        dispatch({ type: UseAcessoActions.set_CHVKEY, payload: false });
        return;
      }

      if (ok) {
        dispatch({ type: UseAcessoActions.set_LOGADO, payload: false });
        
        // se existir no reducer:
        dispatch({ type: UseAcessoActions.set_CHVKEY, payload: true });

        dispatch({ type: UseAcessoActions.set_ID_NIVEL, payload: 4 });
        dispatch({ type: UseAcessoActions.set_ACAO, payload: "VIS/EDI/ALT/EXC" });
        dispatch({ type: UseAcessoActions.set_ID_MODULO, payload: 8 });
        dispatch({ type: UseAcessoActions.set_MODULO, payload: "Master" });
      } else {
        dispatch({ type: UseAcessoActions.set_CHVKEY, payload: false });

        // se existir no reducer:
        dispatch({ type: UseAcessoActions.set_CHVKEY, payload: false });
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
                />

                <small>
                  Tentativas: {cm.fails} / {MAX_FAILS}
                </small>
                <small>Timeout: {TIMEOUT_SECONDS}s</small>
                <small>
                  Estado: initsys={String(state.initsys)} | chkdb={String(state.chkdb)} | logado=
                  {String(state.logado)}
                </small>
              </form>
            </CMFormWrapper>
          </ContentCardBoxInput>
        </ContentCardBoxChaveKey>
      </ContentCardPage>
    </ThemeProvider>
  );
};

export default ChaveMasterOverlay;


