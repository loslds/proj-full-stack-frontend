

//C:\repository\proj-full-stack-frontend\src\components\contexts\hooks\useContext.ts
import React from "react";
import { useAcessoContext, StateAcesso, AcessoAction } from "../ContextAcesso";

export const useAcesso = () => {
  const { state, dispatch } = useAcessoContext();

  const setField = React.useCallback(
    <K extends keyof StateAcesso>(field: K, value: StateAcesso[K]) => {
      dispatch({ type: field, payload: value } as AcessoAction);
    },
    [dispatch]
  );

  return { state, dispatch, setField };
};