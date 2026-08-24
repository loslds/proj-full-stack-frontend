
//C:\repository\proj-full-stack-frontend\src\components\contexts\helpers\logoutMaster.ts

import { Dispatch } from "react";
import { AcessoAction } from "../ContextAcesso";

export function logoutLogin(dispatch: Dispatch<AcessoAction>) {
  // remove token
  localStorage.removeItem("token_aut");

  // limpa estado do context
  dispatch({ type: "auth", payload: "" });
  dispatch({ type: "logado", payload: "" });
  dispatch({ type: "identificador", payload: "" });
  dispatch({ type: "senha", payload: "" });
  dispatch({ type: "pinnumber", payload: "" });
  dispatch({ type: "pinchar", payload: "" });
}

