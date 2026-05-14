




//C:\repository\proj-full-stack-frontend\src\components\grids\GenericGrid.tsx
import * as React from "react";
import styled from "styled-components";
import type { GridViewMode } from "./BarMenuConfig";

export type GridRow = Record<string, unknown>;

export type GridColumn = {
  key: string;
  header?: string;
  type?: string;
  visible?: boolean;
  minWidth?: number;
  maxWidth?: number;
  wrap?: boolean;
  isMain?: boolean;
};

export interface GenericGridProps {
  tableName: string;
  rows: GridRow[];
  columns?: GridColumn[];
  mode?: GridViewMode;
  pageSize?: number;
  onRowSelect?: (row: GridRow, rowKey: string) => void;
}

type GridFieldConfig = {
  key: string;
  header?: string;
  minWidth?: number;
  maxWidth?: number;
  wrap?: boolean;
};

const AUDIT_FIELDS = [
  "createdat",
  "updatedat",
  "createdby",
  "updatedby",
  "created_at",
  "updated_at",
  "created_by",
  "updated_by",
];

const DEFAULT_FIELDS_BY_TABLE: Record<string, GridFieldConfig[]> = {

  pessoas: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "nome", header: "Tipo Fator", minWidth: 140, maxWidth: 260, wrap: true },
  ],
  
