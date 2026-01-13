
//C:\repository\proj-full-stack-frontend\src\funcs\funcs\CheckDateToCecular.tsx
import { DateToCecular } from "./DateToCecular";

export function CheckDateToCecular(datadigitada: string): boolean {
  const dataCecular = DateToCecular(new Date());
  return dataCecular === datadigitada;
};

