
// src/api/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // ideal: aponta já para /api ref a porta do backend
});

export default api;

