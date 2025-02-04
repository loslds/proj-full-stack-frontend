
import React, { createContext, useContext, useState, ReactNode } from "react";

// Interface para a configuração do MySQL
interface MySQLConfig {
  host: string;
  user: string;
  password: string;
  database: string;
}

// Interface do contexto
interface MySQLContextType {
  isConnected: boolean | null;
  setIsConnected: (status: boolean) => void;
  dbConfig: MySQLConfig; // Adiciona a configuração do MySQL ao contexto
  setDbConfig: (config: MySQLConfig) => void; // Função para atualizar as configurações do MySQL
}

const MySQLContext = createContext<MySQLContextType | undefined>(undefined);

export const MySQLProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  // Estado para armazenar as configurações do banco de dados
  const [dbConfig, setDbConfig] = useState<MySQLConfig>({
    host: "",
    user: "",
    password: "",
    database: "",
  });

  return (
    <MySQLContext.Provider value={{ isConnected, setIsConnected, dbConfig, setDbConfig }}>
      {children}
    </MySQLContext.Provider>
  );
};

// Hook para consumir o contexto
export const useMySQL = () => {
  const context = useContext(MySQLContext);
  if (!context) {
    throw new Error("useMySQL deve ser usado dentro de um MySQLProvider");
  }
  return context;
};
