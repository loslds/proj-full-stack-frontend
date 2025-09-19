
//C:\repository\proj-full-stack-frontend\src\funcs\CepForm.tsx
import React, { useState } from "react";
import { buscarCep } from "../api/cepServices";

export function CepForm() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState<any>(null);

  const handleBuscar = async () => {
    if (!cep) return;
    try {
      const dados = await buscarCep(cep);
      setEndereco(dados);
    } catch {
      alert("Erro ao buscar CEP");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <button onClick={handleBuscar}>Buscar</button>

      {endereco && (
        <div>
          <p>Logradouro: {endereco.logradouro}</p>
          <p>Bairro: {endereco.bairro}</p>
          <p>Cidade: {endereco.localidade}</p>
          <p>Estado: {endereco.uf}</p>
        </div>
      )}
    </div>
  );
}
