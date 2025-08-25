
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api/db", // Base para todas as chamadas do backend
  timeout: 5000, // 5 segundos de timeout (opcional)
});

export default api;
