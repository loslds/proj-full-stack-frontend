// C:\repository\proj-full-stack-frontend\src\funcs\funcs\useChaveMaster.ts

// src/components/contexts/hooks/useChaveMaster.ts
import React from "react";

type KeyMatcher = (e: KeyboardEvent) => boolean;

export type UseChaveMasterOptions = {
  enabled: boolean;
  blocked?: boolean;

  // Default: Shift + Delete (com fallback Backspace)
  hotkey?: KeyMatcher;

  // validação mínima (formato)
  validateKey: (key: string) => boolean;

  onResult?: (ok: boolean) => void;
  debug?: boolean;
};

export type UseChaveMasterReturn = {
  open: boolean;
  keyValue: string;
  setKeyValue: (v: string) => void;

  // apenas valida e dispara onResult
  submit: () => boolean;

  close: () => void;
  reset: () => void;
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
    onResult,
    debug = false,
  } = opts;

  const [open, setOpen] = React.useState(false);
  const [keyValue, setKeyValueState] = React.useState("");

  const enabledRef = React.useRef(enabled);
  const blockedRef = React.useRef(blocked);
  const hotkeyRef = React.useRef(hotkey);
  const validateRef = React.useRef(validateKey);
  const onResultRef = React.useRef(onResult);

  const openRef = React.useRef(open);
  const keyRef = React.useRef(keyValue);

  React.useEffect(() => void (enabledRef.current = enabled), [enabled]);
  React.useEffect(() => void (blockedRef.current = blocked), [blocked]);
  React.useEffect(() => void (hotkeyRef.current = hotkey), [hotkey]);
  React.useEffect(() => void (validateRef.current = validateKey), [validateKey]);
  React.useEffect(() => void (onResultRef.current = onResult), [onResult]);

  React.useEffect(() => void (openRef.current = open), [open]);
  React.useEffect(() => void (keyRef.current = keyValue), [keyValue]);

  const setKeyValue = React.useCallback((v: string) => setKeyValueState(v), []);

  const reset = React.useCallback(() => {
    setKeyValueState("");
  }, []);

  const close = React.useCallback(() => {
    setOpen(false);
    reset();
  }, [reset]);

  const submit = React.useCallback((): boolean => {
    const currentKey = keyRef.current.trim();
    const ok = validateRef.current(currentKey);

    if (debug) console.log("[CM] submit validate =", { currentKey, ok });

    onResultRef.current?.(ok);
    return ok;
  }, [debug]);

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
    };

    window.addEventListener("keydown", onKeyDown, true);
    return () => window.removeEventListener("keydown", onKeyDown, true);
  }, [close, reset, submit]);

  return { open, keyValue, setKeyValue, submit, close, reset };
}

