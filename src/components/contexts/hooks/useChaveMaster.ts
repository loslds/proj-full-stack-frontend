

// C:\repository\proj-full-stack-frontend\src\funcs\funcs\useChaveMaster.ts
import React from "react";

type KeyMatcher = (e: KeyboardEvent) => boolean;

export type UseChaveMasterOptions = {
  enabled: boolean;
  blocked?: boolean;
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

  closeAfter: (ms: number) => void;

  locked: boolean;
  setLocked: (v: boolean) => void;

  // ✅ contador para UI
  secondsLeft: number | null;
};

export function useChaveMaster(opts: UseChaveMasterOptions): UseChaveMasterReturn {
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
    timeoutSeconds = 30,
    onResult,
    debug = false,
  } = opts;

  const [open, setOpen] = React.useState(false);
  const [keyValue, setKeyValueState] = React.useState("");
  const [fails, setFails] = React.useState(0);
  const [locked, setLockedState] = React.useState(false);
  const [secondsLeft, setSecondsLeft] = React.useState<number | null>(null);

  // refs
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
  const lockedRef = React.useRef(locked);

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
  React.useEffect(() => void (lockedRef.current = locked), [locked]);

  const closeTimerRef = React.useRef<number | null>(null);

  const clearCloseTimer = React.useCallback(() => {
    if (closeTimerRef.current != null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const setKeyValue = React.useCallback((v: string) => {
    setKeyValueState(v);
  }, []);

  const setLocked = React.useCallback((v: boolean) => {
    setLockedState(v);
  }, []);

  const reset = React.useCallback(() => {
    clearCloseTimer();
    setKeyValueState("");
    setFails(0);
    setLockedState(false);
    setSecondsLeft(null);
  }, [clearCloseTimer]);

  const close = React.useCallback(() => {
    clearCloseTimer();
    setOpen(false);
    reset();
  }, [clearCloseTimer, reset]);

  const closeAfter = React.useCallback(
    (ms: number) => {
      clearCloseTimer();
      const safeMs = Math.max(0, ms | 0);
      closeTimerRef.current = window.setTimeout(() => close(), safeMs);
    },
    [clearCloseTimer, close]
  );

  const submit = React.useCallback(() => {
    if (lockedRef.current) return;

    const currentKey = keyRef.current.trim();
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
      // ✅ trava para evitar submit repetido; overlay decide fechar depois do backend
      setLockedState(true);
      onResultRef.current?.(true);
      return;
    }

    setFails((prev) => {
      const next = prev + 1;
      if (next >= maxFailsRef.current) {
        setOpen(false);
        reset();
        onResultRef.current?.(false);
      }
      return next;
    });

    setKeyValueState("");
    onResultRef.current?.(false);
  }, [debug, reset]);

  // ⏱ contador + timeout real
  React.useEffect(() => {
    if (!open) {
      setSecondsLeft(null);
      return;
    }

    const secs = timeoutRef.current;
    if (!secs || secs <= 0) {
      setSecondsLeft(null);
      return;
    }

    setSecondsLeft(secs);

    if (debug) console.log("[CM] timeout start", secs);

    const interval = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev == null) return prev;
        // ✅ se já enviou/validou e travou (locked=true), PARA o contador
        // (o fechamento pós-sucesso fica por conta do overlay via closeAfter)
        if (lockedRef.current) return prev;
        const next = prev - 1;
        if (next <= 0) {
          window.clearInterval(interval);
          setOpen(false);
          reset();
          onResultRef.current?.(false);
          return 0;
        }
        return next;
        });
      }, 1000);

    return () => window.clearInterval(interval);

  }, [open, reset, debug]);

  // ⌨️ listener global
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!enabledRef.current) return;
      if (blockedRef.current) return;

      if (e.key === "Escape") {
        if (openRef.current) {
          e.preventDefault();
          close();
        }
        return;
      }

      if (hotkeyRef.current(e)) {
        e.preventDefault();
        setOpen((prev) => {
          const next = !prev;
          if (next) reset();
          return next;
        });
        return;
      }

      if (e.key === "Enter") {
        if (openRef.current && !lockedRef.current) {
          e.preventDefault();
          submit();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown, true);
    return () => window.removeEventListener("keydown", onKeyDown, true);
  }, [close, reset, submit]);

  return {
    open,
    keyValue,
    setKeyValue,
    fails,
    submit,
    close,
    reset,
    closeAfter,
    locked,
    setLocked,
    secondsLeft,
  };
}

