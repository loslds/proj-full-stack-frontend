import * as M from '../modal/stylesModal';
import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { CardHlpFooter } from './CardHlpFooter';
interface PropsCardDesenvolver {
  imgcarddes?: string;
  onclosesair?: () => void;
}
export const CardDesenvolver = ({
  imgcarddes,
  onclosesair 
}: PropsCardDesenvolver) => {
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
        <CardHlpFooter
            label="OBSERVAÇÂO em PÁGINA."
            texto="Para retornar poderá clicar em Fechar."
            onclosesair={onclosesair}
          />
      </CardModalTextoColumn>
    </CardModalCenter>
  );
};
