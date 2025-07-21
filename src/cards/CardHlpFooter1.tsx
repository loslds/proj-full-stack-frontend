import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { ContentHeaderButtonHelp } from '../components/hearders/ContentHeaderButtonHelp';
interface PropsCardHlpFooter1 {
  imghlpsair?: string;
  label?: string;
  texto?: string;
  onclosesair?: () => void;
  //children?: React.ReactNode | JSX.Element;
}
export const CardHlpFooter1 = ({
  imghlpsair,
  label,
  texto,
  onclosesair
  //, children
    
}: PropsCardHlpFooter1) => {
  return (
    <CardModalTextoColumn>
      <label>{label}</label>
      <p>
      <br/>
        &emsp;&emsp; - {texto} &emsp;&emsp;&emsp;
        <a href="#" onClick={onclosesair}>
          Fechar...
        </a>
      </p>
      <ContentHeaderButtonHelp
        imgbtnhlp={imghlpsair}
        titbtnhlp={'FECHAR...'}
        onClickhlp={onclosesair}
      />
    </CardModalTextoColumn>
  );
};
