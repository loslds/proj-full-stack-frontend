
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
  const [openSubSubmenu, setOpenSubSubmenu] = React.useState<string | null>(null);
  //const [openSubSubSubmenu, setOpenSubSubSubmenu] = React.useState<string | null>(null);

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
              onMouseEnter={() => setOpenSubmenu(option.value)}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              {option.label}

              {option.subOptions && openSubmenu === option.value && (
                <ul>
                  {option.subOptions.map((subOption) => (
                    <li
                      key={subOption.value}
                      onMouseEnter={() => setOpenSubSubmenu(subOption.value)}
                      onMouseLeave={() => setOpenSubSubmenu(null)}
                    >
                      {subOption.label}

                      {subOption.subOptions && openSubSubmenu === subOption.value && (
                        <ul>
                          {subOption.subOptions.map((subSubOption) => (
                            <li
                              key={subSubOption.value}
                              onClick={() => {
                                onSelect(subSubOption.value);
                                setIsOpen(false);
                              }}
                            >
                              {subSubOption.label}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )};
    </ContentMainDropdownUl>
  );
};


{/**
  
import React, { useState } from "react";

interface DropdownOption {
  label: string;
  value: string;
  subOptions?: DropdownOption[];
}

interface DropdownProps {
  labelbtn?: string;
  options: DropdownOption[];
  onSelect: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ labelbtn, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openSubSubmenu, setOpenSubSubmenu] = useState<string | null>(null);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button onClick={() => setIsOpen(!isOpen)}>{labelbtn}</button>

      {isOpen && (
        <ul>
          {options.map((option) => (
            <li
              key={option.value}
              onMouseEnter={() => setOpenSubmenu(option.value)}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              {option.label}

              {option.subOptions && openSubmenu === option.value && (
                <ul>
                  {option.subOptions.map((subOption) => (
                    <li
                      key={subOption.value}
                      onMouseEnter={() => setOpenSubSubmenu(subOption.value)}
                      onMouseLeave={() => setOpenSubSubmenu(null)}
                    >
                      {subOption.label}

                      {subOption.subOptions && openSubSubmenu === subOption.value && (
                        <ul>
                          {subOption.subOptions.map((subSubOption) => (
                            <li
                              key={subSubOption.value}
                              onClick={() => {
                                onSelect(subSubOption.value);
                                setIsOpen(false);
                              }}
                            >
                              {subSubOption.label}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

  
*/}