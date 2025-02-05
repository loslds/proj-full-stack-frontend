
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export type StateMysql = {
  // titulo da Pagina
  page: string | null;
  // Titulo da ação em Pagina
  aplicacao: string | null;
  // variaveis em Pagina
  host: string | null;
  user: string | null;
  password: string | null;
  database: string | null;
  auth: string | null;
  isConnected: boolean;

};

export const initialData: StateMysql = {
  page: '',
  aplicacao: '',
  host: '',
  user: '',
  password: '',
  database: '',
  auth: '',
  isConnected: false
};

export enum   MysqlUseActions {
  SET_PAGE = 'SET_PAGE',
  SET_APLICACAO = 'SET_APLICACAO',
  SET_HOST = 'SET_HOST',
  SET_USER = 'SET_USER',
  SET_PASSWORD = 'SET_PASSWORD',
  SET_DATABASE = 'SET_DATABASE',
  SET_AUTH = 'SET_AUTH',
  SET_ISCONNECTED = 'ISCONNECTED'
};

type MysqlAction =
  | { type: MysqlUseActions.SET_PAGE; payload: string | null }
  | { type: MysqlUseActions.SET_APLICACAO; payload: string | null }
  | { type: MysqlUseActions.SET_HOST; payload: string | null }
  | { type: MysqlUseActions.SET_USER; payload: string | null }
  | { type: MysqlUseActions.SET_PASSWORD; payload: string | null }
  | { type: MysqlUseActions.SET_DATABASE; payload: string | null }
  | { type: MysqlUseActions.SET_AUTH; payload: string | null }
  | { type: MysqlUseActions.SET_ISCONNECTED; payload: boolean };
  
const MysqlReducer = (state: StateMysql, action: MysqlAction) => {
  switch (action.type) {
    case MysqlUseActions.SET_PAGE:
      return { ...state, page: action.payload };
    case MysqlUseActions.SET_APLICACAO:
      return { ...state, aplicacao: action.payload };
    case MysqlUseActions.SET_HOST:
      return { ...state, host: action.payload };
    case MysqlUseActions.SET_USER:
      return { ...state, user: action.payload };
    case MysqlUseActions.SET_PASSWORD:
      return { ...state, password: action.payload };
    case MysqlUseActions.SET_DATABASE:
      return { ...state, database: action.payload };
    case MysqlUseActions.SET_AUTH:
      return { ...state, auth: action.payload };
    case MysqlUseActions.SET_ISCONNECTED:
      return { ...state, isConnected: action.payload };
    default:
      return state;
  }
};

type MysqlContextType = {
  state: StateMysql;
  dispatch: React.Dispatch<MysqlAction>;
};
const MySQLContext = createContext<MysqlContextType | undefined>(undefined);

export const MySQLProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(MysqlReducer, initialData);
  return (
    <MySQLContext.Provider value={{ state, dispatch }}>
      {children}
    </MySQLContext.Provider>
  );
};

// Hook para facilitar o uso do contexto
export const useMySQLContext = () => {
  const context = useContext(MySQLContext);
  if (!context) {
    throw new Error('useMySQLContext deve ser usado dentro de um MySQLProvider');
  }
  return context;
};

///// fim //////////




// import React, { createContext, useContext, useState, ReactNode } from "react";

// // Interface para a configuração do MySQL
// interface MySQLConfig {
//   host: string;
//   user: string;
//   password: string;
//   database: string;
// }

// // Interface do contexto
// interface MySQLContextType {
//   isConnected: boolean | null;
//   setIsConnected: (status: boolean) => void;
//   dbConfig: MySQLConfig; // Adiciona a configuração do MySQL ao contexto
//   setDbConfig: (config: MySQLConfig) => void; // Função para atualizar as configurações do MySQL
// }

// const MySQLContext = createContext<MySQLContextType | undefined>(undefined);

// export const MySQLProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [isConnected, setIsConnected] = useState<boolean | null>(null);

//   // Estado para armazenar as configurações do banco de dados
//   const [dbConfig, setDbConfig] = useState<MySQLConfig>({
//     host: "",
//     user: "",
//     password: "",
//     database: "",
//   });

//   return (
//     <MySQLContext.Provider value={{ isConnected, setIsConnected, dbConfig, setDbConfig }}>
//       {children}
//     </MySQLContext.Provider>
//   );
// };

// // Hook para consumir o contexto
// export const useMySQL = () => {
//   const context = useContext(MySQLContext);
//   if (!context) {
//     throw new Error("useMySQL deve ser usado dentro de um MySQLProvider");
//   }
//   return context;
// };
