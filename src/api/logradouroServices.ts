
// src/api/logradouroService.ts
import axios from "axios";

export const getLogradouros = async (uf: string, cidade: string, rua: string) => {
  try {
    const response = await axios.get(`/logradouro`, {
      params: { uf, cidade, rua },
    });
    return response.data; // lista de opções
  } catch (error) {
    console.error("Erro ao buscar Logradouro:", error);
    throw error;
  }
};
