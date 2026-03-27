
// C:\repository\proj-full-stack-frontend\src\components\contexts\AcessoProvider.tsx
import React from "react";
import { AcessoContext, AcessoContextType, initialData } from "./ContextAcesso";
import { AcessoReducer } from "./AcessoReducer";

interface AcessoProviderProps {
  children: React.ReactNode;
}

export const AcessoProvider: React.FC<AcessoProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(AcessoReducer, initialData);

  const value: AcessoContextType = { state, dispatch };

  return (
    <AcessoContext.Provider value={value}>
      {children}
    </AcessoContext.Provider>
  );
};