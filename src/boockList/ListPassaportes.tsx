
export interface TypeListPassaporte {
  id: number;
  modo: string;
}
export const ListPassaportes: Array<TypeListPassaporte> = [
  { id: 0, modo: "Opções" },
  { id: 1, modo: "E-Mail / PassWord" },
  { id: 2, modo: "E-Mail / PIN" },
  { id: 3, modo: "Pseudônino / PassWord" },
  { id: 4, modo: "Pseudônino / PIN" },
  ];
