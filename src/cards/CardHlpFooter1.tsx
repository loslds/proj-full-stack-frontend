import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { ContentHeaderButtonHelp } from '../components/hearders/ContentHeaderButtonHelp';
import bt_abortar from '../assets/svgs/bt_abortar.svg';
interface PropsCardHlpFooter1 {
  imghlpsair?: string;
  label?: string;
  texto?: string;
  onclosesair?: () => void;
}
export const CardHlpFooter1 = ({
  label,
  texto,
  onclosesair
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
        imgbtnhlp={bt_abortar}
        titbtnhlp={'FECHAR...'}
        onClickhlp={onclosesair}
      />
    </CardModalTextoColumn>
  );
};
