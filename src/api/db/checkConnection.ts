
import api from "./api";

export const checkConnection = async () => {
  try {
    const response = await api.get("/check-connection");
    return response.data;
  } catch (error) {
    console.error("Erro ao verificar conexão", error);
    return { success: false, message: "Erro ao verificar a conexão com o banco" };
  }
};
 