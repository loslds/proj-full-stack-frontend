 
// C:\repository\proj-full-stack-frontend\src\api\db\init.ts
import api from "./api"; // ajustei o caminho para subir um nível (saindo de db)

export interface InitStep {
  message: string;
  success: boolean;
  delay?: number; // opcional
}

export interface SystableRecord {
  id: number;
  nome: string;
  chkdb: number;
  numberregs?: number;
}

export interface InitResponse {
  success: boolean;
  steps: InitStep[];
  checkedTables?: string[];
  missingTables?: string[];
  systablesRecords?: SystableRecord[];
  message: string;
}

export async function initSystemApi(): Promise<InitResponse> {
  try {
    // 👇 chama a rota certa no backend
    const res = await api.get<InitResponse>("/db/init");
    return res.data;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Erro desconhecido ao chamar backend";
    return {
      success: false,
      steps: [],
      message: `❌ Erro ao chamar backend: ${message}`,
    };
  }
}


