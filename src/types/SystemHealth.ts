// C:\repository\proj-full-stack-frontend\src\system\SystemHealth.ts

export type SystemMode = 'LEVE' | 'DEV' | 'PROD';

export type TableCheckStep = {
  table: string;
  exists: boolean;
  records: number;
  message: string;
};

export interface SystemHealthResult {
  success: boolean;
  mode: SystemMode;
  initialized: boolean;

  // novo: banco atual
  database: string;

  // já existiam
  existingTables: string[];
  missingTables: string[];

  // novo: quantidade de registros por tabela
  records: Record<string, number>;

  // novo: detalhes de verificação
  steps: TableCheckStep[];
}