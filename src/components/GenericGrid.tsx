
//C:\repository\proj-full-stack-frontend\src\components\GenericGrid.tsx
import * as React from "react";


export type GridRow = Record<string, unknown>;

export type GridColumn = {
  key: string;
  header?: string;
  type?: string;
};

export interface GenericGridProps {
  tableName: string;
  rows: GridRow[];
  columns?: GridColumn[];
}

/* =========================
 * Utilitários internos
 * ========================= */

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}

function getRowKey(row: GridRow, idx: number): string {
  const candidate =
    row.id ??
    row.ID ??
    row._id ??
    row.uuid ??
    row.UUID ??
    row.key ??
    row.codigo ??
    row.cod;

  return candidate != null ? String(candidate) : String(idx);
}

function formatCellValue(value: unknown): React.ReactNode {
  if (value === null || value === undefined) return "";
  if (typeof value === "boolean") return value ? "Sim" : "Não";
  if (typeof value === "number") return value;
  if (typeof value === "string") return value;
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

/* =========================
 * Componente
 * ========================= */

const GenericGrid: React.FC<GenericGridProps> = ({
  tableName,
  rows,
  columns,
}) => {
  const resolvedColumns: GridColumn[] = React.useMemo(() => {
    if (columns && columns.length > 0) return columns;

    const first = rows[0];
    if (!first || !isRecord(first)) return [];

    return Object.keys(first).map((key) => ({
      key,
      header: key,
    }));
  }, [columns, rows]);

  if (!rows || rows.length === 0) {
    return (
      <div className="gg-empty">
        <strong className="gg-empty-title">{tableName}</strong>
        <div className="gg-empty-msg">Tabela sem registros.</div>
      </div>
    );
  }

  return (
    <div className="gg-wrap">
      <table className="gg-table">
        <thead className="gg-thead">
          <tr className="gg-tr">
            {resolvedColumns.map((col) => (
              <th key={col.key} className="gg-th">
                {col.header ?? col.key}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="gg-tbody">
          {rows.map((row, idx) => (
            <tr key={getRowKey(row, idx)} className="gg-tr">
              {resolvedColumns.map((col) => (
                <td key={col.key} className="gg-td">
                  {formatCellValue(row[col.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GenericGrid;
export { GenericGrid };



// import * as React from "react";

// export type GridRow = Record<string, unknown>;

// export type GridColumn = {
//   key: string;
//   header?: string;
//   type?: string;
// };

// export interface GenericGridProps {
//   tableName: string;
//   rows: GridRow[];
//   columns?: GridColumn[];
// }

// function isRecord(v: unknown): v is Record<string, unknown> {
//   return typeof v === "object" && v !== null;
// }

// function getRowKey(row: GridRow, idx: number): string {
//   const candidate =
//     row.id ??
//     row.ID ??
//     row._id ??
//     row.uuid ??
//     row.UUID ??
//     row.key ??
//     row.codigo ??
//     row.cod;

//   return candidate != null ? String(candidate) : String(idx);
// }

// function formatCellValue(value: unknown): React.ReactNode {
//   if (value === null || value === undefined) return "";
//   if (typeof value === "boolean") return value ? "Sim" : "Não";
//   if (typeof value === "number") return value;
//   if (typeof value === "string") return value;
//   if (value instanceof Date) return value.toISOString();
//   if (typeof value === "object") return JSON.stringify(value);
//   return String(value);
// }

// const GenericGrid: React.FC<GenericGridProps> = ({ tableName, rows, columns }) => {
  
//   console.log('talea enviada : ', tableName);

//   const resolvedColumns: GridColumn[] = React.useMemo((): GridColumn[] => {
//     if (columns && columns.length > 0) return columns;

//     const first = rows[0];
//     if (!first || !isRecord(first)) return [];

//     return Object.keys(first).map((key) => ({
//       key,
//       header: key,
//     }));
//   }, [columns, rows]);

//   if (!rows || rows.length === 0) {
//     return (
//       <div style={{ padding: 12 }}>
//         <strong>{tableName}</strong>
//         <div style={{ marginTop: 8 }}>Tabela sem registros.</div>
//       </div>
//     );
//   }


//   return (
//     <div style={{ width: "100%", overflow: "auto" }}>
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             {resolvedColumns.map((col) => (
//               <th
//                 key={col.key}
//                 style={{
//                   textAlign: "left",
//                   padding: 8,
//                   borderBottom: "2px solid #ccc",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 {col.header ?? col.key}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <tbody>
//           {rows.map((row, idx) => (
//             <tr key={getRowKey(row, idx)}>
//               {resolvedColumns.map((col) => (
//                 <td
//                   key={col.key}
//                   style={{
//                     padding: 8,
//                     borderBottom: "1px solid #eee",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   {formatCellValue(row[col.key])}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default GenericGrid;