empresas: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "tipo_pessoa", header: "Tipo", minWidth: 60, maxWidth: 80, },
    { key: "nome", header: "Nome de Empresa", minWidth: 140, maxWidth: 260, wrap: true, },
    { key: "fantasy", header: "Nome Fantasia", minWidth: 120, maxWidth: 220, wrap: true, },
  ],

  cadastros: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "id_origem", header: "ID_CAD", minWidth: 40, maxWidth: 52 },
    // ORIGEM (vai depender da API trazer resolvido)
    { key: "tab_nome", header: "Origem", minWidth: 160, maxWidth: 280, wrap: true },
    { key: "origem_nome", header: "Nome Cadastrado", minWidth: 160, maxWidth: 280, wrap: true },
    { key: "has_email", header: "Email", minWidth: 52, maxWidth: 70 },
    { key: "has_doc", header: "Docum.", minWidth: 52, maxWidth: 70 },
    { key: "has_fone", header: "Fone", minWidth: 52, maxWidth: 70 },
  ],
  
  visitantates: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "tipo_pessoa", header: "Tipo", minWidth: 50, maxWidth: 70 },
    { key: "empresa_nome", header: "Empresa", minWidth: 140, maxWidth: 260, wrap: true, },
    { key: "nome", header: "Nome de Visitante", minWidth: 140, maxWidth: 260, wrap: true, },
    { key: "fantasy", header: "Reconhecido", minWidth: 90, maxWidth: 140, wrap: true, },
  ],

  visitas: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "id_visitantes", header: "ID_VIS", minWidth: 50, maxWidth: 70, },
    { key: "visitante_nome", header: "Nome de Visitante", minWidth: 160, maxWidth: 280, wrap: true, },
    { key: "tempo_visitas", header: "Duração", minWidth: 70, maxWidth: 100, },
    { key: "saidaAt", header: "Logoff", minWidth: 120, maxWidth: 160, },
  ],

  consumidores: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "nome", header: "Nome de Consumidor", minWidth: 140, maxWidth: 260, wrap: true },
    { key: "fantasy", header: "Reconhecido", minWidth: 70, maxWidth: 100 },
  ],

  clientes: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "nome", header: "Nome de Cliente", minWidth: 140, maxWidth: 260, wrap: true },
    { key: "fantasy", header: "Reconhecido", minWidth: 70, maxWidth: 100 },
  ],

  fornecedores: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "nome", header: "Nome de Fornecedor", minWidth: 140, maxWidth: 260, wrap: true },
    { key: "fantasy", header: "Reconhecido", minWidth: 70, maxWidth: 100 },
  ],

  funcionarios: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "nome", header: "Nome de Funcionário", minWidth: 140, maxWidth: 260, wrap: true },
    { key: "fantasy", header: "Reconhecido", minWidth: 70, maxWidth: 100 },
  ],

  estados: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "nome", header: "Nome de Estados", minWidth: 140, maxWidth: 260, wrap: true, },
    { key: "prefixo", header: "UF", minWidth: 60, maxWidth: 80, },
  ],

  cidades: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "nome", header: "Nome de Cidades", minWidth: 160, maxWidth: 280, wrap: true },
    { key: "estados.prefixo", header: "UF", minWidth: 50, maxWidth: 70 },
  ],

  imagens: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "nome", header: "Nome da Imagem", minWidth: 160, maxWidth: 280, wrap: true, },
    { key: "tipo", header: "Tipo", minWidth: 70, maxWidth: 100, },
    { key: "svg", header: "SVG", minWidth: 70, maxWidth: 90, },
  ],

  emails: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "id_origem", header: "ID_ORIG", minWidth: 50, maxWidth: 70, },
    { key: "nome_origem", header: "Titular", minWidth: 160, maxWidth: 280, wrap: true, },
    { key: "id_cad", header: "ID_CAD", minWidth: 50, maxWidth: 70, },
    { key: "email", header: "Email", minWidth: 180, maxWidth: 300, wrap: true, },
  ],

  docs: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "id_origem", header: "ID_ORIG", minWidth: 50, maxWidth: 70, },
    { key: "nome_origem", header: "Titular", minWidth: 160, maxWidth: 280, wrap: true, },
    { key: "id_cad", header: "ID_CAD", minWidth: 50, maxWidth: 70, },
    { key: "cpf", header: "CPF", minWidth: 120, maxWidth: 150, },
    { key: "cnpj", header: "CNPJ", minWidth: 150, maxWidth: 190, },
  ],

  fones: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "id_origem", header: "ID_ORIG", minWidth: 50, maxWidth: 70, },
    { key: "nome_origem", header: "Titular", minWidth: 160, maxWidth: 280, wrap: true, },
    { key: "id_cad", header: "ID_CAD", minWidth: 50, maxWidth: 70, },
    { key: "fone_fixo", header: "Fone Fixo", minWidth: 100, maxWidth: 130, },
    { key: "fone_celular", header: "Celular", minWidth: 100, maxWidth: 130, },
    { key: "fone_contacto", header: "Contato", minWidth: 100, maxWidth: 130, },
  ],

  modulos: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "nome", header: "Nome de Módulo", minWidth: 160, maxWidth: 280, wrap: true, },
  ],

  //////////////////////////////////////////////////////////////////////////////////
 
  cargos: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "nome", header: "Nome de Cargo", minWidth: 160, maxWidth: 280, wrap: true, },
  ],

  acoes: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "nome", header: "Descrição", minWidth: 160, maxWidth: 280, wrap: true, },
    { key: "abrev", header: "Abrev.", minWidth: 100, maxWidth: 140, },
    { key: "cor", header: "Cor", minWidth: 80, maxWidth: 120, },
    { key: "nivel", header: "Nível", minWidth: 60, maxWidth: 80, },
  ],

  perguntas: [
    { key: "id", header: "ID", minWidth: 40, maxWidth: 52 },
    { key: "nome", header: "Perguntas",  minWidth: 220, maxWidth: 420, wrap: true, },
  ],



};





function normalizeKey(key: string): string {
  return key.toLowerCase().trim();
}

function isAuditField(key: string): boolean {
  return AUDIT_FIELDS.includes(normalizeKey(key));
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}

function getValueByPath(row: GridRow, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (!isRecord(acc)) return undefined;
    return acc[key];
  }, row);
}

