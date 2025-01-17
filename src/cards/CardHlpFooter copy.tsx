import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { ContentHeaderButtonHelp } from '../components/hearders/ContentHeaderButtonHelp';
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
  children
    
}: PropsCardHlpFooter) => {
  return (
    <CardModalTextoColumn>
      {}
      <p>
        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
      </p>
      <label>{label}</label>
      <p>
      <br/>
        {/* &emsp;&emsp; - {texto} &emsp;&emsp;&emsp;
        <a href="#" onClick={onclosesair}>
          Fechar...
        </a> */}
      </p>

      <p>
        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
      </p>
      <ContentHeaderButtonHelp
        imgbtnhlp={imghlpsair}
        titbtnhlp={'FECHAR...'}
        onClickhlp={onclosesair}
      />
    </CardModalTextoColumn>
  );
};
