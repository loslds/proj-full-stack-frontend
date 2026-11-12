
import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { CardHlpFooter } from './CardHlpFooter';
import { ContentCardImgPnl } from './ContentCardImgPnl';

interface PropsCardNotDevelopment {
  heightpnl?: string;
  widthpnl?: string;
  imgpnl?: string;
  titlepnl?: string;
  onClickpnl?: () => void;
  onclosesair?: () => void;
}
export const CardNotDevelopment = ({
  heightpnl,
  widthpnl,
  imgpnl,
  titlepnl,
  onClickpnl,
  onclosesair
}: PropsCardNotDevelopment) => {
  return (
    <CardModalCenter>
      <CardModalAround>
        <ContentCardImgPnl
          heightpnl={heightpnl}
          widthpnl={widthpnl}
          imgpnl={imgpnl}
          titlepnl={titlepnl}
          onClickpnl={onClickpnl}
        />
      </CardModalAround>
      <CardModalTextoColumn>
        <label>Serviço em Desemvolvimento.</label>
        <p>No momento aguardando programação de: aplicativo/formulário.</p>
        <p>Desculpas pelo transtorno.</p>
        <CardHlpFooter
            label="OBSERVAÇÂO sobre PÁGINA."
            texto="Para retornar poderá clicar em Fechar."
            onclosesair={onclosesair}
          />
      </CardModalTextoColumn>
    </CardModalCenter>
  );
};

export default CardNotDevelopment;
///////////////////////////