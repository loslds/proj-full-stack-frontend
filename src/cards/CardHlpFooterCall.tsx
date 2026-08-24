
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { ContentModalbetween } from '@/modal/ContentModalbetween';
import { ContentHeaderButtonVis } from '@/components/hearders/ContentHeaderButtonVis';
import { ContentHeaderButtonCont } from '@/components/hearders/ContentHeaderButtonCont';
import { ContentHeaderButtonHelp } from '../components/hearders/ContentHearderBtnImgHlpPg';
import bt_abortar from '../assets/defaults/btn/btn_def_q_sair.svg';
import bt_visitar from '../assets/defaults/btn/btn_def_q_visitar.svg';
import bt_continuar from '../assets/defaults/btn/btn_def_q_continuar.svg';

interface PropsCardHlpFooterCall {
  $imghlpsair?: string;
  label?: string;
  texto?: string;
  onClickvis?: () => void;
  onClickcont?: () => void;
  onClicksair?: () => void;

  children?: React.ReactNode;
}
export const CardHlpFooterCall = ({
  label,
  texto,
  onClicksair,
  onClickvis,
  onClickcont,
  children
}: PropsCardHlpFooterCall) => {
  return (
    <CardModalTextoColumn>
      <label>{label}</label>
      <p>
      <br/>
        &emsp;&emsp; - {texto} &emsp;&emsp;&emsp;
      </p>
      <br/>      
      <ContentModalbetween>
        {/** Mostra o formulário Help da página Visitante com o conteúdo explicativo */}
        <ContentHeaderButtonVis
          $imgbtnvis={bt_visitar}
          $titbtnvis={'Visitar...'}
          onClickvis={onClickvis}
        />
        {/** Se ele veio da pagina /Visitante feicha o modal e volta para a pagina de visitante, se ele veio de outra pagina, fecha o modal */}
        <ContentHeaderButtonCont
          $imgbtncont={bt_continuar}
          $titbtncont={'Continuar...'}
          onClickcont={onClickcont}
        />
         {/** envia de volta ou para a pagina de onde veio, fecha o modal */}
        <ContentHeaderButtonHelp
          $imgbtnhlp={bt_abortar}
          $titbtnhlp={'Fechar...'}
          onClickhlp={onClicksair}
        />
      </ContentModalbetween>      
      {children}
    </CardModalTextoColumn>
  );
};
