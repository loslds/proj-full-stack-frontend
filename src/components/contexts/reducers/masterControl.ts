
//C:\repository\proj-full-stack-frontend\src\components\contexts\reducers\acessoReducer.ts

import React from "react";
import { useAcessoContext } from "../ContextAcesso";

export const useMasterControl = () => {
  const { dispatch } = useAcessoContext();

  const logoutMaster = React.useCallback(() => {
    localStorage.removeItem("token_admin");

    dispatch({ type: "auth_admin", payload: "" });
    dispatch({ type: "chvkey", payload: false });
    dispatch({ type: "ismaster", payload: false });
    dispatch({ type: "cor", payload: "" });
    dispatch({ type: "acao", payload: "" });
    dispatch({ type: "nivel", payload: 0 });

    const userToken = localStorage.getItem("token_user") ?? "";

    dispatch({ type: "auth", payload: userToken });
    dispatch({ type: "logado", payload: Boolean(userToken) });

  }, [dispatch]);

  return { logoutMaster };
};

