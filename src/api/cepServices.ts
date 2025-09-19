
//C:\repository\proj-full-stack-frontend\src\api\cepServices.ts
import axios from "axios";

// Função para buscar dados de um CEP
export async function buscarCep(cep: string) {
  try {
    const response = await axios.get(`/api/cep/${cep}`);
    return response.data; // retorna logradouro, bairro, cidade, uf, etc.
  } catch (error) {
    console.error("Erro ao buscar CEP:", error);
    throw error;
  }
}
