import React from "react";
import * as Sy from './stylesSystem';
import { ContentSysMainItens } from "./ContentSysMainItens"
import { CardHlpFooter1 } from "./CardHlpFooter1";
interface PropsCardCheckingSystema {
  messages: string[];
  systemOk: boolean | null; 
  onClose?: () => void;
  onAutoCloseCountdown?: (secondsLeft: number) => void; // callback mantido
}
export const CardCheckingSystema: React.FC<PropsCardCheckingSystema> = ({
  messages,
  systemOk,
  onClose,
  onAutoCloseCountdown,
  }) => {
  // Temporizador interno para auto fechamento do modal
  React.useEffect(() => {
    if (systemOk === true) {
      let counter = 15; // contador interno
      const interval = setInterval(() => {
        counter -= 1;
        onAutoCloseCountdown?.(counter); // callback para Home ou outro lugar
        if (counter <= 0) {
          clearInterval(interval);
          onClose?.(); // fecha modal automaticamente
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [systemOk, onClose, onAutoCloseCountdown]);

  return (
    <ContentSysMainItens>
      {messages.map((m: string, i: number) => (
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
    
      <CardHlpFooter1 
        onclosesair={onClose}
        label="ROTINA → INICIAL → HOME"
        texto={
          systemOk === false
            ? "A verificação falhou. click na imagem abaixo ou aqui >"
            : "Para sair, aguarde a conclusão da verificação..."
        }  
      />
      <Sy.DivStatus>
          ⚠️ Para sair, aguarde a conclusão da verificação..
      </Sy.DivStatus>
    </ContentSysMainItens>
  );
};
