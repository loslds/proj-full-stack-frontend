//C:\repository\proj-full-stack-frontend\src\types\tablestatus.ts

export type TableStatus = "EXISTS" | "MISSING";

export type TableItem = {
  key: string;          // id único (ex: "EXISTS:pessoas")
  table: string;        // nome da tabela (ex: "pessoas")
  status: TableStatus;  // EXISTS ou MISSING
  label: string;        // texto para exibir no dropdown
  route: string;        // rota alvo ao selecionar
};
