
//C:\repository\proj-full-stack-frontend\src\api\auth\masterLogin.ts
import api from "../api";

export interface MasterLoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}

export async function masterLogin(masterKey: string): Promise<MasterLoginResponse> {
  try {
    const res = await api.post<MasterLoginResponse>("/auth/master", { masterKey });
    return res.data;
  }
  catch (err: unknown) {
    console.error(err);
    return { success: false, message: "Falha de rede/servidor ao autenticar." };
  }
}

