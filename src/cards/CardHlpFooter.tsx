//import { CardModalCenter } from '../modal/CardModalCenter';;
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';

interface PropsCardHlpFooter {
  imghlpsair?: string;
  label?: string;
  texto?: string;
  onclosesair?: () => void;
  children?: React.ReactNode;
}
export const CardHlpFooter = ({
  label,
  texto,
  onclosesair
}: PropsCardHlpFooter) => {
  return (
    <CardModalTextoColumn>
      <label>{label}</label>
      <p>
        &emsp;&emsp; - {texto} &emsp;&emsp;&emsp;
        <a href="#" onClick={onclosesair}>
          Fechar...
        </a>
      </p>
      <br />
      <br />
    </CardModalTextoColumn>
  );
};
