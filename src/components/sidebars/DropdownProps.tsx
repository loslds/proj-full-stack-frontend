
export interface DropdownProps {
  label: string; // Texto do botão principal
  options: { label: string; value: string }[]; // Lista de opções do dropdown
  onSelect: (value: string) => void; // Callback ao selecionar um item
}

