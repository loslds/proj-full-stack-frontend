
//C:\repository\proj-full-stack-frontend\src\components\contexts\helpers\logoutMaster.ts

import { Dispatch } from "react";
import { AcessoAction, UseAcessoActions } from "../ContextAcesso";

export function logoutMaster(dispatch: Dispatch<AcessoAction>) {
  localStorage.removeItem("token_admin");

  dispatch({ type: UseAcessoActions.set_AUTH_ADMIN, payload: "" });
  dispatch({ type: UseAcessoActions.set_CHVKEY, payload: false });
}