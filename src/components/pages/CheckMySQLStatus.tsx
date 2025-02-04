
import React, { useEffect, useState } from "react";

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
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/check-mysql-status", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(config),
        });

        const data = await response.json();

        if (data.success) {
          setStatus("Conectado ao MySQL ✅");
        } else {
          setStatus("Erro ao conectar ❌");
          setError(data.message || "Falha desconhecida");
        }
      } catch (err) {
        setStatus("Erro ao conectar ❌");
        setError("Não foi possível verificar o status do MySQL.");
      }
    };

    checkStatus();
  }, [config]);

  return (
    <div>
      <h3>Status do MySQL</h3>
      {status ? <p>{status}</p> : <p>Verificando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CheckMySQLStatus;
