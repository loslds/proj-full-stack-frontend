import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { ContentHearderBtnImgHlpPg } from '../components/hearders/ContentHearderBtnImgHlpPg';
import btn_def_q_sair  from '../assets/defaults/btn/btn_def_q_sair.svg';

interface PropsCardHlpFooter1 {
  imgbtnhlppg?: string;
  label?: string;
  texto?: string;
  onclosesair?: () => void;
  children?: React.ReactNode;
}
export const CardHlpFooter1 = ({
  imgbtnhlppg,
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
      <ContentHearderBtnImgHlpPg
        imgbtnhlppg={imgbtnhlppg || btn_def_q_sair}
        titbtnhlppg={'Fechar...'}
        onClickbtnhlppg={onclosesair}
      />
    </CardModalTextoColumn>
  );
};
