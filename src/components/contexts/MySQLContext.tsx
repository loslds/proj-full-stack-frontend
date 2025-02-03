
import React, { createContext, useContext, useState, ReactNode } from "react";

interface MySQLContextType {
  isConnected: boolean | null;
  setIsConnected: (status: boolean) => void;
}

const MySQLContext = createContext<MySQLContextType | undefined>(undefined);

export const MySQLProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  return (
    <MySQLContext.Provider value={{ isConnected, setIsConnected }}>
      {children}
    </MySQLContext.Provider>
  );
};

export const useMySQL = () => {
  const context = useContext(MySQLContext);
  if (!context) {
    throw new Error("useMySQL deve ser usado dentro de um MySQLProvider");
  }
  return context;
};
