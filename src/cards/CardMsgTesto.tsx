import * as M from '../modal/stylesModal';
import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';

interface PropsCardMsgTesto {
  imgcardmsg?: string;
  titTxt?: string;
  children?: React.ReactNode | JSX.Element;

}
export const CardCardMsgTesto = ({ imgcardmsg, titTxt,children, }: PropsCardMsgTesto) => {
  return (
    <CardModalCenter>
      <CardModalAround>
        <M.ContainerModalImg
          pminheight={'60px'}
          pwidth={'80px'}
          img={imgcardmsg}
        />
      </CardModalAround>
      <CardModalTextoColumn>
        <h3>{titTxt}</h3>
        {children}
      </CardModalTextoColumn>
    </CardModalCenter>
  );
};
