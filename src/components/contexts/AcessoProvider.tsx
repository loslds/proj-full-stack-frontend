
import React, { useReducer } from 'react';
import { AcessoContext, AcessoReducer, initialData } from './ContextAcesso';

export const AcessoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(AcessoReducer, initialData);

  return (
    <AcessoContext.Provider value={{ state, dispatch }}>
      {children}
    </AcessoContext.Provider>
  );
};
