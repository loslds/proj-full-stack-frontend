import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { ContentHeaderButtonHelp } from '../components/hearders/ContentHeaderButtonHelp';

import { ContentModalbetween } from '@/modal/ContentModalbetween';

import bt_abortar from '../assets/defaults/btn/btn_def_q_sair.svg';
import bt_visitar from '../assets/defaults/btn/btn_def_q_visitar.svg';
import bt_continuar from '../assets/defaults/btn/btn_def_q_continuar.svg';

interface PropsCardHlpFooterCall {
  imghlpsair?: string;
  label?: string;
  texto?: string;
  onclosesair?: () => void;
  children?: React.ReactNode;
}
export const CardHlpFooterCall = ({
  label,
  texto,
  onclosesair,
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
        
        <ContentHeaderButtonHelp
          imgbtnhlp={bt_visitar}
          titbtnhlp={'Visitar...'}
          onClickhlp={onclosesair}
        />
        <ContentHeaderButtonHelp
          imgbtnhlp={bt_continuar}
          titbtnhlp={'Contibuar...'}
          onClickhlp={onclosesair}
        />

        <ContentHeaderButtonHelp
          imgbtnhlp={bt_abortar}
          titbtnhlp={'Fechar...'}
          onClickhlp={onclosesair}
        />
      </ContentModalbetween>      
      {children}
    </CardModalTextoColumn>
  );
};