function getColumnMinWidth(
  key: string,
  header?: string,
  minWidth?: number
): string {
  if (minWidth) return `${minWidth}px`;

  const name = String(header ?? key).toLowerCase();

  if (name === "id") return "40px";
  if (name.startsWith("id_")) return "52px";
  if (name.endsWith("_id")) return "52px";

  if (name.includes("nome")) return "140px";
  if (name.includes("name")) return "140px";
  if (name.includes("prefixo")) return "60px";
  if (name.includes("sigla")) return "60px";
  if (name.includes("uf")) return "50px";
  if (name.includes("abrev")) return "60px";
  if (name.includes("cor")) return "70px";
  if (name.includes("nivel")) return "70px";

  if (name.includes("descr")) return "160px";
  if (name.includes("obs")) return "180px";
  if (name.includes("email")) return "180px";
  if (name.includes("status")) return "90px";
  if (name.includes("ativo")) return "70px";

  if (name.includes("createdby")) return "70px";
  if (name.includes("updatedby")) return "70px";
  if (name.includes("createdat")) return "110px";
  if (name.includes("updatedat")) return "110px";

  return "90px";
}

function getColumnMaxWidth(
  key: string,
  header?: string,
  maxWidth?: number
): string {
  if (maxWidth) return `${maxWidth}px`;

  const name = String(header ?? key).toLowerCase();

  if (name === "id") return "52px";
  if (name.startsWith("id_")) return "52px";
  if (name.endsWith("_id")) return "52px";

  if (name.includes("nome")) return "280px";
  if (name.includes("name")) return "280px";
  if (name.includes("prefixo")) return "80px";
  if (name.includes("sigla")) return "80px";
  if (name.includes("uf")) return "70px";
  if (name.includes("abrev")) return "90px";
  if (name.includes("cor")) return "110px";
  if (name.includes("nivel")) return "90px";

  return "360px";
}

function shouldWrapColumn(key: string, header?: string, wrap?: boolean): boolean {
  if (typeof wrap === "boolean") return wrap;

  const name = String(header ?? key).toLowerCase();

  return (
    name.includes("nome") ||
    name.includes("name") ||
    name.includes("descr") ||
    name.includes("obs")
  );
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

function getColumnsFromRows(rows: GridRow[]): GridColumn[] {
  const first = rows[0];

  if (!first || !isRecord(first)) return [];

  return Object.keys(first).map((key) => ({
    key,
    header: key,
    visible: true,
  }));
}

function getConfiguredDefaultColumns(tableName: string): GridColumn[] | null {
  const config = DEFAULT_FIELDS_BY_TABLE[normalizeKey(tableName)];

  if (!config || config.length === 0) return null;

  return config.map((field) => ({
    key: field.key,
    header: field.header ?? field.key,
    visible: true,
    minWidth: field.minWidth,
    maxWidth: field.maxWidth,
    wrap: field.wrap,
  }));
}

function resolveColumnsByMode(
  tableName: string,
  rows: GridRow[],
  columns: GridColumn[] | undefined,
  mode: GridViewMode
): GridColumn[] {
  const baseColumns =
    columns && columns.length > 0 ? columns : getColumnsFromRows(rows);

  const visibleColumns = baseColumns.filter((col) => col.visible !== false);

  if (mode === "detail") {
    return visibleColumns;
  }

  if (mode === "list") {
    return visibleColumns.filter((col) => !isAuditField(col.key));
  }

  const configuredDefault = getConfiguredDefaultColumns(tableName);

  if (configuredDefault) {
    return configuredDefault;
  }

  const preferredKeys = [
    "id",
    "nome",
    "name",
    "descricao",
    "descr",
    "prefixo",
    "sigla",
    "uf",
    "abrev",
    "codigo",
    "cod",
  ];

  const defaultColumns = visibleColumns.filter((col) =>
    preferredKeys.includes(normalizeKey(col.key))
  );

  if (defaultColumns.length >= 2) {
    return defaultColumns.slice(0, 4);
  }

  return visibleColumns.filter((col) => !isAuditField(col.key)).slice(0, 4);
}

function getTableMinWidth(columns: GridColumn[], mode: GridViewMode): number {
  if (mode === "default") {
    return columns.reduce((total, col) => {
      const width = getColumnMinWidth(col.key, col.header, col.minWidth);
      return total + Number(width.replace("px", ""));
    }, 42);
  }

  return columns.reduce((total, col) => {
    const width = getColumnMinWidth(col.key, col.header, col.minWidth);
    return total + Number(width.replace("px", ""));
  }, 42);
}

const GridWrap = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const GridScroll = styled.div`
  width: 100%;
  max-width: 100%;
  min-width: 0;
  max-height: 70vh;
  box-sizing: border-box;
  overflow-x: auto;
  overflow-y: auto;
`;

const GridTable = styled.table<{
  $minTableWidth: number;
  $mode: GridViewMode;
}>`
  width: ${({ $mode }) => ($mode === "default" ? "100%" : "max-content")};
  min-width: ${({ $mode, $minTableWidth }) =>
    $mode === "default" ? "100%" : `${$minTableWidth}px`};
  max-width: 100%;
  border-collapse: collapse;
  table-layout: auto;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.textColor};
`;

const GridHeadRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.headerBackground};
`;

const GridHeadCell = styled.th<{
  $minWidth?: string;
  $maxWidth?: string;
  $wrap?: boolean;
}>`
  width: ${({ $maxWidth = "auto" }) => $maxWidth};
  min-width: ${({ $minWidth = "40px" }) => $minWidth};
  max-width: ${({ $maxWidth = "360px" }) => $maxWidth};
  padding: 3px 5px;
  text-align: left;
  vertical-align: top;
  font-weight: 700;
  font-size: 13px;
  white-space: ${({ $wrap }) => ($wrap ? "normal" : "nowrap")};
  word-break: ${({ $wrap }) => ($wrap ? "break-word" : "normal")};
  overflow-wrap: ${({ $wrap }) => ($wrap ? "anywhere" : "normal")};
  overflow: hidden;
  text-overflow: ellipsis;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.textColor};

  &:last-child {
    border-right: none;
  }
