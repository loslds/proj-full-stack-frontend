
//C:\repository\proj-full-stack-frontend\src\components\contexts\helpers\logoutMaster.ts

import { Dispatch } from "react";
import { AcessoAction } from "../ContextAcesso";

export function logoutMaster(dispatch: Dispatch<AcessoAction>) {
  // remove token
  localStorage.removeItem("token_admin");

  // limpa estado do context
  dispatch({ type: "auth_admin", payload: "" });
  dispatch({ type: "chvkey", payload: false });
}

