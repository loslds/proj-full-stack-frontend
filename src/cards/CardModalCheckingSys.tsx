
// C:\repository\proj-full-stack-frontend\src\cards\CardCheckingSystema.tsx
import React from "react";
import { useAcessoContext } from '../components/contexts/useAcessoContext';
import { UseAcessoActions } from '../components/contexts/ContextAcesso';
import { initSystemApi, InitResponse } from '../api/db/init';
import * as M from '../modal/stylesModal';
import { ContentModal } from '../modal/ContentModal';
import { CardModal } from '../modal/CardModal';
import { TitleModal } from '../modal/TitleModal';
import { CardButtonModal } from '../modal/CardButtonModal';
import bt_close from '../../assets/svgs/bt_close.svg';
import * as Sy from './stylesSystem';
import { ContentSysMainItens } from "./ContentSysMainItens";
import { CardHlpFooter1 } from "./CardHlpFooter1";


interface PropsModalCardCheckingSys {
  ptop?: string;
  pwidth?: string;
  pheight?: string;
  titulo?: string;
  onClose?: () => void;
  onAutoCloseCountdown?: (secondsLeft: number) => void;
  messages?: string[];
}
export const CardModalCheckingSys: React.FC<PropsModalCardCheckingSys> = ({
  ptop,
  pwidth,
  pheight,
  titulo,
  onClose,
  onAutoCloseCountdown,
  messages = []
}) => {
  const { dispatch } = useAcessoContext();
  const [systemMessages, setSystemMessages] = React.useState<string[]>([...messages]);
  const [systemOk, setSystemOk] = React.useState<boolean | null>(null); // null = em progresso
  const appendMessage = (msg: string) => setSystemMessages(prev => [...prev, msg]);
  const performSystemCheck = React.useCallback(async () => {
    setSystemMessages([...messages]);
    setSystemOk(null);

    try {
      const data: InitResponse = await initSystemApi();
      for (const step of data.steps) {
        appendMessage(step.message);
        if (step.delay) await new Promise(r => setTimeout(r, step.delay));
      }
      setSystemOk(data.success);
    } catch (error: unknown) {
      console.error(error);
      appendMessage("❌ Erro inesperado ao inicializar o sistema.");
      setSystemOk(false);
    }
  }, [messages]);

  // Executa checagem uma única vez
  const hasCheckedRef = React.useRef(false);
  React.useEffect(() => {
   if (!hasCheckedRef.current) {
     performSystemCheck();
     hasCheckedRef.current = true;
   }
  }, [performSystemCheck]);

  // Atualiza contexto
  React.useEffect(() => {
    dispatch({ type: UseAcessoActions.SET_CHKDB, payload: systemOk });
  }, [systemOk, dispatch]);

  // Contador interno de auto-close
  React.useEffect(() => {
    if (systemOk === true) {
      let counter = 15;
      const interval = setInterval(() => { 
        counter -= 1; 
        onAutoCloseCountdown?.(counter);
        if (counter <= 0) {
          clearInterval(interval);
          onClose?.();
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [systemOk, onClose, onAutoCloseCountdown]);

  return (
    <M.Content>
      <ContentModal ptop={ptop} pwidth={pwidth} pheight={pheight}>
        <CardModal>
          <TitleModal titulo={titulo} />
          <CardButtonModal imgbm={bt_close} titbm="Fechar..." onClick={onClose} />
        </CardModal>

        <ContentSysMainItens>
          {[...systemMessages].map((m, i) => (
            <Sy.DivMessageLine key={i}>{m}</Sy.DivMessageLine>
          ))}

          {systemOk === true && (
            <Sy.DivStatus success>
              ✅ Sistema pronto, checado...
            </Sy.DivStatus>
          )}

          {systemOk === false && (
            <Sy.DivStatus>
              ❌ Verificação falhou. Entre em contato com o administrador.
            </Sy.DivStatus>
          )}

          {systemOk === null && (
            <Sy.DivStatus>
              ⏳ Em progresso...
            </Sy.DivStatus>
          )}
        </ContentSysMainItens>

        <CardHlpFooter1
          onclosesair={onClose}
          label="ROTINA → INICIAL → HOME"
          texto={
            systemOk === false
              ? "A verificação falhou. clique na imagem abaixo ou aqui >"
              : "Para sair, aguarde a conclusão da verificação..."
          }
        />
      </ContentModal>
    </M.Content>
  );
};

