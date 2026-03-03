
import React from "react";
import { getTableRows, GridRow } from "../../api/tables/getTableRows";

export type TableStatus =
  | "idle"
  | "loading"
  | "ready"
  | "not_found"
  | "empty"
  | "error";

export type UseTableDataOptions = {
  enabled?: boolean;
  client?: "admin" | "user"; // quem vai acessar a API
  limit?: number;
  offset?: number;
  // no futuro: filter?: Record<string, unknown>
};

export type UseTableDataResult = {
  status: TableStatus;
  loading: boolean;
  exists: boolean | null;
  rows: GridRow[];
  message: string | null;
  refetch: () => Promise<void>;
};

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  return "Falha ao consultar tabela.";
}

export function useTableData(
  tableName: string | null | undefined,
  opts?: UseTableDataOptions
): UseTableDataResult {
  const enabled = opts?.enabled ?? true;
  const client = opts?.client ?? "admin";
  const limit = opts?.limit ?? 50;
  const offset = opts?.offset ?? 0;

  const [status, setStatus] = React.useState<TableStatus>("idle");
  const [rows, setRows] = React.useState<GridRow[]>([]);
  const [exists, setExists] = React.useState<boolean | null>(null);
  const [message, setMessage] = React.useState<string | null>(null);

  const refetch = React.useCallback(async () => {
    const name = (tableName ?? "").trim();

    if (!enabled) return;

    if (!name) {
      setStatus("idle");
      setRows([]);
      setExists(null);
      setMessage(null);
      return;
    }

    setStatus("loading");
    setMessage(null);

    try {
      const r = await getTableRows({ table: name, limit, offset }, client);

      if (!r.success) {
        setStatus("error");
        setRows([]);
        setExists(null);
        setMessage(r.message ?? "Erro ao consultar tabela.");
        return;
      }

      if (!r.exists) {
        setStatus("not_found");
        setRows([]);
        setExists(false);
        setMessage(r.message ?? `Tabela "${name}" inexistente ou inacessível.`);
        return;
      }

      setExists(true);

      const safeRows = Array.isArray(r.rows) ? r.rows : [];
      setRows(safeRows);

      if (safeRows.length === 0) {
        setStatus("empty");
        setMessage(r.message ?? `Tabela "${name}" sem registros.`);
        return;
      }

      setStatus("ready");
      setMessage(null);
    } catch (err: unknown) {
      setStatus("error");
      setRows([]);
      setExists(null);
      setMessage(getErrorMessage(err));
    }
  }, [tableName, enabled, client, limit, offset]);

  React.useEffect(() => {
    void refetch();
  }, [refetch]);

  return {
    status,
    loading: status === "loading",
    exists,
    rows,
    message,
    refetch,
  };
}