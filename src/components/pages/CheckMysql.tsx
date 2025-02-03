import React from 'react';
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

const CheckMysql: React.FC<CheckMySQLStatusProps> = ({ config }) => {
  const { setIsConnected } = useMySQL();
  const [status, setStatus] = React.useState<{ isInstalled: boolean; isConnected: boolean } | null>(null);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/api/db/check-mysql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(config),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatus(data);
        setIsConnected(data.isConnected);
      })
    .catch(() => setStatus({ isInstalled: false, isConnected: false }))
    .finally(() => setLoading(false));
  }, [config]);



  return (
    <div>
      <h3>Status do MySQL</h3>
      {loading ? <p>Verificando...</p> : null}
      {status ? (
        <ul>
          <li>MySQL Instalado: {status.isInstalled ? "Sim ✅" : "Não ❌"}</li>
          <li>Conectado ao MySQL: {status.isConnected ? "Sim ✅" : "Não ❌"}</li>
        </ul>
      ) : null}

    </div>
  );
};

export default CheckMysql;
