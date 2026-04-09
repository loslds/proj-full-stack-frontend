

import React from "react";
import { ContentMainDropdownUl } from "./ContentMainDropdownUl";
import { ButtonDropdown } from "./stylesSidebar";

export interface DropdownOption {
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

export const Dropdown: React.FC<PropsDropdown> = ({
  pxheight,
  pxwidth,
  labelbtn,
  options,
  onSelect,
}) => {
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);
  const [openSubSubmenu, setOpenSubSubmenu] = React.useState<string | null>(null);

  const closeAll = React.useCallback(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
    setOpenSubSubmenu(null);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current) return;

      if (!rootRef.current.contains(event.target as Node)) {
        closeAll();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeAll]);

  const handleToggleRoot = React.useCallback(() => {
    setIsOpen((old) => {
      const next = !old;

      if (!next) {
        setOpenSubmenu(null);
        setOpenSubSubmenu(null);
      }

      return next;
    });
  }, []);

  const selectValue = React.useCallback(
    (opt: DropdownOption) => {
      opt.onClick?.();
      onSelect(opt.value);
      closeAll();
    },
    [closeAll, onSelect]
  );

  const handleEnterLevel1 = React.useCallback((opt: DropdownOption) => {
    if (!opt.subOptions?.length) return;
    setOpenSubmenu(opt.value);
    setOpenSubSubmenu(null);
  }, []);

  const handleEnterLevel2 = React.useCallback((opt: DropdownOption) => {
    if (!opt.subOptions?.length) return;
    setOpenSubSubmenu(opt.value);
  }, []);

  return (
    <ContentMainDropdownUl
      ref={rootRef}
      pxheight={pxheight}
      pxwidth={pxwidth}
    >
      <ButtonDropdown type="button" onClick={handleToggleRoot}>
        {labelbtn}
      </ButtonDropdown>

      {isOpen && (
        <ul>
          {options.map((option) => {
            const hasChildren = Boolean(option.subOptions?.length);
            const isLevel1Open = openSubmenu === option.value;

            return (
              <li
                key={option.value}
                onMouseEnter={() => handleEnterLevel1(option)}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (!hasChildren) {
                      selectValue(option);
                    }
                  }}
                >
                  {option.label}
                </button>

                {hasChildren && isLevel1Open && (
                  <ul>
                    {option.subOptions!.map((subOption) => {
                      const hasChildren2 = Boolean(subOption.subOptions?.length);
                      const isLevel2Open = openSubSubmenu === subOption.value;

                      return (
                        <li
                          key={subOption.value}
                          onMouseEnter={() => handleEnterLevel2(subOption)}
                        >
                          <button
                            type="button"
                            onClick={() => {
                              if (!hasChildren2) {
                                selectValue(subOption);
                              }
                            }}
                          >
                            {subOption.label}
                          </button>

                          {hasChildren2 && isLevel2Open && (
                            <ul>
                              {subOption.subOptions!.map((subSubOption) => (
                                <li key={subSubOption.value}>
                                  <button
                                    type="button"
                                    onClick={() => selectValue(subSubOption)}
                                  >
                                    {subSubOption.label}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </ContentMainDropdownUl>
  );
};

// // C:\repository\proj-full-stack-frontend\src\components\sidebar\Dropdown.tsx
// import React from "react";
// import { ContentMainDropdownUl } from "./ContentMainDropdownUl";
// import { ButtonDropdown } from "./stylesSidebar";

// export interface DropdownOption {
//   label: string;
//   value: string;
//   subOptions?: DropdownOption[];
//   onClick?: () => void;
// }

// interface PropsDropdown {
//   pxheight?: string;
//   pxwidth?: string;
//   labelbtn?: string;
//   options: DropdownOption[];
//   onSelect: (value: string) => void;
// }

// export const Dropdown: React.FC<PropsDropdown> = ({
//   pxheight,
//   pxwidth,
//   labelbtn,
//   options,
//   onSelect,
// }) => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);
//   const [openSubSubmenu, setOpenSubSubmenu] = React.useState<string | null>(null);

//   const closeAll = React.useCallback(() => {
//     setIsOpen(false);
//     setOpenSubmenu(null);
//     setOpenSubSubmenu(null);
//   }, []);

//   const handleToggleRoot = React.useCallback(() => {
//     setIsOpen((old) => {
//       const next = !old;

//       if (!next) {
//         setOpenSubmenu(null);
//         setOpenSubSubmenu(null);
//       }

//       return next;
//     });
//   }, []);

//   const selectValue = React.useCallback(
//     (opt: DropdownOption) => {
//       opt.onClick?.();
//       onSelect(opt.value);
//       closeAll();
//     },
//     [closeAll, onSelect]
//   );

//   const handleEnterLevel1 = React.useCallback((opt: DropdownOption) => {
//     if (!opt.subOptions?.length) return;
//     setOpenSubmenu(opt.value);
//     setOpenSubSubmenu(null);
//   }, []);

//   const handleEnterLevel2 = React.useCallback((opt: DropdownOption) => {
//     if (!opt.subOptions?.length) return;
//     setOpenSubSubmenu(opt.value);
//   }, []);

//   return (
//     <ContentMainDropdownUl
//       pxheigth={pxheight}
//       pxwidth={pxwidth}

//       // onMouseLeave={closeAll}

//     >
//       <ButtonDropdown type="button" onClick={handleToggleRoot}>
//         {labelbtn}
//       </ButtonDropdown>

//       {isOpen && (
//         <ul>
//           {options.map((option) => {
//             const hasChildren = Boolean(option.subOptions?.length);
//             const isLevel1Open = openSubmenu === option.value;

//             console.log("option", option.label, option.subOptions);

//             return (
//               <li
//                 key={option.value}
//                 onMouseEnter={() => handleEnterLevel1(option)}
//               >
//                 <button
//                   type="button"
//                   onClick={() => {
//                     if (!hasChildren) {
//                       selectValue(option);
//                     }
//                   }}
//                 >
//                   {option.label}
//                 </button>

//                 {hasChildren && isLevel1Open && (
//                   <ul>
//                     {option.subOptions!.map((subOption) => {
//                       const hasChildren2 = Boolean(subOption.subOptions?.length);
//                       const isLevel2Open = openSubSubmenu === subOption.value;

//                       console.log("option", option.label, option.subOptions);

//                       return (
//                         <li
//                           key={subOption.value}
//                           onMouseEnter={() => handleEnterLevel2(subOption)}
//                         >
//                           <button
//                             type="button"
//                             onClick={() => {
//                               if (!hasChildren2) {
//                                 selectValue(subOption);
//                               }
//                             }}
//                           >
//                             {subOption.label}
//                           </button>

//                           {hasChildren2 && isLevel2Open && (
//                             <ul>
//                               {subOption.subOptions!.map((subSubOption) => (
//                                 <li key={subSubOption.value}>
//                                   <button
//                                     type="button"
//                                     onClick={() => selectValue(subSubOption)}
//                                   >
//                                     {subSubOption.label}
//                                   </button>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </ContentMainDropdownUl>
//   );
// };

