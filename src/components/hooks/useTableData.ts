
//C:\repository\proj-full-stack-frontend\src\components\hooks\useTableData.ts

import React from "react";
import { getTableRows, GridRow } from "../../api/tables/getTableRows";

export type TableStatus =
  | "idle"
  | "loading"
  | "ready"
  | "not_found"
  | "empty"
  | "error";

export type GridColumn = {
  key: string;
  header?: string;
  type?: string;
  visible?: boolean;
  minWidth?: number;
};

export type UseTableDataOptions = {
  enabled?: boolean;
  client?: "admin" | "user";
  limit?: number;
  offset?: number;
};

export type UseTableDataResult = {
  status: TableStatus;
  loading: boolean;
  exists: boolean | null;
  rows: GridRow[];
  columns?: GridColumn[];
  message: string | null;
  refetch: () => Promise<void>;
};

type TableRowsResponse = {
  success: boolean;
  exists?: boolean;
  rows?: GridRow[];
  columns?: GridColumn[];
  message?: string;
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
  const [columns, setColumns] = React.useState<GridColumn[] | undefined>(
    undefined
  );
  const [exists, setExists] = React.useState<boolean | null>(null);
  const [message, setMessage] = React.useState<string | null>(null);

  const reset = React.useCallback(() => {
    setStatus("idle");
    setRows([]);
    setColumns(undefined);
    setExists(null);
    setMessage(null);
  }, []);

  const refetch = React.useCallback(async () => {
    const name = (tableName ?? "").trim();

    if (!enabled) return;

    if (!name) {
      reset();
      return;
    }

    setStatus("loading");
    setMessage(null);

    try {
      const response = (await getTableRows(
        { table: name, limit, offset },
        client
      )) as TableRowsResponse;

      if (!response.success) {
        setStatus("error");
        setRows([]);
        setColumns(undefined);
        setExists(null);
        setMessage(response.message ?? "Erro ao consultar tabela.");
        return;
      }

      if (!response.exists) {
        setStatus("not_found");
        setRows([]);
        setColumns(undefined);
        setExists(false);
        setMessage(
          response.message ?? `Tabela "${name}" inexistente ou inacessível.`
        );
        return;
      }

      const safeRows = Array.isArray(response.rows) ? response.rows : [];
      const safeColumns = Array.isArray(response.columns)
        ? response.columns
        : undefined;

      setExists(true);
      setRows(safeRows);
      setColumns(safeColumns);

      if (safeRows.length === 0) {
        setStatus("empty");
        setMessage(response.message ?? `Tabela "${name}" sem registros.`);
        return;
      }

      setStatus("ready");
      setMessage(null);
    } catch (err: unknown) {
      setStatus("error");
      setRows([]);
      setColumns(undefined);
      setExists(null);
      setMessage(getErrorMessage(err));
    }
  }, [tableName, enabled, client, limit, offset, reset]);

  React.useEffect(() => {
    void refetch();
  }, [refetch]);

  return {
    status,
    loading: status === "loading",
    exists,
    rows,
    columns,
    message,
    refetch,
  };
}