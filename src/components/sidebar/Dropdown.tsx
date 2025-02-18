
import React from "react";
import { ContentMainDropdownUl } from "./ContentMainDropdownUl";
import { ButtonDropdown } from "./stylesSidebar";

interface DropdownOption {
  label: string;
  value: string;
  subOptions?: DropdownOption[];
  onClick?: () => void;
}

interface PropsDropdown {
  pxheight?: string;
  pxwidth?: string;
  labelbtn?: string;
  options: DropdownOption[];
  onSelect: (value: string) => void;
  
}
export const Dropdown = ({ pxheight, pxwidth, labelbtn, options, onSelect }: PropsDropdown) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);

  return (
    <ContentMainDropdownUl pxheigth={pxheight} pxwidth={pxwidth}>
      <ButtonDropdown onClick={() => setIsOpen(!isOpen)}>
        {labelbtn}
      </ButtonDropdown>

      {isOpen && (
        <ul>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                if (!option.subOptions) {
                  onSelect(option.value);
                  setIsOpen(false);
                }
              }}
              onMouseEnter={() => setOpenSubmenu(option.value)}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              {option.label}

              {option.subOptions && openSubmenu === option.value && (
                <ul>
                  {option.subOptions.map((subOption) => (
                    <li
                      key={subOption.value}
                      onClick={() => onSelect(subOption.value)}
                    >
                      {subOption.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </ContentMainDropdownUl>
  );
};


