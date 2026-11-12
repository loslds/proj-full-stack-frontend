
//C:\repository\proj-full-stack-frontend\src\components\sidebar\ContentMainDropdownUl.tsx
import React from "react";
import { ContainerMainDropdownUl } from "./stylesSidebar";

export interface interfaceContentMainDropdownUl {
  children?: React.ReactNode;
  height?: string;
  width?: string;
  label?: string;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export const ContentMainDropdownUl = React.forwardRef<
  HTMLDivElement,
  interfaceContentMainDropdownUl
>(({ children, height, width, label, onMouseLeave }, ref) => {
  return (
    <ContainerMainDropdownUl
      ref={ref}
      $pxheight={height}
      $pxwidth={width}
      label={label}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </ContainerMainDropdownUl>
  );
});

ContentMainDropdownUl.displayName = "ContentMainDropdownUl";

