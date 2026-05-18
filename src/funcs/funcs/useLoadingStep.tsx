
// src/funcs/useLoadingStep.tsx
import React from "react";


export function useLoadingStep() {
  const [message, setMessage] = React.useState<string>("");
  const [running, setRunning] = React.useState<boolean>(false);
  const isMounted = React.useRef(true);

  const runStep = React.useCallback(
    async (
      fn: () => Promise<boolean>,
      mensagem1: string,
      mensagem2: string,
      mensagem3: string,
      mensagem4: string
    ): Promise<{ message: string; success: boolean; timedOut: boolean }> => {
      setRunning(true);
      setMessage(mensagem1);

      let timeoutId: ReturnType<typeof setTimeout> | null = null;

      try {
        const timeoutPromise = new Promise<never>((_, reject) => {
          timeoutId = setTimeout(() => {
            reject(new Error("timeout"));
          }, 3000);
        });

        const result = await Promise.race([fn(), timeoutPromise]);

        if (timeoutId) clearTimeout(timeoutId);

        if (result) {
          if (!isMounted.current) {
            return { message: mensagem2, success: true, timedOut: false };
          }
          setMessage(mensagem2);
          setRunning(false);
          return { message: mensagem2, success: true, timedOut: false };
        } else {
          if (!isMounted.current) {
            return { message: mensagem3, success: false, timedOut: false };
          }
          setMessage(mensagem3);
          setRunning(false);
          return { message: mensagem3, success: false, timedOut: false };
        }
      } catch (error: unknown) {
        if (timeoutId) clearTimeout(timeoutId);

        const isTimeout =
          error instanceof Error && error.message === "timeout";

        const finalMsg = isTimeout ? mensagem4 : mensagem3;

        if (!isMounted.current) {
          return {
            message: finalMsg,
            success: false,
            timedOut: isTimeout,
          };
        }

        setMessage(finalMsg);
        setRunning(false);
        return { message: finalMsg, success: false, timedOut: isTimeout };
      }
    }, [] 
  );

  return { message, running, runStep };
}
