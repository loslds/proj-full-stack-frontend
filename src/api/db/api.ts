
// api/db/api.ts
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api/db", // Base para todas as chamadas do backend
  timeout: 5000, // 5 segundos de timeout (opcional)
});

export default api;
