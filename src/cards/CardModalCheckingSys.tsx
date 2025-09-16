// C:\repository\proj-full-stack-frontend\src\cards\CardCheckingSys.tsx
import React from "react";

import { useAcessoContext } from "../components/contexts/useAcessoContext.tsx";

import { initSystemApi, InitResponse } from "../api/db/init";
import * as M from "../modal/stylesModal";
import { ContentModal } from "../modal/ContentModal";
import { CardModal } from "../modal/CardModal";
import { TitleModal } from "../modal/TitleModal";
import { CardButtonModal } from "../modal/CardButtonModal";
import * as Sy from "./stylesSystem";
import { ContentSysMainItens } from "./ContentSysMainItens";
import { CardHlpFooter1 } from "./CardHlpFooter1";

import bt_close from "../assets/svgs/bt_close.svg";
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
  messages = [],
}) => {
  const { estate, dispatch } = useAcessoContext();

  const [systemMessages, setSystemMessages] = React.useState<string[]>([...messages]);
  const [systemOk, setSystemOk] = React.useState<boolean | null>(null); // null = em progresso

  const appendMessage = (msg: string) =>
    setSystemMessages((prev) => [...prev, msg]);
  
  React.useEffect(() => {
  const performSystemCheck = async () => {
    setSystemMessages([...messages]); // inicializa mensagens
    setSystemOk(null);

    try {
      const data: InitResponse = await initSystemApi();

      for (const step of data.steps) {
        setSystemMessages((prev) => [...prev, step.message]);
        if (step.delay) await new Promise((r) => setTimeout(r, step.delay));
      }

      setSystemOk(data.success);
    } catch (error: unknown) {
      console.error("Erro na verificação do sistema:", error);
      setSystemMessages((prev) => [...prev, "❌ Erro inesperado ao inicializar o sistema."]);
      setSystemOk(false);

      const errMsg = error instanceof Error ? error.message : String(error);
      await fetch("../api/logs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          origem: "CardCheckingSystema",
          mensagem: errMsg,
          data: new Date().toISOString(),
        }),
      }).catch((e) => console.warn("Falha ao enviar log ao backend:", e));
    }
  };

  performSystemCheck();
}, []); // <-- nenhuma dependência, roda apenas na montagem


  // Atualiza contexto sempre que systemOk mudar
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
          {systemMessages.map((m, i) => (
            <Sy.DivMessageLine key={i}>{m}</Sy.DivMessageLine>
          ))}

          {systemOk === true && (
            <Sy.DivStatus success>✅ Sistema pronto, checado...</Sy.DivStatus>
          )}

          {systemOk === false && (
            <Sy.DivStatus>
              ❌ Verificação falhou. Entre em contato com o administrador.
            </Sy.DivStatus>
          )}

          {systemOk === null && (
            <Sy.DivStatus>⏳ Em progresso...</Sy.DivStatus>
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

