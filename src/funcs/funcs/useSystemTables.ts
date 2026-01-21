
//C:\repository\proj-full-stack-frontend\src\funcs\funcs\useSystemTables.ts
// C:\repository\proj-full-stack-frontend\src\funcs\funcs\useSystemTables.ts
import React from "react";
import type { SystemHealthResult } from "../../types/SystemHealth";

export type SystemTableOption = {
  label: string;  // ex: "✅ systables" | "⚠️ pessoas"
  value: string;  // ex: "systables" | "pessoas"
  exists: boolean;
};

export type UseSystemTablesReturn = {
  options: SystemTableOption[];
  loading: boolean;
  error: string | null;
  health: SystemHealthResult | null;
};

export function useSystemTables(enabled: boolean): UseSystemTablesReturn {
  const [options, setOptions] = React.useState<SystemTableOption[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [health, setHealth] = React.useState<SystemHealthResult | null>(null);

  React.useEffect(() => {
    if (!enabled) return;

    const controller = new AbortController();
    let mounted = true;

    const run = async () => {
      if (mounted) {
        setLoading(true);
        setError(null);
      }

      try {
        const res = await fetch("http://localhost:3000/api/system/health", {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data: SystemHealthResult = await res.json();
        if (!mounted) return;

        setHealth(data);

        const existing = new Set<string>((data.existingTables ?? []).map(String));
        const missing = new Set<string>((data.missingTables ?? []).map(String));

        // ✅ regra: sempre listar systables
        if (!existing.has("systables") && !missing.has("systables")) {
          missing.add("systables");
        }

        // evita duplicidade
        for (const t of existing) missing.delete(t);

        const optsExisting: SystemTableOption[] = Array.from(existing)
          .sort((a, b) => a.localeCompare(b))
          .map((t) => ({ value: t, exists: true, label: `✅ ${t}` }));

        const optsMissing: SystemTableOption[] = Array.from(missing)
          .sort((a, b) => a.localeCompare(b))
          .map((t) => ({ value: t, exists: false, label: `⚠️ ${t}` }));

        setOptions([...optsExisting, ...optsMissing]);
      } catch (err) {
        if (!mounted) return;

        // abort não é erro “real”
        if (err instanceof DOMException && err.name === "AbortError") return;

        setHealth(null);
        setError("Falha ao consultar /api/system/health");
        setOptions([]);
      } finally {
        // ✅ sem return aqui (evita no-unsafe-finally)
        if (mounted) setLoading(false);
      }
    };

    run();

    return () => {
      mounted = false;
      controller.abort();
    };
  }, [enabled]);

  return { options, loading, error, health };
}
