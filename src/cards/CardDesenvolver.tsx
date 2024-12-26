import * as M from '../modal/stylesModal';
import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';

interface PropsCardDesemvolver {
  imgcarddes?: string;
}
export const CardDesemvolver = ({ imgcarddes }: PropsCardDesemvolver) => {
  return (
    <CardModalCenter>
      <CardModalAround>
        <M.ContainerModalImg
          pminheight={'60px'}
          pwidth={'80px'}
          img={imgcarddes}
        />
      </CardModalAround>
      <CardModalTextoColumn>
        <label>Serviço em Desemvolvimento.</label>
        <p>No momento aguardando programação de aplicativo.</p>
        <p>Desculpas pelo transtorno.</p>
      </CardModalTextoColumn>
    </CardModalCenter>
  );
};
