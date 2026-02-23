
//C:\repository\proj-full-stack-frontend\src\components\contexts\reducers\acessoReducer.ts

import React from "react";
import { useAcessoContext, UseAcessoActions } from "../ContextAcesso";

export const useMasterControl = () => {
  const { dispatch } = useAcessoContext();

  const logoutMaster = React.useCallback(() => {
    localStorage.removeItem("token_admin");

    dispatch({ type: UseAcessoActions.set_AUTH_ADMIN, payload: "" });
    dispatch({ type: UseAcessoActions.set_CHVKEY, payload: false });

    const userToken = localStorage.getItem("token_user") ?? "";

    dispatch({ type: UseAcessoActions.set_AUTH, payload: userToken });
    dispatch({ type: UseAcessoActions.set_LOGADO, payload: Boolean(userToken) });
  }, [dispatch]);

  return { logoutMaster };
};