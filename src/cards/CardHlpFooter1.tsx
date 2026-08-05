import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { ContentHeaderButtonHelp } from '../components/hearders/ContentHeaderButtonHelp';
import bt_abortar from '../assets/defaults/btn/btn_def_q_sair.svg';
interface PropsCardHlpFooter1 {
  imghlpsair?: string;
  label?: string;
  texto?: string;
  onclosesair?: () => void;
  children?: React.ReactNode;
}
export const CardHlpFooter1 = ({
  label,
  texto,
  onclosesair,
  children
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
      {children}
      <ContentHeaderButtonHelp
        $imgbtnhlp={bt_abortar}
        $titbtnhlp={'Fechar...'}
        onClickhlp={onclosesair}
      />
    </CardModalTextoColumn>
  );
};
