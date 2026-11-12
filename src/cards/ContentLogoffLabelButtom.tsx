
//
import { ReactNode } from 'react';
import * as Sy from './stylesSys';

interface PropsContentLogoffLabelButtom {
  children?: ReactNode;
};
export const ContentLogoffLabelButtom = ({
  children
}: PropsContentLogoffLabelButtom) => {
  return (
    <Sy.ContainerLogoffMainButtons>
      {children}
    </Sy.ContainerLogoffMainButtons>
  )
};

