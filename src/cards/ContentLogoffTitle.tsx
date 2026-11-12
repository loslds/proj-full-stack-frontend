
//
//import { ReactNode } from 'react';
import * as Sy from './stylesSys';

interface PropsContentLogoffTitle {
  titulo?: string;
};
export const ContentLogoffTitle = ({
  titulo
}: PropsContentLogoffTitle) => {
  return <Sy.ContainerLogoffTitle>{titulo}</Sy.ContainerLogoffTitle>;
};