`;

const GridRowStyled = styled.tr<{ $selected?: boolean }>`
  cursor: pointer;

  &:nth-child(odd) {
    background-color: ${({ $selected, theme }) =>
      $selected ? theme.colors.hoverColor : theme.colors.backgroundColor};
  }

  &:nth-child(even) {
    background-color: ${({ $selected, theme }) =>
      $selected ? theme.colors.hoverColor : theme.colors.backgroundColorAlt};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverColor};
  }
`;

const GridCell = styled.td<{
  $minWidth?: string;
  $maxWidth?: string;
  $wrap?: boolean;
}>`
  width: ${({ $maxWidth = "auto" }) => $maxWidth};
  min-width: ${({ $minWidth = "40px" }) => $minWidth};
  max-width: ${({ $maxWidth = "360px" }) => $maxWidth};
  padding: 3px 5px;
  text-align: left;
  vertical-align: top;
  font-size: 13px;
  white-space: ${({ $wrap }) => ($wrap ? "normal" : "nowrap")};
  word-break: ${({ $wrap }) => ($wrap ? "break-word" : "normal")};
  overflow-wrap: ${({ $wrap }) => ($wrap ? "anywhere" : "normal")};
  overflow: hidden;
  text-overflow: ellipsis;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.textColor};

  &:last-child {
    border-right: none;
  }
