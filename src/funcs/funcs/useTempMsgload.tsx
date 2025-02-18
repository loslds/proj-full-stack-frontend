
import React from "react";

interface TemporaryMsgload {
  message?: string;
  duration?: number;
};
export const useTempMsgload = () => {
  const [msgload, setMsgload] = React.useState<string | null>(null); // Armazena a mensagem atual
  const [temporarymsgload, setTemporaryMsgload] = React.useState<TemporaryMsgload | null>(null); // Armazena a mensagem temporária

  // Efeito para limpar a mensagem temporária após o tempo especificado
  React.useEffect(() => {
    if (temporarymsgload) {
      const timer = setTimeout(() => {
        setTemporaryMsgload(null); // Limpa a mensagem temporária após o tempo
      }, temporarymsgload.duration);

      return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado
    }
  }, [temporarymsgload]);

  // Função para definir uma mensagem temporária
  const setTempMsgload = (message: string, duration: number) => {
    setTemporaryMsgload({ message, duration });
  };

  // Função para definir uma mensagem instantânea
  const setInstantMsgload = (message: string) => {
    setMsgload(message);
  };

  return {
    msgload, // Mensagem instantânea
    temporarymsgload: temporarymsgload?.message || null, // Mensagem temporária
    setTemporaryMsgload: setTempMsgload, // Define uma mensagem temporária
    setInstantMsgload, // Define uma mensagem instantânea
  };
};

export default useTempMsgload;





// interface TempPayloadHook {
//   payload: string | null;
//   setTemporaryPayload: (message: string, duration?: number) => void;
// }

// export function useTempPayload(): TempPayloadHook {
//   const [payload, setPayload] = React.useState<string | null>(null);
//   const [timeoutId, setTimeoutId] = React.useState< number | null>(null);

//   const setTemporaryPayload = (message: string, duration: number = 3000) => {
//     setPayload(message);
//     if (timeoutId) clearTimeout(timeoutId);
//     const id = setTimeout(() => {
//       setPayload(null);
//     }, duration);
//     setTimeoutId(id);
//   };

//   React.useEffect(() => {
//     return () => {
//       if (timeoutId) clearTimeout(timeoutId);
//     };
//   }, [timeoutId]);

//   return { payload, setTemporaryPayload };
// }

