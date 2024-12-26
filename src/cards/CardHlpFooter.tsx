import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';

interface PropsCardHlpFooter {
  imghlpsair?: string;
  label?: string;
  texto?: string;
  onclosesair?: () => void;
  children?: React.ReactNode | JSX.Element;
}
export const CardHlpFooter = ({
  imghlpsair,
  label,
  texto,
  onclosesair,
  children,
}: PropsCardHlpFooter) => {
  return (
    <CardModalTextoColumn>
      <p>
        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
      </p>
      <label>{label}</label>
      <p>
        &emsp;&emsp; - {texto} &emsp;&emsp;&emsp;
        <a href="#" onClick={onclosesair}>
          Fechar...
        </a>
      </p>
      <p>
        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
      </p>
      <br />
      <br />
    </CardModalTextoColumn>
  );
};
