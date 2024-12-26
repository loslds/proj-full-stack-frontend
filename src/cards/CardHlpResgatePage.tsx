import * as M from '../modal/stylesModal';
import { CardModalCenter } from '../modal/CardModalCenter';
import { CardModalAround } from '../modal/CardModalAround';
import { CardModalTextoColumn } from '../modal/CardModalTextoColumn';
import { CardHlpFooter } from './CardHlpFooter';

interface PropsCardHlpResgatePage {
  imgcardresg?: string;
  pminheight?: string;
  pwidth?: string;
  onclosesair?: () => void;
}
export const CardHlpResgatePage = ({
  imgcardresg,
  onclosesair,
}: PropsCardHlpResgatePage) => {
  return (
    <CardModalCenter>
      <CardModalAround>
        <M.ContainerModalImg
          pminheight={'80px'}
          pwidth={'220px'}
          img={imgcardresg}
        />
      </CardModalAround>

      <CardModalTextoColumn>
        <h2>Sintase da Página Resgate.</h2>
        <p>&emsp; São os 3(treis) Passos para Logar no Sistema:</p>
        <p>&emsp;&emsp; 1º Passo</p>
        <p>&emsp;&emsp;&emsp; - Selecionar uma Opção de Resgate.</p>
        <ol>
          <li> E-mail (Titular) ou E-mail (Resgate)</li>
          <li> Nº do Celular (SMS) ou Nº do Celular (Whatsapp)</li>
          <li> Nº do C.P.F</li>
          <li> Perguntas. (Responder as (3)treis perguntas exigidas.</li>
        </ol>
        <p>&emsp;&emsp; 2º Passo</p>
        <p>&emsp;&emsp;&emsp; - Selecionar a Empresa para Atividades.</p>
        <p>&emsp;&emsp; 3º Passo</p>
        <p>
          &emsp;&emsp;&emsp; - Inserir o "Código Enviado pelo RESGATE", via
          encaminhamento selecionado.
        </p>
        <label>
          Será Solicitado abaixo Botões para "ABORTAR" ou "Continuar":
        </label>
        <h4>Obs.:</h4>
        <p>&emsp; - Caso Aborte o RESGATE irá redirecionar a Pâgina "HOME".</p>
        <p>&emsp; - Caso Continue, novos Paineis ião se Abrir.</p>
        <CardHlpFooter
          label="PÁGINA-> HOME."
          texto="Concluido o Resgate, será redirecionado para a Pagina
          Principal(HOME)."
          onclosesair={onclosesair}
        />
        <br />
      </CardModalTextoColumn>
    </CardModalCenter>
  );
};
