   
/////////////////////////////
// C:\repository\proj-full-stack-frontend\src\funcs\funcs\useTableData.ts
import React from "react";

/**
 * Cada linha da tabela é um objeto genérico:
 * chave = nome do campo
 * valor = desconhecido (definido em runtime)
 */
export type TableRow = Record<string, unknown>;

export interface TableDataResult {
  exists: boolean;      // tabela existe ou não
  columns: string[];    // nomes das colunas
  rows: TableRow[];     // registros
}

interface UseTableDataReturn {
  loading: boolean;
  error: string | null;
  data: TableDataResult | null;
}

export function useTableData(
  tableName?: string | null
): UseTableDataReturn {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [data, setData] = React.useState<TableDataResult | null>(null);

  React.useEffect(() => {
    if (!tableName) {
      setLoading(false);
      setError(null);
      setData(null);
      return;
    }

    let mounted = true;
    const controller = new AbortController();

    const fetchTableData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `http://localhost:3000/api/config/table/${encodeURIComponent(
            tableName
          )}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const json = await res.json();

        if (!mounted) return;

        setData({
          exists: Boolean(json.exists),
          columns: Array.isArray(json.columns) ? json.columns : [],
          rows: Array.isArray(json.rows) ? (json.rows as TableRow[]) : [],
        });
      } catch (err) {
        if (!mounted) return;
        if (err instanceof DOMException && err.name === "AbortError") return;

        setError("Falha ao consultar dados da tabela.");
        setData(null);
      }

      // ⚠️ finally SEM return
      if (mounted) {
        setLoading(false);
      }
    };

    fetchTableData();

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [tableName]);

  return { loading, error, data };
}


