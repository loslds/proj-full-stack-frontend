
import api from "./api"; // importa da mesma pasta

const requiredTables = [
  "systables",
  "pessoas",
  "empresas",
  //"cadastros",
  //"cidades",
  //"emails",
  //"docs",
  //"fones",
  //"codsegs",
  //"perguntas",
  //"respostas",
  //"consumidores",
  //"clientes",
  //"fornecedores",
  //"funcionarios",
  //"avatares",
  //"users",
  //"avatar_users",
  //"acesso",
  //"chaves",
  //"setores",
  //"acoes",
  //"resgate",
];

export const checkTables = async () => {
  try {
    const response = await api.post("/systables/sync", { tables: requiredTables });
    return response.data;
  } catch (error) {
    console.error("Erro ao verificar tabelas", error);
    return { success: false, message: "Erro ao verificar tabelas no banco" };
  }
};