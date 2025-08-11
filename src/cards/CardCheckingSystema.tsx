import React, { useEffect } from "react";
import * as Sy from './stylesSystem'; // seus estilos locais
import { ContentSysMain } from "./ContentSysMain"; // seu layout principal
import { CardHlpFooter1 } from "./CardHlpFooter1"; // rodapé com instruções

interface PropsCardCheckingSystema {
  messages: string[];
  systemOk: boolean | null; 
  onAutoCloseCountdown?: (secondsLeft: number) => void;
}

export const CardCheckingSystema: React.FC<PropsCardCheckingSystema> = ({
  messages,
  systemOk,
  onAutoCloseCountdown,
}) => {

  // Temporizador para auto fechamento do modal, se tudo estiver OK
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
      <Sy.DivMessageLine>
        {messages.map((m: string, i: number) => (
          <Sy.DivMessageLine key={i}>{m}</Sy.DivMessageLine>
        ))}
      </Sy.DivMessageLine>

      {/* Status final */}
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

      {/* Rodapé de ajuda */}
      <CardHlpFooter1
        label="ROTINA → INICIAL"
        texto="Para sair, aguarde a conclusão da verificação."
      />
    </ContentSysMain>
  );
};
