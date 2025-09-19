

import React from "react";
import { AcessoContext } from "./ContextAcesso";
import { AcessoReducer, initialData } from "../contexts/ContextAcesso"; // exemplo
import { AcessoContextType } from "./ContextAcesso";

// 🔹 Props do Provider
interface AcessoProviderProps {
  children: React.ReactNode;
}

// 🔹 Componente Provider
export const AcessoProvider: React.FC<AcessoProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer(AcessoReducer, initialData);

  const value: AcessoContextType = { state, dispatch };

  return (
    <AcessoContext.Provider value={value}>
      {children}
    </AcessoContext.Provider>
  );
};




// import React from 'react';
// import { AcessoContext, AcessoReducer, initialData } from './ContextAcesso';

// export const AcessoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [state, dispatch] = React.useReducer(AcessoReducer, initialData);

//   return (
//     <AcessoContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AcessoContext.Provider>
//   );
// };
