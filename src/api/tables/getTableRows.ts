
//C:\repository\proj-full-stack-frontend\src\api\tables\getTableRows.ts
import api_adm from "../api_adm";
import api from "../api";

export type GridRow = Record<string, unknown>;

export type GetTableRowsParams = {
  table: string;
  limit?: number;
  offset?: number;
  filter?: Record<string, unknown>; // se quiser enviar filtros depois
};

export type GetTableRowsResponse = {
  success: boolean;
  exists: boolean;
  rows: GridRow[];
  message?: string;
};

type ClientKind = "admin" | "user";

/**
 * Busca linhas de uma tabela (genérico).
 * - client="admin" usa token_admin
 * - client="user" usa token normal (api)
 */
export async function getTableRows(
  params: GetTableRowsParams,
  client: ClientKind
): Promise<GetTableRowsResponse> {
  const table = params.table.trim();
  if (!table) {
    return { success: false, exists: false, rows: [], message: "Tabela não informada." };
  }

  const http = client === "admin" ? api_adm : api;

  // Ajuste a rota para a SUA rota real:
  // Ex: /systables/rows/:table  ou /system/table/:table
  const res = await http.get<GetTableRowsResponse>(`/system/table/${encodeURIComponent(table)}`, {
    params: {
      limit: params.limit ?? 50,
      offset: params.offset ?? 0,
      // se quiser, serialize filter aqui
    },
  });

  return res.data;
}