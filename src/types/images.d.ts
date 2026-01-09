
//C:\repository\proj-full-stack-frontend\src\types\images.d.ts
// Declara arquivos SVG como React components
declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// Declara arquivos PNG, JPG, JPEG, GIF como módulos padrão (string)
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.ico' {
  const value: string;
  export default value;
}
declare module '*.sgv' {
  const value: string;
  export default value;
}

