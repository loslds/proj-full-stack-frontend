
//C:\repository\proj-full-stack-frontend\src\api\api_adm.ts
// src/api/api_adm.ts
import axios from "axios";

const api_adm = axios.create({
  baseURL: "http://localhost:3000/api",
});

api_adm.interceptors.request.use((config) => {
  const token = localStorage.getItem("token_admin");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api_adm;
