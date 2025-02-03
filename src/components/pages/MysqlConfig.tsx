
import React from "react";
import CheckMySQLStatus from "./CheckMySQLStatus";


const MysqlConfig = () => {
  const [config, setConfig] = React.useState({
    host: "",
    user: "",
    password: "",
    database: "", // ✅ Adicionando campo database
  });

  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true); // ✅ Agora a submissão será corretamente marcada
  };

  return (
    <div>
      <h2>Configuração do MySQL</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Host:
            <input type="text" name="host" value={config.host} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Usuário:
            <input type="text" name="user" value={config.user} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Senha:
            <input type="password" name="password" value={config.password} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Banco de Dados:
            <input type="text" name="database" value={config.database} onChange={handleChange} required />
          </label>
          <br />
          <button type="submit">Verificar MySQL</button>
        </form>
      ) : (
        <CheckMySQLStatus config={config} /> // ✅ Exibir CheckMySQLStatus apenas após envio
      )}
    </div>
  );
};

export default MysqlConfig;
