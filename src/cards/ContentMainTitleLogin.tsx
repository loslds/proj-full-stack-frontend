
//
//import { ReactNode } from 'react';
import * as Sy from './stylesSys';

interface PropsContentMainTitleLogin {
  titulo?: string;
};
export const ContentMainTitleLogin = ({
  titulo
}: PropsContentMainTitleLogin) => {
  return <Sy.ContainerMainTitleLogin><h1>{titulo}</h1></Sy.ContainerMainTitleLogin>;
};

