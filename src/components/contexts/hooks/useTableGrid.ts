
//C:\repository\proj-full-stack-frontend\src\components\contexts\hooks\useTableGrid.ts

import React from "react";
import api from "../../../api/api";         // user
import api_adm from "../../../api/api_adm"; // master
import { useAcessoContext } from "../ContextAcesso";

export type GridColumn = { key: string; label: string };
export type GridRow = Record<string, unknown>;

type MetaResponse = { success: boolean; columns: Array<{ name: string }> };
type RowsResponse = { success: boolean; rows: GridRow[] };

export function useTableGrid(params: {
  tableName?: string;
  filter?: string;
  enabled?: boolean;
}) {
  const { state } = useAcessoContext();
  const { tableName, filter, enabled = true } = params;

  const [columns, setColumns] = React.useState<GridColumn[]>([]);
  const [rows, setRows] = React.useState<GridRow[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const [notFound, setNotFound] = React.useState(false);
  const [empty, setEmpty] = React.useState(false);

  const http = React.useMemo(() => {
    const isMaster = Boolean(state.chvkey) || Boolean(state.auth_admin?.trim?.());
    return isMaster ? api_adm : api;
  }, [state.chvkey, state.auth_admin]);

  const reload = React.useCallback(async () => {
    const t = String(tableName ?? "").trim();
    if (!enabled || !t) return;

    setLoading(true);
    setError(null);
    setNotFound(false);
    setEmpty(false);

    try {
      // 1) meta
      const metaRes = await http.get<MetaResponse>(`/tables/${encodeURIComponent(t)}/meta`);
      if (!metaRes.data?.success) throw new Error("Falha ao ler meta da tabela.");

      const cols = (metaRes.data.columns ?? []).map((c) => ({
        key: c.name,
        label: c.name,
      }));
      setColumns(cols);

      // 2) rows
      const rowsRes = await http.get<RowsResponse>(`/tables/${encodeURIComponent(t)}/rows`, {
        params: filter ? { filter } : undefined,
      });
      if (!rowsRes.data?.success) throw new Error("Falha ao ler registros da tabela.");

      const rws = rowsRes.data.rows ?? [];
      setRows(rws);
      setEmpty(rws.length === 0);
    } catch (e: unknown) {
      // 404 => tabela inexistente
      const msg = e instanceof Error ? e.message : "Erro ao carregar tabela.";
      setError(msg);

      // se axios:
      // @ts-ignore
      const status = e?.response?.status as number | undefined;
      if (status === 404) setNotFound(true);
    } finally {
      setLoading(false);
    }
  }, [http, tableName, filter, enabled]);

  React.useEffect(() => {
    void reload();
  }, [reload]);

  return { columns, rows, loading, error, notFound, empty, reload };
}