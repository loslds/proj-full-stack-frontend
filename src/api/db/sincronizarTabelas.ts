
//C:\repository\proj-full-stack-frontend\src\api\db\sincronizarTabelas.ts
import api from "../api"; // importa da mesma pasta

// /api/db/sincronizarTabelas.ts
export async function sincronizarTabelas(requiredTables: string[]) {
  try {
    const res = await api.post('/db/sync-systables', { requiredTables });
    return res.data; // { success: true, message: '...', tables: [...] }
  } catch (err) {
    console.error('Erro ao sincronizar:', err);
    return { success: false, message: 'Falha na sincronização', tables: [] };
  }
}

