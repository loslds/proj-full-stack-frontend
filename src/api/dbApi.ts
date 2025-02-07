
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/db'; // URL do backend

// Função para verificar a conexão com o banco
export const checkConnection = async () => {
  try {
    const response = await axios.get(`${API_URL}/check-connection`);
    return response.data; // Retorna a resposta do backend
  } catch (error) {
    console.error('Erro ao verificar conexão', error);
    return { success: false, message: 'Erro ao verificar a conexão com o banco' };
  }
};

// Função para verificar se as tabelas existem
export const checkTables = async () => {
  try {
    const response = await axios.get(`${API_URL}/check-tables`);
    return response.data; // Retorna a resposta do backend
  } catch (error) {
    console.error('Erro ao verificar as tabelas', error);
    return { success: false, message: 'Erro ao verificar as tabelas do banco' };
  }
};
