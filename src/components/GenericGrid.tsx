
// C:\repository\proj-full-stack-frontend\src\components\GenericGrid.tsx
import * as React from "react";
import styled from "styled-components";
// theme

export type GridRow = Record<string, unknown>;

export type GridColumn = {
  key: string;
  header?: string;
  type?: string;
  visible?: boolean;
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
 * Styled components
 * ========================= */

const GridWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const GridScroll = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
`;

const GridTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.textColor};
`;

const GridHeadRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

const GridHeadCell = styled.th`
  padding: 8px 10px;
  text-align: left;
  font-weight: 700;
  font-size: 13px;
  white-space: nowrap;
  border-right: 1px solid ${({ theme }) => theme.colors.textColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.headerBackground};

  &:last-child {
    border-right: none;
  }
`;

const GridRowStyled = styled.tr`
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
  }

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.backgroundColorAlt ?? "#f2f2f2"};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverColor ?? "#e0e0e0"};
  }
`;

const GridCell = styled.td`
  padding: 8px 10px;
  font-size: 13px;
  vertical-align: top;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.textColor};

  &:last-child {
    border-right: none;
  }
`;

const RadioHeadCell = styled.th`
  width: 40px;
  min-width: 40px;
  padding: 8px 6px;
  text-align: center;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const RadioCell = styled.td`
  width: 40px;
  min-width: 40px;
  padding: 8px 6px;
  text-align: center;
  vertical-align: middle;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const RadioInput = styled.input`
  cursor: pointer;
`;

const EmptyWrap = styled.div`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.textColor};
`;

const EmptyTitle = styled.strong`
  display: block;
  margin-bottom: 6px;
`;

const EmptyMsg = styled.div`
  opacity: 0.85;
`;

/* =========================
 * Componente
 * ========================= */

const GenericGrid: React.FC<GenericGridProps> = ({
  tableName,
  rows,
  columns,
}) => {
  const [selectedRow, setSelectedRow] = React.useState<string | null>(null);

  const resolvedColumns: GridColumn[] = React.useMemo(() => {
    if (columns && columns.length > 0) {
      return columns.filter((col) => col.visible !== false);
    }

    const first = rows[0];
    if (!first || !isRecord(first)) return [];

    return Object.keys(first).map((key) => ({
      key,
      header: key,
      visible: true,
    }));
  }, [columns, rows]);

  if (!rows || rows.length === 0) {
    return (
      <EmptyWrap>
        <EmptyTitle>{tableName}</EmptyTitle>
        <EmptyMsg>Tabela sem registros.</EmptyMsg>
      </EmptyWrap>
    );
  }

  return (
    <GridWrap>
      <GridScroll>
        <GridTable>
          <thead>
            <GridHeadRow>
              <RadioHeadCell />
              {resolvedColumns.map((col) => (
                <GridHeadCell key={col.key}>
                  {col.header ?? col.key}
                </GridHeadCell>
              ))}
            </GridHeadRow>
          </thead>

          <tbody>
            {rows.map((row, idx) => {
              const rowKey = getRowKey(row, idx);

              return (
                <GridRowStyled key={rowKey}>
                  <RadioCell>
                    <RadioInput
                      type="radio"
                      name={`grid-select-${tableName}`}
                      checked={selectedRow === rowKey}
                      onChange={() => setSelectedRow(rowKey)}
                    />
                  </RadioCell>

                  {resolvedColumns.map((col) => (
                    <GridCell key={col.key}>
                      {formatCellValue(row[col.key])}
                    </GridCell>
                  ))}
                </GridRowStyled>
              );
            })}
          </tbody>
        </GridTable>
      </GridScroll>
    </GridWrap>
  );
};

export default GenericGrid;
export { GenericGrid };




// //C:\repository\proj-full-stack-frontend\src\components\GenericGrid.tsx
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

// /* =========================
//  * Utilitários internos
//  * ========================= */

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

// /* =========================
//  * Componente
//  * ========================= */

// const GenericGrid: React.FC<GenericGridProps> = ({
//   tableName,
//   rows,
//   columns,
// }) => {
//   const resolvedColumns: GridColumn[] = React.useMemo(() => {
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
//       <div className="gg-empty">
//         <strong className="gg-empty-title">{tableName}</strong>
//         <div className="gg-empty-msg">Tabela sem registros.</div>
//       </div>
//     );
//   }

//   return (
//     <div className="gg-wrap">
//       <table className="gg-table">
//         <thead className="gg-thead">
//           <tr className="gg-tr">
//             {resolvedColumns.map((col) => (
//               <th key={col.key} className="gg-th">
//                 {col.header ?? col.key}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <tbody className="gg-tbody">
//           {rows.map((row, idx) => (
//             <tr key={getRowKey(row, idx)} className="gg-tr">
//               {resolvedColumns.map((col) => (
//                 <td key={col.key} className="gg-td">
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
// export { GenericGrid };

