

import api from "./api"; // importa da mesma pasta

const requiredTables = [
  "systable",
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

export interface CheckTablesResponse {
  success: boolean;
  missingTables?: string[];
  checkedTables?: string[]; // <== adicione isso
  message?: string;
}
export const checkTables = async (): Promise<CheckTablesResponse> => {
  try {
    const response = await api.post<CheckTablesResponse>("/systable/sync", {
      tables: requiredTables,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao verificar tabelas", error);
    return { success: false, message: "Erro ao verificar tabelas no banco" };
  }
};