`;

const RadioHeadCell = styled.th`
  width: 42px;
  min-width: 42px;
  max-width: 42px;
  padding: 4px 6px;
  text-align: center;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const RadioCell = styled.td`
  width: 42px;
  min-width: 42px;
  max-width: 42px;
  padding: 4px 6px;
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

const GenericGrid: React.FC<GenericGridProps> = ({
  tableName,
  rows,
  columns,
  mode = "default",
  pageSize = 50,
  onRowSelect,
}) => {
  const [selectedRow, setSelectedRow] = React.useState<string | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);

  const resolvedColumns = React.useMemo(
    () => resolveColumnsByMode(tableName, rows, columns, mode),
    [tableName, rows, columns, mode]
  );

  const minTableWidth = React.useMemo(
    () => getTableMinWidth(resolvedColumns, mode),
    [resolvedColumns, mode]
  );

  const shouldShowPagination = rows.length > pageSize;
  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));

  React.useEffect(() => {
    setCurrentPage(1);
    setSelectedRow(null);
  }, [tableName, mode]);

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
  }, [rows, currentPage, shouldShowPagination, pageSize]);

  const startRecord =
    rows.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;

  const endRecord = shouldShowPagination
    ? Math.min(currentPage * pageSize, rows.length)
    : rows.length;

  const handleSelectRow = React.useCallback(
    (row: GridRow, rowKey: string) => {
      setSelectedRow(rowKey);
      onRowSelect?.(row, rowKey);
    },
    [onRowSelect]
  );

  const handlePreviousPage = React.useCallback(() => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  }, []);

  const handleNextPage = React.useCallback(() => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  }, [totalPages]);

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
        <GridTable $minTableWidth={minTableWidth} $mode={mode}>
          <thead>
            <GridHeadRow>
              <RadioHeadCell />

              {resolvedColumns.map((col) => {
                const minWidth = getColumnMinWidth(
                  col.key,
                  col.header,
                  col.minWidth
                );

                const maxWidth = getColumnMaxWidth(
                  col.key,
                  col.header,
                  col.maxWidth
                );

                const wrap = shouldWrapColumn(col.key, col.header, col.wrap);

                return (
                  <GridHeadCell
                    key={col.key}
                    $minWidth={minWidth}
                    $maxWidth={maxWidth}
                    $wrap={wrap}
                  >
                    {col.header ?? col.key}
                  </GridHeadCell>
                );
              })}
            </GridHeadRow>
          </thead>

          <tbody>
            {paginatedRows.map((row, idx) => {
              const globalIndex = shouldShowPagination
                ? (currentPage - 1) * pageSize + idx
                : idx;

              const rowKey = getRowKey(row, globalIndex);
              const isSelected = selectedRow === rowKey;

              return (
                <GridRowStyled
                  key={rowKey}
                  $selected={isSelected}
                  onClick={() => handleSelectRow(row, rowKey)}
                >
                  <RadioCell>
                    <RadioInput
                      type="radio"
                      name={`grid-select-${tableName}`}
                      checked={isSelected}
                      onChange={() => handleSelectRow(row, rowKey)}
                      onClick={(event) => event.stopPropagation()}
                    />
                  </RadioCell>

                  {resolvedColumns.map((col) => {
                    const minWidth = getColumnMinWidth(
                      col.key,
                      col.header,
                      col.minWidth
                    );

                    const maxWidth = getColumnMaxWidth(
                      col.key,
                      col.header,
                      col.maxWidth
                    );

                    const wrap = shouldWrapColumn(col.key, col.header, col.wrap);

                    return (
                      <GridCell
                        key={col.key}
                        $minWidth={minWidth}
                        $maxWidth={maxWidth}
                        $wrap={wrap}
                      >
                        {formatCellValue(getValueByPath(row, col.key))}
                      </GridCell>
                    );
                  })}
                </GridRowStyled>
              );
            })}
          </tbody>
        </GridTable>
      </GridScroll>

      {shouldShowPagination ? (
        <PaginationWrap>
          <PageButton onClick={handlePreviousPage} disabled={currentPage === 1}>
            {"<< anterior"}
          </PageButton>

          <PageInfoCenter>
            {startRecord} a {endRecord}
          </PageInfoCenter>

          <PageInfoTotal>tt. reg : {rows.length}</PageInfoTotal>

          <PageButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            {"próximos >>"}
          </PageButton>
        </PaginationWrap>
      ) : null}
    </GridWrap>
  );
};

export default GenericGrid;
export { GenericGrid };

