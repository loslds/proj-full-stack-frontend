

//C:\repository\proj-full-stack-frontend\src\components\contexts\AcessoReducer.ts
import { AcessoAction, StateAcesso } from "./ContextAcesso";

export const AcessoReducer = (
  state: StateAcesso,
  action: AcessoAction
): StateAcesso => {
  return {
    ...state,
    [action.type]: action.payload,
  };
};