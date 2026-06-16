
// src/api/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 10000, // ✅ 10s: evita travar para sempre
});

export default api;
