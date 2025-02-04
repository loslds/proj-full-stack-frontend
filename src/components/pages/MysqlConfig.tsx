import React from 'react';
import { useMySQL } from '../contexts/MySQLContext'; // Use o hook do contexto

const MysqlConfig: React.FC = () => {
  const { dbConfig, setDbConfig } = useMySQL(); // Acesse a configuração diretamente

  const handleSubmit = () => {
    // A configuração será salva automaticamente no contexto
    // Não precisa mais passar `onConfigSubmit`
  };

  return (
    <div>
      <h2>Configuração do Banco de Dados</h2>
      <input 
        type="text" 
        placeholder="Host" 
        value={dbConfig.host} 
        onChange={(e) => setDbConfig({ ...dbConfig, host: e.target.value })} 
      />
      <input 
        type="text" 
        placeholder="Usuário" 
        value={dbConfig.user} 
        onChange={(e) => setDbConfig({ ...dbConfig, user: e.target.value })} 
      />
      <input 
        type="password" 
        placeholder="Senha" 
        value={dbConfig.password} 
        onChange={(e) => setDbConfig({ ...dbConfig, password: e.target.value })} 
      />
      <input 
        type="text" 
        placeholder="Database" 
        value={dbConfig.database} 
        onChange={(e) => setDbConfig({ ...dbConfig, database: e.target.value })} 
      />
      <button onClick={handleSubmit}>Salvar Configuração</button>
    </div>
  );
};

export default MysqlConfig;
