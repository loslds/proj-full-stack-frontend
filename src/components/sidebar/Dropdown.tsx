
import React from "react";
import { ButtonDropdown } from "./stylesSidebar";
import { ContentMainDropdownUl } from "./ContentMainDropdownUl";

interface PropsDropdown {
  pxheigth?: string;
  pxwidth?: string;
  labelbtn?: string; // Texto do botão principal
  options: { label: string; value: string }[]; // Lista de opções do dropdown
  onSelect: (value: string) => void; // Callback ao selecionar um item
}

export const Dropdown = ({pxheigth, pxwidth, labelbtn, options, onSelect }: PropsDropdown) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ContentMainDropdownUl pxheigth={pxheigth} pxwidth={pxwidth}>
      <ButtonDropdown onClick={() => setIsOpen(!isOpen)}>
        {labelbtn}
      </ButtonDropdown>

      {isOpen && (
        <ul>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onSelect(option.value);
                setIsOpen(false);
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </ContentMainDropdownUl>
  );
};