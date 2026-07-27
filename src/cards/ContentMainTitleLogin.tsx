
//
//import { ReactNode } from 'react';
import * as Sy from './stylesSystem';

interface PropsContentMainTitleLogin {
  titulo?: string;
};
export const ContentMainTitleLogin = ({
  titulo
}: PropsContentMainTitleLogin) => {
  return <Sy.ContainerMainTitleLogin><h1>{titulo}</h1></Sy.ContainerMainTitleLogin>;
};

