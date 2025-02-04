
import React from 'react';
import { useMySQL } from '../contexts/MySQLContext'; // Use o hook do contexto

const CheckDB: React.FC = () => {
  const { dbConfig } = useMySQL(); // Acesse diretamente a configuração do banco de dados via contexto

  return (
    <div>
      <h2>Verificando Configuração do Banco de Dados</h2>
      <p>Host: {dbConfig.host}</p>
      <p>Usuário: {dbConfig.user}</p>
      <p>Database: {dbConfig.database}</p>
      {/* Lógica de verificação da configuração do banco aqui */}
    </div>
  );
};

export default CheckDB;
