

// C:\repository\proj-full-stack-frontend\src\components\GenericGrid.tsx
import * as React from "react";
import styled from "styled-components";

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
  /* min-width: 40px;
  max-width: 100%; */
  width: 100%;
  max-width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
`;

const GridScroll = styled.div`
  width: 100%;
  max-width: 100%;
  max-height: 70vh;
  box-sizing: border-box;
  overflow-x: auto;
  overflow-y: auto;
`;

const GridTable = styled.table`
  min-width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  table-layout: auto;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.textColor};
`;
const GridHeadRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.headerBackground};
`;

const GridHeadCell = styled.th`
  min-width: 40px;
  padding: 8px 10px;
  text-align: left;
  font-weight: 700;
  font-size: 13px;
  white-space: normal;
  word-break: break-word;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.textColor};

  &:last-child {
    border-right: none;
  }
`;

const GridRowStyled = styled.tr`
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
  }

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.backgroundColorAlt};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverColor};
  }
`;

const GridCell = styled.td`
  min-width: 40px;
  padding: 8px 10px;
  font-size: 13px;
  vertical-align: top;
  white-space: normal;
  word-break: break-word;
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

const PaginationWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 12px 6px 4px;
  flex-wrap: wrap;
`;

const PageButton = styled.button`
  min-width: 120px;
  height: 34px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  font-weight: 600;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.hoverColor};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const PageInfoCenter = styled.div`
  flex: 1;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textColor};
`;

const PageInfoTotal = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textColor};
  white-space: nowrap;
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
  const [currentPage, setCurrentPage] = React.useState(1);

  const pageSize = 50;
  const shouldShowPagination = rows.length > pageSize;

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

  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));

  React.useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const paginatedRows = React.useMemo(() => {
    if (!shouldShowPagination) return rows;

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    return rows.slice(start, end);
  }, [rows, currentPage, shouldShowPagination]);

  const startRecord =
    rows.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;

  const endRecord = shouldShowPagination
    ? Math.min(currentPage * pageSize, rows.length)
    : rows.length;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

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
            {paginatedRows.map((row, idx) => {
              const globalIndex = shouldShowPagination
                ? (currentPage - 1) * pageSize + idx
                : idx;

              const rowKey = getRowKey(row, globalIndex);

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

      {shouldShowPagination && (
        <PaginationWrap>
          <PageButton
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            {"<< anterior"}
          </PageButton>

          <PageInfoCenter>
            {startRecord} a {endRecord}
          </PageInfoCenter>

          <PageInfoTotal>
            tt. reg : {rows.length}
          </PageInfoTotal>

          <PageButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            {"próximos >>"}
          </PageButton>
        </PaginationWrap>
      )}
    </GridWrap>
  );
};

export default GenericGrid;
export { GenericGrid };

