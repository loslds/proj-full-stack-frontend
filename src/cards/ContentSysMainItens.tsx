// import React from 'react';
import * as Sy from './stylesSys';
interface PropsContentSysMainItens {
  children?: React.ReactNode;
}
export const ContentSysMainItens = ({ children }: PropsContentSysMainItens) => {
  return (
    <Sy.ContainerSysMainItens>
      {children}
    </Sy.ContainerSysMainItens>
  );
};
