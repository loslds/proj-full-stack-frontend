import React, { useEffect } from "react";
import * as Sy from './stylesSystem';
import { ContentSysMain } from "./ContentSysMain";

// ✅ Corrigida a forma de declarar a interface
interface PropsCardCheckingSystema {
  messages: string[];
  systemOk?: boolean;
  onAutoCloseCountdown?: (secondsLeft: number) => void;
}

export const CardCheckingSystema: React.FC<PropsCardCheckingSystema> = ({
  messages,
  systemOk,
  onAutoCloseCountdown,
}) => {
  useEffect(() => {
    if (systemOk === true) {
      let counter = 5;
      const interval = setInterval(() => {
        counter -= 1;
        onAutoCloseCountdown?.(counter);
        if (counter <= 0) clearInterval(interval);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [systemOk, onAutoCloseCountdown]);

  return (
    <ContentSysMain>
      {messages.map((m: string, i: number) => (
        <Sy.DivMessageLine key={i}>{m}</Sy.DivMessageLine>
      ))}

      {systemOk === true && (
        <Sy.DivStatus success>
          ✅ Sistema pronto. Fechando em breve...
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
    </ContentSysMain>
  );
};
