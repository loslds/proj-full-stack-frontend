
import React, { useEffect } from "react";
import * as Sy from './stylesSystem'; // seus estilos locais
import { ContentSysMain } from "./ContentSysMain"; // seu layout principal
import { CardHlpFooter1 } from "./CardHlpFooter1"; // rodapé com instruções

interface PropsCardCheckingSystema {
  messages: string[];
  systemOk: boolean | null; 
  onAutoCloseCountdown?: (secondsLeft: number) => void;
  onClose?: () => void; // 🔹 opcional
}

export const CardCheckingSystema: React.FC<PropsCardCheckingSystema> = ({
  messages,
  systemOk,
  onAutoCloseCountdown,
  onClose,
}) => {

  // Temporizador para auto fechamento do modal, se tudo estiver OK
  const [counter, setCounter] = React.useState(5);
  useEffect(() => {
    if (systemOk === true) {
      setCounter(5); // reinicia contagem
      const interval = setInterval(() => {
        setCounter((prev) => {
          const next = prev - 1;
          onAutoCloseCountdown?.(next);
          if (next <= 0) {
            clearInterval(interval);
            onClose?.(); // ✅ chamada segura
          }
          return next;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [systemOk, onAutoCloseCountdown, onClose]);

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
          ✅ Sistema pronto. Fechando em {counter}s...
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
        onclosesair={onClose}
        label="ROTINA → INICIAL → HOME"
        texto={
          systemOk === false
            ? "A verificação falhou. click na imagem abaixo ou aqui >"
            : "Para sair, aguarde a conclusão da verificação."
        }
        // texto="Para sair, click na imagem abaixo ou aqui >"
      />
    </ContentSysMain>
  );
};

