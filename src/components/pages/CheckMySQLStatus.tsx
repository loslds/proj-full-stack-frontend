
import React, { useEffect, useState } from 'react';
import { useMySQL } from '../contexts/MySQLContext';

interface MySQLConfig {
  host: string;
  user: string;
  password: string;
  database: string;
}

interface CheckMySQLStatusProps {
  config: MySQLConfig;
}

const CheckMySQLStatus: React.FC<CheckMySQLStatusProps> = ({ config }) => {
  const { setIsConnected } = useMySQL();
  const [status, setStatus] = useState<{ isInstalled: boolean; isConnected: boolean } | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/db/check-mysql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data);
        setIsConnected(data.isConnected); // Atualiza o contexto!
      })
      .catch(() => setStatus({ isInstalled: false, isConnected: false }));
  }, [config]);

  return (
    <div>
      <h3>Status do MySQL</h3>
      {status ? (
        <ul>
          <li>MySQL Instalado: {status.isInstalled ? "Sim ✅" : "Não ❌"}</li>
          <li>Conectado ao MySQL: {status.isConnected ? "Sim ✅" : "Não ❌"}</li>
        </ul>
      ) : (
        <p>Verificando...</p>
      )}
    </div>
  );
};

export default CheckMySQLStatus;
