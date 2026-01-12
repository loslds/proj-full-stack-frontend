
//C:\repository\proj-full-stack-frontend\src\funcs\funcs\useChaveMaster.ts

import React from "react";

type KeyMatcher = (e: KeyboardEvent) => boolean;

export type UseChaveMasterOptions = {
  enabled: boolean;

  // se true, ignora teclado e não abre modal
  blocked?: boolean;

  // hotkey para abrir/fechar (default: Shift + Delete)
  hotkey?: KeyMatcher;

  // validação da chave (true = ok)
  validateKey: (key: string) => boolean;

  // máximo de tentativas erradas (default 5)
  maxKeyFails?: number;

  // timeout do modal aberto (segundos). se expirar, fecha e retorna false
  timeoutSeconds?: number;

  // retorno final: true/false
  onResult?: (ok: boolean) => void;
};

export type UseChaveMasterReturn = {
  open: boolean;
  keyValue: string;
  setKeyValue: React.Dispatch<React.SetStateAction<string>>;
  fails: number;
  submit: () => void;
  close: () => void;
  reset: () => void;
};

export function useChaveMaster(opts: UseChaveMasterOptions): UseChaveMasterReturn {
  const {
    enabled,
    blocked = false,
    hotkey = (e) => e.shiftKey && e.key === "Delete",
    validateKey,
    maxKeyFails = 5,
    timeoutSeconds,
    onResult,
  } = opts;

  const [open, setOpen] = React.useState(false);
  const [keyValue, setKeyValue] = React.useState("");
  const [fails, setFails] = React.useState(0);

  const reset = React.useCallback(() => {
    setKeyValue("");
    setFails(0);
  }, []);

  const close = React.useCallback(() => {
    setOpen(false);
    reset();
  }, [reset]);

  const finish = React.useCallback(
    (ok: boolean) => {
      close();
      onResult?.(ok);
    },
    [close, onResult]
  );

  const submit = React.useCallback(() => {
    if (!open) return;

    const ok = validateKey(keyValue);

    if (ok) {
      finish(true);
      return;
    }

    // falhou: incrementa tentativas
    setFails((prev) => {
      const next = prev + 1;
      if (next >= maxKeyFails) {
        finish(false);
      }
      return next;
    });

    // limpa input para próxima tentativa
    setKeyValue("");
  }, [open, keyValue, validateKey, maxKeyFails, finish]);

  // ⏱ timeout automático: se aberto por N segundos sem sucesso, encerra com false
  React.useEffect(() => {
    if (!open) return;
    if (!timeoutSeconds || timeoutSeconds <= 0) return;

    const t = window.setTimeout(() => {
      finish(false);
    }, timeoutSeconds * 1000);

    return () => window.clearTimeout(t);
  }, [open, timeoutSeconds, finish]);

  // ⌨️ listener global de teclado
  React.useEffect(() => {
    if (!enabled) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (blocked) return;

      // ESC fecha se aberto
      if (open && e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }

      // hotkey abre/fecha
      if (hotkey(e)) {
        e.preventDefault();
        setOpen((prev) => {
          const next = !prev;
          if (next) reset(); // ao abrir, zera para previsibilidade
          return next;
        });
        return;
      }

      // Enter confirma quando aberto
      if (open && e.key === "Enter") {
        e.preventDefault();
        submit();
        return;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enabled, blocked, hotkey, open, close, reset, submit]);

  return { open, keyValue, setKeyValue, fails, submit, close, reset };
}
