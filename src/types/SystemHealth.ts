
//C:\repository\proj-full-stack-frontend\src\system\SystemHealth.ts
export type SystemMode = 'LEVE' | 'DEV' | 'PROD';

export interface SystemHealthResult {
  success: boolean;
  mode: SystemMode;
  initialized: boolean;
  existingTables: string[];
  missingTables: string[];
}