import React from 'react';
import * as M from './stylesModal';
import { ContentSidePageBottonButton } from '@/components/ContentSidePageBottonButton';

interface PropsCardModalTextoFooter {
  pwidth?:string;
  img?: string;
  titbtn?:string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode | JSX.Element;
}
export const CardModalTextoFooter = ({pwidth, children, img,titbtn, onClick  }: PropsCardModalTextoFooter) => {
  return (
    <M.ContainerCardFlexWidth pwidth={pwidth}>
        {children}
        <ContentSidePageBottonButton img={img} titbtn={titbtn} onClick={onclick} />
    </M.ContainerCardFlexWidth>
  )
};
