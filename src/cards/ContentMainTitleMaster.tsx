
//
//import { ReactNode } from 'react';
import * as Sy from './stylesSystem';

interface PropsContentMainTitleMaster {
  titulo?: string;
};
export const ContentMainTitleMaster = ({
  titulo
}: PropsContentMainTitleMaster) => {
  return <Sy.ContainerMainTitleMaster><h1>{titulo}</h1></Sy.ContainerMainTitleMaster>;
};

