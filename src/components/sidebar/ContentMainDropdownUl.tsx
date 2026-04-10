
//C:\repository\proj-full-stack-frontend\src\components\sidebar\ContentMainDropdownUl.tsx
import React from "react";
import { ContainerMainDropdownUl } from "./stylesSidebar";

export interface interfaceContentMainDropdownUl {
  children?: React.ReactNode;
  pxheight?: string;
  pxwidth?: string;
  label?: string;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export const ContentMainDropdownUl = React.forwardRef<
  HTMLDivElement,
  interfaceContentMainDropdownUl
>(({ children, pxheight, pxwidth, label, onMouseLeave }, ref) => {
  return (
    <ContainerMainDropdownUl
      ref={ref}
      pxheight={pxheight}
      pxwidth={pxwidth}
      label={label}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </ContainerMainDropdownUl>
  );
});

ContentMainDropdownUl.displayName = "ContentMainDropdownUl";

