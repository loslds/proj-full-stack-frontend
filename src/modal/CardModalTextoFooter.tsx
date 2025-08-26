import React from 'react';
import * as M from './stylesModal';
import { ContentSidePageBottonButton } from '../components/ContentSidePageBottonButton';

interface PropsCardModalTextoFooter {
  pwidth?:string;
  img?: string;
  titbtn?:string;
  children?: React.ReactNode;
  onClick?: () => void;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
}
export const CardModalTextoFooter = ({pwidth, children, img, titbtn, onClick, onMouseEnter, onMouseLeave }: PropsCardModalTextoFooter) => {
  return (
    <M.ContainerCardFlexWidth pwidth={pwidth}>
        {children}
        <ContentSidePageBottonButton img={img} titbtn={titbtn} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
    </M.ContainerCardFlexWidth>
  )
};
