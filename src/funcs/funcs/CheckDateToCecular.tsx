
import { DateToCecular } from "./DateToCecular";
export function CheckDateToCecular(datadigitada: string): boolean {
  const dataCecular = DateToCecular(new Date());
  try {
    return dataCecular === datadigitada;
  } catch (error) {
    return false;
  };
};

