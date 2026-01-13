
// C:\repository\proj-full-stack-frontend\src\funcs\funcs\useChaveMaster.ts
import React from "react";

type KeyMatcher = (e: KeyboardEvent) => boolean;

export type UseChaveMasterOptions = {
  enabled: boolean;
  blocked?: boolean;

  // Default: Shift + Delete (com fallback Backspace)
  hotkey?: KeyMatcher;

  validateKey: (key: string) => boolean;

  maxKeyFails?: number;
  timeoutSeconds?: number;

  onResult?: (ok: boolean) => void;

  debug?: boolean;
};

export type UseChaveMasterReturn = {
  open: boolean;
  keyValue: string;
  setKeyValue: (v: string) => void;
  fails: number;
  submit: () => void;
  close: () => void;
  reset: () => void;
};

export function useChaveMaster(opts: UseChaveMasterOptions): UseChaveMasterReturn {
  console.log("[CM] hook executado");

  const {
    enabled,
    blocked = false,
    hotkey = (e) =>
      e.shiftKey &&
      (e.key === "Delete" ||
        e.code === "Delete" ||
        e.key === "Backspace" ||
        e.code === "Backspace"),
    validateKey,
    maxKeyFails = 5,
    timeoutSeconds,
    onResult,
    debug = false,
  } = opts;

  const [open, setOpen] = React.useState(false);
  const [keyValue, setKeyValueState] = React.useState("");
  const [fails, setFails] = React.useState(0);

  // ---- refs (evitar closures antigas no listener global) ----
  const enabledRef = React.useRef(enabled);
  const blockedRef = React.useRef(blocked);
  const hotkeyRef = React.useRef(hotkey);
  const validateRef = React.useRef(validateKey);
  const onResultRef = React.useRef(onResult);
  const maxFailsRef = React.useRef(maxKeyFails);
  const timeoutRef = React.useRef(timeoutSeconds);

  const openRef = React.useRef(open);
  const keyRef = React.useRef(keyValue);
  const failsRef = React.useRef(fails);

  React.useEffect(() => void (enabledRef.current = enabled), [enabled]);
  React.useEffect(() => void (blockedRef.current = blocked), [blocked]);
  React.useEffect(() => void (hotkeyRef.current = hotkey), [hotkey]);
  React.useEffect(() => void (validateRef.current = validateKey), [validateKey]);
  React.useEffect(() => void (onResultRef.current = onResult), [onResult]);
  React.useEffect(() => void (maxFailsRef.current = maxKeyFails), [maxKeyFails]);
  React.useEffect(() => void (timeoutRef.current = timeoutSeconds), [timeoutSeconds]);

  React.useEffect(() => void (openRef.current = open), [open]);
  React.useEffect(() => void (keyRef.current = keyValue), [keyValue]);
  React.useEffect(() => void (failsRef.current = fails), [fails]);

  const setKeyValue = React.useCallback((v: string) => {
    setKeyValueState(v);
  }, []);

  const reset = React.useCallback(() => {
    setKeyValueState("");
    setFails(0);
  }, []);

  const close = React.useCallback(() => {
    setOpen(false);
    reset();
  }, [reset]);

  const finish = React.useCallback(
    (ok: boolean) => {
      setOpen(false);
      reset();
      onResultRef.current?.(ok);
    },
    [reset]
  );

  const submit = React.useCallback(() => {
    const currentKey = keyRef.current;
    if (!currentKey) return;

    const ok = validateRef.current(currentKey);

    if (debug) {
      console.log("[CM] VALIDACAO", {
        keyDigitada: currentKey,
        ok,
        failsAtual: failsRef.current,
        maxFails: maxFailsRef.current,
      });
    }

    if (ok) {
      finish(true);
      return;
    }

    setFails((prev) => {
      const next = prev + 1;
      if (next >= maxFailsRef.current) finish(false);
      return next;
    });

    setKeyValueState("");
  }, [finish, debug]);

  // ⏱ timeout: reinicia sempre que abre
  React.useEffect(() => {
    if (!open) return;

    const secs = timeoutRef.current;
    if (!secs || secs <= 0) return;

    if (debug) console.log("[CM] timeout start", secs);

    const t = window.setTimeout(() => {
      if (debug) console.log("[CM] timeout fired");
      finish(false);
    }, secs * 1000);

    return () => window.clearTimeout(t);
  }, [open, finish, debug]);

  // ⌨️ listener global
  React.useEffect(() => {
    if (debug) console.log("[CM] instalando keydown listener");

    const onKeyDown = (e: KeyboardEvent) => {
      if (debug) {
        console.log("[CM] keydown", {
          key: e.key,
          code: e.code,
          shift: e.shiftKey,
          ctrl: e.ctrlKey,
          alt: e.altKey,
          enabled: enabledRef.current,
          blocked: blockedRef.current,
          open: openRef.current,
        });
      }

      if (!enabledRef.current) return;

      if (blockedRef.current) {
        if (debug && hotkeyRef.current(e)) {
          console.log("[CM] blocked -> hotkey ignorada");
        }
        return;
      }

      // ESC fecha se estiver aberto
      if (e.key === "Escape") {
        if (openRef.current) {
          e.preventDefault();
          close();
        }
        return;
      }

      // hotkey abre/fecha
      if (hotkeyRef.current(e)) {
        if (debug) console.log("[CM] HOTKEY DETECTADA -> toggle overlay");
        e.preventDefault();
        setOpen((prev) => {
          const next = !prev;
          if (debug) console.log("[CM] overlay open =", next);
          if (next) reset();
          return next;
        });
        return;
      }

      // Enter confirma somente se aberto
      if (e.key === "Enter") {
        if (openRef.current) {
          e.preventDefault();
          submit();
        }
      }
    };

    // capture=true para pegar mesmo com foco em input/rotas
    window.addEventListener("keydown", onKeyDown, true);

    return () => {
      if (debug) console.log("[CM] removendo keydown listener");
      window.removeEventListener("keydown", onKeyDown, true);
    };
  }, [close, reset, submit, debug]);

  return {
    open,
    keyValue,
    setKeyValue,
    fails,
    submit,
    close,
    reset,
  };
}
